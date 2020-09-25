import React from "react";
import {
  Container,
  Select,
  Segment,
  Dimmer,
  Loader,
  Icon
} from "semantic-ui-react";
import {
  getTopContributors,
  getCandidates,
  getTopIndustries,
  getCandidateDetails
} from "./utils/api";
import { states } from "./utils/constants";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedState: null,
      candidates: [],
      loading: false,
      selectedCandidate: null,
      topContributors: [],
      topIndustries: [],
      loadingCandidateDetails: false,
      sortDirection: "desc"
    };
  }

  sortAsc = (a, b) =>
    parseFloat(a.details.total) > parseFloat(b.details.total)
      ? 1
      : parseFloat(b.details.total) > parseFloat(a.details.total)
      ? -1
      : 0;

  sortDesc = (a, b) =>
    parseFloat(a.details.total) > parseFloat(b.details.total)
      ? -1
      : parseFloat(b.details.total) > parseFloat(a.details.total)
      ? 1
      : 0;

  getCandidatesForState = async (e, data) => {
    this.setState({
      loading: true,
      selectedState: data.value
    });
    let candidates = await getCandidates(data.value);
    candidates = await Promise.all(
      candidates.map(
        async candidate =>
          await getCandidateDetails(candidate.cid)
            .then(details => ({
              ...candidate,
              details
            }))
            .catch(err => {
              console.log("Error fetching info for CID ", candidate.cid);
              return;
            })
      )
    );
    candidates = candidates
      .filter(x => x)
      .sort(this.state.sortDirection === "asc" ? this.sortAsc : this.sortDesc);
    this.setState({
      candidates,
      loading: false
    });
  };

  selectCandidate = async id => {
    if (this.state.selectedCandidate === id) {
      this.setState({ selectedCandidate: null });
    } else {
      this.setState({
        loadingCandidateDetails: true,
        selectedCandidate: id
      });
      const topContributors = await getTopContributors(id);
      const topIndustries = await getTopIndustries(id);
      this.setState({
        topContributors,
        topIndustries,
        loadingCandidateDetails: false
      });
    }
  };

  getParty = str => {
    switch (str) {
      case "D":
        return "Democrat";
      case "R":
        return "Republican";
      case "3":
        return "Third Party";
      case "L":
        return "Libertarian";
      default:
        return str;
    }
  };

  getChamber = str => {
    switch (str) {
      case "H":
        return "House";
      case "S":
        return "Senate";
      default:
        return str;
    }
  };

  sortTable = () => {
    const { sortDirection, candidates } = this.state;
    let newCandidates = candidates.reverse();
    let newSortDirection = "asc";
    if (sortDirection === "asc") {
      newSortDirection = "desc";
    }
    this.setState({
      candidates: newCandidates,
      sortDirection: newSortDirection
    });
  };

  formatCurrency = amount =>
    `$${parseFloat(amount).toLocaleString(undefined, {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    })}`;

  render() {
    const {
      selectedState,
      candidates,
      loading,
      selectedCandidate,
      loadingCandidateDetails,
      topContributors,
      topIndustries,
      sortDirection
    } = this.state;
    return (
      <div className="app">
        <Container>
          <h1>Legislator Contribution Lookup</h1>
          <p>Select a state to view legislators.</p>
          <Select
            placeholder="Select your state"
            options={states}
            onChange={this.getCandidatesForState}
          />
          {selectedState && !loading ? (
            <Segment>
              <h2>Legislators for {selectedState}</h2>
              <div className="candidate-table">
                <h3>
                  Click on a legislator to view their top contributors for 2020.
                </h3>
                <Icon
                  name={
                    sortDirection === "asc"
                      ? "sort amount down"
                      : "sort amount up"
                  }
                  size="large"
                  onClick={this.sortTable}
                />
              </div>
              <ul>
                {candidates.map(x => (
                  <Segment
                    key={x.cid}
                    className="candidate-details"
                    onClick={() => this.selectCandidate(x.cid)}
                  >
                    <div className="candidate-details__header">
                      <h4>{x.firstlast}</h4>
                      <h4>{this.getParty(x.details.party)}</h4>
                      <h4>{this.getChamber(x.details.chamber)}</h4>
                      <h4>Total: {this.formatCurrency(x.details.total)}</h4>
                      {x.details.next_election === "2020" ? (
                        <h4 className="green">Election Year</h4>
                      ) : (
                        <div />
                      )}
                    </div>
                    {selectedCandidate === x.cid ? (
                      <React.Fragment>
                        {loadingCandidateDetails ? (
                          <Dimmer active inverted>
                            <Loader active>
                              Fetching candidate information...
                            </Loader>
                          </Dimmer>
                        ) : (
                          <Segment>
                            <div className="candidate-details__header">
                              <h5>
                                Total spent:{" "}
                                {this.formatCurrency(x.details.spent)}
                              </h5>
                              <h5>
                                Total cash on hand:{" "}
                                {this.formatCurrency(x.details.cash_on_hand)}
                              </h5>
                              <h5>
                                Total debt:{" "}
                                {this.formatCurrency(x.details.debt)}
                              </h5>
                            </div>
                            <h5>Top contributors:</h5>
                            <ul>
                              {topContributors.map(x => (
                                <li key={x.org_name}>
                                  {x.org_name}: {this.formatCurrency(x.total)}
                                </li>
                              ))}
                            </ul>
                            <h5>Top industries:</h5>
                            <ul>
                              {topIndustries.map(x => (
                                <li key={x.industry_name}>
                                  {x.industry_name}:{" "}
                                  {this.formatCurrency(x.total)}
                                </li>
                              ))}
                            </ul>
                          </Segment>
                        )}
                      </React.Fragment>
                    ) : null}
                  </Segment>
                ))}
              </ul>
            </Segment>
          ) : null}
          {selectedState && loading ? (
            <Dimmer active inverted>
              <Loader active>Loading information for {selectedState}...</Loader>
            </Dimmer>
          ) : null}
        </Container>
      </div>
    );
  }
}

export default App;

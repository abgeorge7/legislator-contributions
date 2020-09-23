import React from "react";
import { Container, Select, Segment, Loader } from "semantic-ui-react";
import {
  getTopContributors,
  getCandidates,
  getTopIndustries
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
      loadingCandidateDetails: false
    };
  }

  getCandidatesForState = async (e, data) => {
    this.setState({
      loading: true,
      selectedState: data.value
    });
    const candidates = await getCandidates(data.value);
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

  render() {
    const {
      selectedState,
      candidates,
      loading,
      selectedCandidate,
      loadingCandidateDetails,
      topContributors,
      topIndustries
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
              <h3>
                Click on a legislator to view their top contributors for 2020.
              </h3>
              <ul>
                {candidates.map(x => (
                  <Segment
                    key={x.cid}
                    className="candidate-details"
                    onClick={() => this.selectCandidate(x.cid)}
                  >
                    <h4>
                      {x.firstlast}: {x.party}
                    </h4>
                    {selectedCandidate === x.cid ? (
                      <React.Fragment>
                        {loadingCandidateDetails ? (
                          <Loader active>
                            Fetching candidate information...
                          </Loader>
                        ) : (
                          <Segment>
                            <h5>Top contributors:</h5>
                            <ul>
                              {topContributors.map(x => (
                                <li key={x.org_name}>
                                  {x.org_name}: $
                                  {parseFloat(x.total).toLocaleString()}
                                </li>
                              ))}
                            </ul>
                            <h5>Top industries:</h5>
                            <ul>
                              {topIndustries.map(x => (
                                <li key={x.industry_name}>
                                  {x.industry_name}: $
                                  {parseFloat(x.total).toLocaleString()}
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
            <Loader active>Loading information for {selectedState}...</Loader>
          ) : null}
        </Container>
      </div>
    );
  }
}

export default App;

const baseUrl = `https://www.opensecrets.org/api/?apikey=${process.env.REACT_APP_API_KEY}&output=json`;

export const getTopContributors = async candidateId =>
  await fetch(`${baseUrl}&method=candContrib&cid=${candidateId}`)
    .then(res => res.json())
    .then(data =>
      data &&
      data.response &&
      data.response.contributors &&
      data.response.contributors.contributor
        ? data.response.contributors.contributor.map(
            contributor => contributor["@attributes"]
          )
        : []
    );

export const getCandidates = async stateId =>
  await fetch(`${baseUrl}&method=getLegislators&id=${stateId}`)
    .then(res => res.json())
    .then(data =>
      data && data.response && data.response.legislator
        ? data.response.legislator.map(legislator => legislator["@attributes"])
        : []
    );

export const getCandidateDetails = async candidateId =>
  await fetch(`${baseUrl}&method=candSummary&cid=${candidateId}`)
    .then(res => res.json())
    .then(data =>
      data &&
      data.response &&
      data.response.summary &&
      data.response.summary["@attributes"]
        ? data.response && data.response.summary["@attributes"]
        : []
    );

export const getTopIndustries = async candidateId =>
  await fetch(`${baseUrl}&method=candIndustry&cid=${candidateId}`)
    .then(res => res.json())
    .then(data =>
      data &&
      data.response &&
      data.response.industries &&
      data.response.industries.industry
        ? data.response.industries.industry.map(
            industry => industry["@attributes"]
          )
        : []
    );

export const getTopSectors = async candidateId =>
  await fetch(`${baseUrl}&method=candSector&cid=${candidateId}`)
    .then(res => res.json())
    .then(data =>
      data &&
      data.response &&
      data.response.sectors &&
      data.response.sectors.sector
        ? data.response.sectors.sector.map(industry => industry["@attributes"])
        : []
    );

export const getCandidateFinances = async candidateId =>
  await fetch(`${baseUrl}&method=memPFDprofile&cid=${candidateId}`)
    .then(res => res.json())
    .then(data => {
      if (data && data.response && data.response.member_profile) {
        let obj = {};
        if (data.response.member_profile["@attributes"]) {
          obj.attributes = data.response.member_profile["@attributes"];
        }
        if (
          data.response.member_profile.assets &&
          data.response.member_profile.assets.asset
        ) {
          obj.assets = data.response.member_profile.assets.asset.map(
            x => x["@attributes"]
          );
        }
        if (
          data.response.member_profile.positions &&
          data.response.member_profile.positions.position
        ) {
          obj.positions = data.response.member_profile.positions.position.map(
            x => x["@attributes"]
          );
        }
        return obj;
      }
      return null;
    })
    .catch(err => {
      console.log("Error getting asset info for CID ", candidateId);
      return null;
    });

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

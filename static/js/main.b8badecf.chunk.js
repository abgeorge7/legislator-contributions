(this["webpackJsonplegislator-contributions"]=this["webpackJsonplegislator-contributions"]||[]).push([[0],{152:function(e,t,n){e.exports=n(275)},157:function(e,t,n){},160:function(e,t,n){},275:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),s=n(24),c=n.n(s),o=(n(157),n(158),n(8)),i=n.n(o),u=n(40),l=n(12),p=n(121),d=n(122),f=n(139),m=n(137),h=n(282),b=n(288),g=n(284),E=n(140),v=n(287),y=n(84),C=n(285),_=n(283),w="https://www.opensecrets.org/api/?apikey=".concat("fe6f7f3d631490730290c24005850930","&output=json"),x=function(){var e=Object(l.a)(i.a.mark((function e(t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(w,"&method=candContrib&cid=").concat(t)).then((function(e){return e.json()})).then((function(e){return e&&e.response&&e.response.contributors&&e.response.contributors.contributor?e.response.contributors.contributor.map((function(e){return e["@attributes"]})):[]}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),k=function(){var e=Object(l.a)(i.a.mark((function e(t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(w,"&method=getLegislators&id=").concat(t)).then((function(e){return e.json()})).then((function(e){return e&&e.response&&e.response.legislator?e.response.legislator.map((function(e){return e["@attributes"]})):[]}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),j=function(){var e=Object(l.a)(i.a.mark((function e(t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(w,"&method=candSummary&cid=").concat(t)).then((function(e){return e.json()})).then((function(e){return e&&e.response&&e.response.summary&&e.response.summary["@attributes"]?e.response&&e.response.summary["@attributes"]:[]}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),S=function(){var e=Object(l.a)(i.a.mark((function e(t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(w,"&method=candIndustry&cid=").concat(t)).then((function(e){return e.json()})).then((function(e){return e&&e.response&&e.response.industries&&e.response.industries.industry?e.response.industries.industry.map((function(e){return e["@attributes"]})):[]}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),D=function(){var e=Object(l.a)(i.a.mark((function e(t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(w,"&method=candSector&cid=").concat(t)).then((function(e){return e.json()})).then((function(e){return e&&e.response&&e.response.sectors&&e.response.sectors.sector?e.response.sectors.sector.map((function(e){return e["@attributes"]})):[]}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),F=function(){var e=Object(l.a)(i.a.mark((function e(t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(w,"&method=memPFDprofile&cid=").concat(t)).then((function(e){return e.json()})).then((function(e){if(e&&e.response&&e.response.member_profile){var t={};return e.response.member_profile["@attributes"]&&(t.attributes=e.response.member_profile["@attributes"]),e.response.member_profile.assets&&e.response.member_profile.assets.asset&&(t.assets=e.response.member_profile.assets.asset.map((function(e){return e["@attributes"]}))),e.response.member_profile.positions&&e.response.member_profile.positions.position&&(t.positions=e.response.member_profile.positions.position.map((function(e){return e["@attributes"]}))),t}return null})).catch((function(e){return console.log("Error getting asset info for CID ",t),null}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),O=[{key:"AL",value:"AL",text:"Alabama"},{key:"CA",value:"CA",text:"California"},{key:"IL",value:"IL",text:"Illinois"},{key:"MI",value:"MI",text:"Michigan"},{key:"MN",value:"MN",text:"Minnesota"},{key:"PA",value:"PA",text:"Pennsylvania"}],I=(n(160),function(e){Object(f.a)(n,e);var t=Object(m.a)(n);function n(e){var a;return Object(p.a)(this,n),(a=t.call(this,e)).sortAsc=function(e,t){return parseFloat(e.details.total)>parseFloat(t.details.total)?1:parseFloat(t.details.total)>parseFloat(e.details.total)?-1:0},a.sortDesc=function(e,t){return parseFloat(e.details.total)>parseFloat(t.details.total)?-1:parseFloat(t.details.total)>parseFloat(e.details.total)?1:0},a.getCandidatesForState=function(){var e=Object(l.a)(i.a.mark((function e(t,n){var r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.setState({loading:!0,selectedState:n.value}),e.next=3,k(n.value);case 3:return r=e.sent,e.next=6,Promise.all(r.map(function(){var e=Object(l.a)(i.a.mark((function e(t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j(t.cid).then((function(e){return Object(u.a)(Object(u.a)({},t),{},{details:e})})).catch((function(e){console.log("Error fetching info for CID ",t.cid)}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()));case 6:return r=(r=e.sent).filter((function(e){return e})),e.next=10,Promise.all(r.map(function(){var e=Object(l.a)(i.a.mark((function e(t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,F(t.cid).then((function(e){return Object(u.a)(Object(u.a)({},t),{},{finances:e})})).catch((function(e){console.log("Error fetching info for CID ",t.cid)}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()));case 10:r=(r=e.sent).filter((function(e){return e})).sort("asc"===a.state.sortDirection?a.sortAsc:a.sortDesc),a.setState({candidates:r,loading:!1});case 13:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),a.selectCandidate=function(){var e=Object(l.a)(i.a.mark((function e(t){var n,r,s;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a.state.selectedCandidate!==t){e.next=4;break}a.setState({selectedCandidate:null}),e.next=15;break;case 4:return a.setState({loadingCandidateDetails:!0,selectedCandidate:t}),e.next=7,x(t);case 7:return n=e.sent,e.next=10,S(t);case 10:return r=e.sent,e.next=13,D(t);case 13:s=e.sent,a.setState({topContributors:n,topIndustries:r,topSectors:s,loadingCandidateDetails:!1});case 15:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),a.getParty=function(e){switch(e){case"D":return"Democrat";case"R":return"Republican";case"3":return"Third Party";case"L":return"Libertarian";default:return e}},a.getChamber=function(e){switch(e){case"H":return"House";case"S":return"Senate";default:return e}},a.sortTable=function(){var e=a.state,t=e.sortDirection,n=e.candidates.reverse(),r="asc";"asc"===t&&(r="desc"),a.setState({candidates:n,sortDirection:r})},a.formatCurrency=function(e){return"$".concat(parseFloat(e).toLocaleString(void 0,{minimumFractionDigits:2,maximumFractionDigits:2}))},a.state={selectedState:null,candidates:[],loading:!1,selectedCandidate:null,topContributors:[],topIndustries:[],topSectors:[],loadingCandidateDetails:!1,sortDirection:"desc"},a}return Object(d.a)(n,[{key:"render",value:function(){var e=this,t=this.state,n=t.selectedState,a=t.candidates,s=t.loading,c=t.selectedCandidate,o=t.loadingCandidateDetails,i=t.topContributors,u=t.topIndustries,l=t.topSectors,p=t.sortDirection;return r.a.createElement("div",{className:"app"},r.a.createElement(h.a,null,r.a.createElement(b.a,{columns:2},r.a.createElement(b.a.Column,null,r.a.createElement("h1",null,"Legislator Contribution Lookup"),r.a.createElement("p",null,"Select a state to view legislators."),r.a.createElement(g.a,{placeholder:"Select your state",options:O,onChange:this.getCandidatesForState})),r.a.createElement(b.a.Column,{className:"app__grid--right"},r.a.createElement("a",{href:"https://www.opensecrets.org/elections/",target:"_blank",rel:"noopener noreferrer"},r.a.createElement(E.a,{src:"https://cdn1.opensecrets.org/rails-assets/production/assets/logos/opensecrets_databy250x88-3de03b11da477be7e81c2a2ef7b2dcdd0d44bad822f2d1e29aff6330676529ca.gif",alt:"Powered by OpenSecrets.org"})))),n&&!s?r.a.createElement(v.a,null,r.a.createElement("h2",null,"Legislators for ",n),r.a.createElement("div",{className:"candidate-table"},r.a.createElement("h3",null,"Click on a legislator to view their top contributors for 2020."),r.a.createElement(y.a,{name:"asc"===p?"sort amount down":"sort amount up",size:"large",onClick:this.sortTable})),r.a.createElement("ul",null,a.map((function(t){return r.a.createElement(v.a,{key:t.cid,className:"candidate-details",onClick:function(){return e.selectCandidate(t.cid)}},r.a.createElement("div",{className:"candidate-details__header"},r.a.createElement("h4",null,t.firstlast),r.a.createElement("h4",null,e.getParty(t.details.party)),r.a.createElement("h4",null,e.getChamber(t.details.chamber)),r.a.createElement("h4",null,"Total: ",e.formatCurrency(t.details.total)),"2020"===t.details.next_election?r.a.createElement("h4",{className:"green"},"Election Year"):r.a.createElement("div",null)),c===t.cid?r.a.createElement(r.a.Fragment,null,o?r.a.createElement(C.a,{active:!0,inverted:!0},r.a.createElement(_.a,{active:!0},"Fetching candidate information...")):r.a.createElement("div",{className:"candidate-details__section"},r.a.createElement("div",{className:"candidate-details__finances"},r.a.createElement("h5",null,"Campaign Contributions:"),r.a.createElement("p",null,"Total spent:"," ",e.formatCurrency(t.details.spent)),r.a.createElement("p",null,"Total cash on hand:"," ",e.formatCurrency(t.details.cash_on_hand)),r.a.createElement("p",null,"Total debt:"," ",e.formatCurrency(t.details.debt))),t.finances?r.a.createElement("div",{className:"candidate-details__finances"},r.a.createElement("h5",null,t.finances.attributes&&t.finances.attributes.data_year?r.a.createElement(r.a.Fragment,null,t.finances.attributes.data_year," "):null,"Personal Finances"),t.finances.attributes&&t.finances.attributes.net_low&&t.finances.attributes.net_high?r.a.createElement("p",null,"Net Worth:"," ",e.formatCurrency(t.finances.attributes.net_low)," ","-"," ",e.formatCurrency(t.finances.attributes.net_high)):null,t.finances.attributes&&t.finances.attributes.asset_low&&t.finances.attributes.asset_high?r.a.createElement("p",null,"Asset Values:"," ",e.formatCurrency(t.finances.attributes.asset_low)," ","-"," ",e.formatCurrency(t.finances.attributes.asset_high)):null,t.finances.positions&&t.finances.positions?r.a.createElement(r.a.Fragment,null,r.a.createElement("br",null),r.a.createElement("h5",null,"Positions Held:"),r.a.createElement("ul",null,t.finances.positions.map((function(e){return r.a.createElement("li",null,e.title," @ ",e.organization)})))):null):null,r.a.createElement("h5",null,"Top contributors:"),r.a.createElement("ul",null,i.map((function(t){return r.a.createElement("li",{key:t.org_name},t.org_name,": ",e.formatCurrency(t.total))}))),r.a.createElement("h5",null,"Top industries:"),r.a.createElement("ul",null,u.map((function(t){return r.a.createElement("li",{key:t.industry_name},t.industry_name,":"," ",e.formatCurrency(t.total))}))),r.a.createElement("h5",null,"Top sectors:"),r.a.createElement("ul",null,l.map((function(t){return r.a.createElement("li",{key:t.sector_name},t.sector_name,":"," ",e.formatCurrency(t.total))}))))):null)})))):null,n&&s?r.a.createElement(C.a,{active:!0,inverted:!0},r.a.createElement(_.a,{active:!0},"Loading information for ",n,"...")):null))}}]),n}(r.a.Component));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(I,null)),document.getElementById("root"))}},[[152,1,2]]]);
//# sourceMappingURL=main.b8badecf.chunk.js.map
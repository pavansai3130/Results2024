// document.addEventListener('DOMContentLoaded', function () {
//     async function fetchData() {
//       try {
//         const response = await fetch('https://results2024.s3.ap-south-1.amazonaws.com/results.json');
//         const data = await response.json();
//         return data;
//       } catch (error) {
//         console.error('There has been a problem with your fetch operation:', error);
//       }
//     }
  
//     fetchData().then(data => {
//       const data_2024 = data;
  
//       function findMargin() {
//         let marginObj = {};
//         for (let state in data_2024[0]) {
//           for (let const_name in data_2024[0][state]) {
//             if (!data_2024[0][state][const_name]["candidates"][1]) {
//               continue;
//             }
//             let margin = data_2024[0][state][const_name]["candidates"][0]["vts"] - data_2024[0][state][const_name]["candidates"][1]["vts"];
//             if (!marginObj[margin]) {
//               marginObj[margin] = [];
//             }
//             marginObj[margin].push(data_2024[0][state][const_name]["candidates"][0]["cId"]);
//           }
//         }
//         return marginObj;
//       }
  
//       let marginObj = findMargin();
//       let margin = [];
//       for (let key in marginObj) {
//         margin.push(key);
//       }
  
//       function formatMargins(array) {
//         let jsonObj = {};
//         for (let state in data_2024[0]) {
//           for (let const_name in data_2024[0][state]) {
//             let cId = data_2024[0][state][const_name]["candidates"][0]["cId"];
//             if (array.includes(cId)) {
//               let JsonObj = {
//                 cand_name: data_2024[0][state][const_name]["candidates"][0]["cName"],
//                 party_id: data_2024[0][state][const_name]["candidates"][0]["prty"],
//                 const_name: const_name,
//                 votes: data_2024[0][state][const_name]["candidates"][0]["vts"]
//               };
//               jsonObj[cId] = JsonObj;
//             }
//           }
//         }
//         return jsonObj;
//       }
  
//       let highMargin = [margin[margin.length - 1], margin[margin.length - 2], margin[margin.length - 3], margin[margin.length - 4], margin[margin.length - 5]];
//       let lowMargin = [margin[0], margin[1], margin[2], margin[3], margin[4]];
  
//       let high = formatMargins(highMargin);
//       let low = formatMargins(lowMargin);
  
//       const highTableBody = document.querySelector('.custom-table-one tbody');
//       for (let marginIndex = 4; marginIndex >= 0; marginIndex--) {
//         const candidate = high[highMargin[marginIndex]];
//         const row = document.createElement('tr');
//         if (!candidate) {
//           createAwaitingRow(row);
//         } else {
//           createDataRow(candidate, marginIndex, row);
//         }
//         highTableBody.appendChild(row);
//       }
  
//       const lowTableBody = document.querySelector('.custom-table-two tbody');
//       let lowKeys = Object.keys(low);
//       for (let marginIndex = 0; marginIndex < 5; marginIndex++) {
//         const candidate = low[lowKeys[marginIndex]];
//         const row = document.createElement('tr');
//         if (!candidate) {
//           createAwaitingRow(row);
//         } else {
//           createDataRow(candidate, lowKeys[marginIndex], row);
//         }
//         lowTableBody.appendChild(row);
//       }
  
//       function createAwaitingRow(row) {
//         const nameCell = document.createElement('td');
//         nameCell.innerHTML = 'Awaiting Results';
//         nameCell.style.textAlign = 'left';
//         nameCell.style.paddingLeft = '1.4rem';
//         nameCell.classList.add('sticky');
//         row.appendChild(nameCell);
  
//         const constCell = document.createElement('td');
//         constCell.innerHTML = 'Awaiting Results';
//         constCell.style.textTransform = "capitalize";
//         row.appendChild(constCell);
  
//         const partyCell = document.createElement('td');
//         partyCell.innerHTML = 'Awaiting Results';
//         partyCell.style.fontWeight = '400';
//         row.appendChild(partyCell);
  
//         const marginCell = document.createElement('td');
//         marginCell.innerHTML = 'Awaiting Results';
//         row.appendChild(marginCell);
//       }
  
//       function createDataRow(candidate, margin, row) {
//         const nameCell = document.createElement('td');
//         if (sym2[candidate.party_id]) {
//           nameCell.innerHTML = `${candidate.cand_name}<br><img src="${sym2[candidate.party_id]}"><span>${candidate.party_id}</span>`;
//         } else {
//           nameCell.innerHTML = `${candidate.cand_name}<br><img src="${sym2["extra"]}"><span>${candidate.party_id}</span>`;
//         }
//         nameCell.style.textAlign = 'left';
//         nameCell.style.paddingLeft = '1.4rem';
//         nameCell.classList.add('sticky');
//         row.appendChild(nameCell);
  
//         const constCell = document.createElement('td');
//         constCell.textContent = candidate.const_name;
//         constCell.style.textTransform = "capitalize";
//         row.appendChild(constCell);
  
//         const partyCell = document.createElement('td');
//         candidateVotes = candidate.votes;
//         candidateVotes = new Intl.NumberFormat('en-IN').format(candidateVotes);
//         partyCell.textContent = candidateVotes;
//         partyCell.style.fontWeight = '400';
//         row.appendChild(partyCell);
  
//         const marginCell = document.createElement('td');
//         marginCell.textContent = margin;
//         row.appendChild(marginCell);
//       }
//     });
//   });

document.addEventListener('DOMContentLoaded', function () {
    async function fetchData() {
        try {
            const response = await fetch('https://results2024.s3.ap-south-1.amazonaws.com/results.json');
            const data = await response.json();
            return data;
        } catch (error) {
            console.error('There has been a problem with your fetch operation:', error);
        }
    }

    fetchData().then(data => {
        const data_2024 = data;

        function findMargin() {
            let marginObj = {};
            for (let state in data_2024[0]) {
                for (let const_name in data_2024[0][state]) {
                    if (!data_2024[0][state][const_name]["candidates"][1]) {
                        continue;
                    }
                    let margin = data_2024[0][state][const_name]["candidates"][0]["vts"] - data_2024[0][state][const_name]["candidates"][1]["vts"];
                    if (!marginObj[margin]) {
                        marginObj[margin] = [];
                    }
                    marginObj[margin].push(data_2024[0][state][const_name]["candidates"][0]["cId"]);
                }
            }
            return marginObj;
        }

        let marginObj = findMargin();
        let margin = [];
        for (let key in marginObj) {
            margin.push(key);
        }

        function formatMargins(array) {
            let jsonObj = {};
            for (let state in data_2024[0]) {
                for (let const_name in data_2024[0][state]) {
                    let cId = data_2024[0][state][const_name]["candidates"][0]["cId"];
                    if (array.includes(cId)) {
                        let JsonObj = {
                            cand_name: data_2024[0][state][const_name]["candidates"][0]["cName"],
                            party_id: data_2024[0][state][const_name]["candidates"][0]["prty"],
                            const_name: const_name,
                            votes: data_2024[0][state][const_name]["candidates"][0]["vts"]
                        };
                        jsonObj[cId] = JsonObj;
                    }
                }
                if (Object.keys(jsonObj).length === array.length) {
                    break;
                }
            }
            return jsonObj;
        }

        let highMargin = [margin[margin.length - 1], margin[margin.length - 2], margin[margin.length - 3], margin[margin.length - 4], margin[margin.length - 5]];
        let lowMargin = [margin[0], margin[1], margin[2], margin[3], margin[4]];

        let high = formatMargins(highMargin);
        let low = formatMargins(lowMargin);

        const highTableBody = document.querySelector('.custom-table-one tbody');
        const highTable = document.querySelector('.custom-table-one')
        for (let marginIndex = 4; marginIndex >= 0; marginIndex--) {
            const candidate = high[highMargin[marginIndex]];
            const row = document.createElement('tr');
            if (!candidate) {
                highTable.classList.add('awaiting-results');
                highTable.classList.add('awaiting-results-height');
                highTable.innerHTML = '<p>Results Awaited</p>'
                break;
            } else {
                createDataRow(candidate, highMargin[marginIndex], row);
                highTableBody.appendChild(row);
            }
        }

        const lowTableBody = document.querySelector('.custom-table-two tbody');
        const lowTable = document.querySelector('.custom-table-two');
        let lowKeys = Object.keys(low);
        for (let marginIndex = 0; marginIndex < 5; marginIndex++) {
            const candidate = low[lowKeys[marginIndex]];
            const row = document.createElement('tr');
            if (!candidate) {
                lowTable.classList.add('awaiting-results');
                lowTable.classList.add('awaiting-results-height');
                lowTable.innerHTML = `<p>Results Awaited</p>`;
                break;
            } else {
                createDataRow(candidate, lowKeys[marginIndex], row);
                lowTableBody.appendChild(row);
            }
        }

        function createDataRow(candidate, margin, row) {
            const nameCell = document.createElement('td');
            if (sym2[candidate.party_id]) {
                nameCell.innerHTML = `${candidate.cand_name}<br><img src="${sym2[candidate.party_id]}"><span>${candidate.party_id}</span>`;
            } else {
                nameCell.innerHTML = `${candidate.cand_name}<br><img src="${sym2["extra"]}"><span>${candidate.party_id}</span>`;
            }
            nameCell.style.textAlign = 'left';
            nameCell.style.paddingLeft = '1.4rem';
            nameCell.classList.add('sticky');
            row.appendChild(nameCell);

            const constCell = document.createElement('td');
            constCell.textContent = candidate.const_name;
            constCell.style.textTransform = "capitalize";
            row.appendChild(constCell);

            const partyCell = document.createElement('td');
            let candidateVotes = candidate.votes;
            candidateVotes = new Intl.NumberFormat('en-IN').format(candidateVotes);
            partyCell.textContent = candidateVotes;
            partyCell.style.fontWeight = '400';
            row.appendChild(partyCell);

            const marginCell = document.createElement('td');
            marginCell.textContent = margin;
            row.appendChild(marginCell);
        }
    });
});

// document.addEventListener('DOMContentLoaded', function () {
//     async function fetchData() {
//         try {
//             const response = await fetch('https://results2024.s3.ap-south-1.amazonaws.com/results.json');
//             const data = await response.json();
//             return data;
//         } catch (error) {
//             console.error('There has been a problem with your fetch operation:', error);
//         }
//     }

//     fetchData().then(data => {
//         const data_2024 = data;

//         function findMargin() {
//             let marginObj = {};
//             for (let state in data_2024[0]) {
//                 for (let const_name in data_2024[0][state]) {
//                     if (!data_2024[0][state][const_name]["candidates"][1]) {
//                         continue;
//                     }
//                     let margin = data_2024[0][state][const_name]["candidates"][0]["vts"] - data_2024[0][state][const_name]["candidates"][1]["vts"];
//                     if (!marginObj[margin]) {
//                         marginObj[margin] = [];
//                     }
//                     marginObj[margin].push(data_2024[0][state][const_name]["candidates"][0]["cId"]);
//                 }
//             }
//             return marginObj;
//         }

//         let marginObj = findMargin();
//         let margin = [];
//         for (let key in marginObj) {
//             margin.push(key);
//         }

//         function formatMargins(array) {
//             let jsonObj = {};
//             for (let state in data_2024[0]) {
//                 for (let const_name in data_2024[0][state]) {
//                     let cId = data_2024[0][state][const_name]["candidates"][0]["cId"];
//                     if (array.includes(cId)) {
//                         let JsonObj = {
//                             cand_name: data_2024[0][state][const_name]["candidates"][0]["cName"],
//                             party_id: data_2024[0][state][const_name]["candidates"][0]["prty"],
//                             const_name: const_name,
//                             votes: data_2024[0][state][const_name]["candidates"][0]["vts"]
//                         };
//                         jsonObj[cId] = JsonObj;
//                     }
//                 }
//                 if (Object.keys(jsonObj).length === array.length) {
//                     break;
//                 }
//             }
//             return jsonObj;
//         }

//         let highMargin = [margin[margin.length - 1], margin[margin.length - 2], margin[margin.length - 3], margin[margin.length - 4], margin[margin.length - 5]];
//         let lowMargin = [margin[0], margin[1], margin[2], margin[3], margin[4]];

//         let high = formatMargins(highMargin);
//         let low = formatMargins(lowMargin);

//         const highTableBody = document.querySelector('.custom-table-one tbody');
//         let highCandidatesExist = false;
//         for (let marginIndex = 4; marginIndex >= 0; marginIndex--) {
//             const candidate = high[highMargin[marginIndex]];
//             const row = document.createElement('tr');
//             if (!candidate) {
//                 continue;
//             } else {
//                 highCandidatesExist = true;
//                 createDataRow(candidate, highMargin[marginIndex], row);
//                 highTableBody.appendChild(row);
//             }
//         }
//         if (!highCandidatesExist) {
//             highTableBody.classList.add('blurred');
//             highTableBody.insertAdjacentHTML('afterbegin', '<div class="blurred-overlay"></div>');
//             highTableBody.classList.add('awaiting-results-height');
//         }

//         const lowTableBody = document.querySelector('.custom-table-two tbody');
//         let lowCandidatesExist = false;
//         let lowKeys = Object.keys(low);
//         for (let marginIndex = 0; marginIndex < 5; marginIndex++) {
//             const candidate = low[lowKeys[marginIndex]];
//             const row = document.createElement('tr');
//             if (!candidate) {
//                 continue;
//             } else {
//                 lowCandidatesExist = true;
//                 createDataRow(candidate, lowKeys[marginIndex], row);
//                 lowTableBody.appendChild(row);
//             }
//         }
//         if (!lowCandidatesExist) {
//             lowTableBody.classList.add('awaiting-results-height');
//             lowTableBody.insertAdjacentHTML('afterbegin', '<div class="blurred-overlay"></div>');
//             lowTableBody.classList.add('blurred');
//         }

//         function createDataRow(candidate, margin, row) {
//             const nameCell = document.createElement('td');
//             if (sym2[candidate.party_id]) {
//                 nameCell.innerHTML = `${candidate.cand_name}<br><img src="${sym2[candidate.party_id]}"><span>${candidate.party_id}</span>`;
//             } else {
//                 nameCell.innerHTML = `${candidate.cand_name}<br><img src="${sym2["extra"]}"><span>${candidate.party_id}</span>`;
//             }
//             nameCell.style.textAlign = 'left';
//             nameCell.style.paddingLeft = '1.4rem';
//             nameCell.classList.add('sticky');
//             row.appendChild(nameCell);

//             const constCell = document.createElement('td');
//             constCell.textContent = candidate.const_name;
//             constCell.style.textTransform = "capitalize";
//             row.appendChild(constCell);

//             const partyCell = document.createElement('td');
//             let candidateVotes = candidate.votes;
//             candidateVotes = new Intl.NumberFormat('en-IN').format(candidateVotes);
//             partyCell.textContent = candidateVotes;
//             partyCell.style.fontWeight = '400';
//             row.appendChild(partyCell);

//             const marginCell = document.createElement('td');
//             marginCell.textContent = margin;
//             row.appendChild(marginCell);
//         }
//     });
// });

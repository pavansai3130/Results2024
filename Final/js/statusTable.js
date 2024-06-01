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
    const assets2024 = data;
    function getStatus(state, constit, candId){
      let currIndex = assets2024[0][state][constit].candidates[0].cId;
      let resStatus = assets2024[0][state][constit].rsDecl;
      let margin = 0;
      let candidateVotes = 0;
      let opponentVotes = 0;
  
      if(currIndex === candId) {
          candidateVotes = assets2024[0][state][constit].candidates[0].vts;
          if (assets2024[0][state][constit].candidates[1]) {
              opponentVotes = assets2024[0][state][constit].candidates[1].vts;
              margin = candidateVotes - opponentVotes;
          }
          if (resStatus === 1) {
              return {status: 'Won', margin: margin, votes: candidateVotes};
          } else {
              return {status: 'Leading', margin: margin, votes: candidateVotes};
          }
      } else {
          for (const candidate of assets2024[0][state][constit].candidates) {
              if (candidate.cId === candId) {
                  candidateVotes = candidate.vts;
                  break;
              }
          }
          opponentVotes = assets2024[0][state][constit].candidates[0].vts;
          margin = opponentVotes - candidateVotes;
          if (resStatus === 1) {
              return {status: 'Lost', margin: margin, votes: candidateVotes};
          } else {
              return {status: 'Trailing', margin: margin, votes: candidateVotes};
          }
      }
  }
  
  function updateTable() {
      const candidates = [
          {rowClass: 'richestOne', state: 'Haryana', constit: 'kurukshetra', candId: 'cand2082'},
          {rowClass: 'richestTwo', state: 'Odisha', constit: 'cuttack', candId: 'cand1587'},
          {rowClass: 'richestThree', state: 'Haryana', constit: 'kurukshetra', candId: 'cand1238'},
          {rowClass: 'richestFour', state: 'Haryana', constit: 'hisar', candId: 'cand1280'},
          {rowClass: 'richestFive', state: 'Haryana', constit: 'gurgaon', candId: 'cand1755'}
      ];
  
      candidates.forEach(candidate => {
          const result = getStatus(candidate.state, candidate.constit, candidate.candId);
          const row = document.querySelector(`.${candidate.rowClass}`);
          const statusCell = document.createElement('td');
          const countCell = document.createElement('td');
  
          statusCell.innerHTML = `<p>${result.status}</p>`;
          if(result.status==='Won'){
            statusCell.classList.add('won');
          }
          else if(result.status==='Leading'){
            statusCell.classList.add('leading');
          }
          else if(result.status==='Lost'){
            statusCell.classList.add('lost');
          }
          else{
            statusCell.classList.add('trailing');
          }
          countCell.innerHTML = `${result.votes}<br><span style="color:grey; font-size:0.8rem;"> ${result.margin}</span>`;
          row.appendChild(countCell);
          row.appendChild(statusCell);
      });
  }
  
  updateTable();
  
  
  // 2nd table 
  function determineStatus(state, constit, candId) {
    let currIndex = assets2024[0][state][constit].candidates[0].cId;
    let resStatus = assets2024[0][state][constit].rsDecl;
    let margin = 0;
    let candidateVotes = 0;
    let opponentVotes = 0;
  
    if (currIndex === candId) {
        candidateVotes = assets2024[0][state][constit].candidates[0].vts;
        if (assets2024[0][state][constit].candidates[1]) {
            opponentVotes = assets2024[state][constit].candidates[1].vts;
            margin = candidateVotes - opponentVotes;
        }
        if (resStatus === 1) {
            return { status: 'Won', margin: margin, votes: candidateVotes };
        } else {
            return { status: 'Leading', margin: margin, votes: candidateVotes };
        }
    } else {
        for (const candidate of assets2024[0][state][constit].candidates) {
            if (candidate.cId === candId) {
                candidateVotes = candidate.vts;
                break;
            }
        }
        opponentVotes = assets2024[0][state][constit].candidates[0].vts;
        margin = opponentVotes - candidateVotes;
        if (resStatus === 1) {
            return { status: 'Lost', margin: margin, votes: candidateVotes };
        } else {
            return { status: 'Trailing', margin: margin, votes: candidateVotes };
        }
    }
  }
  
  function updateCandidateTable() {
    const candidates = [
        { rowClass: 'poorestOne', state: 'Haryana', constit: 'rohtak', candId: 'cand1127' },
        { rowClass: 'poorestTwo', state: 'Uttar Pradesh', constit: 'pratapgarh', candId: 'cand2319' },
        { rowClass: 'poorestThree', state: 'NCT OF Delhi', constit: 'north west delhi', candId: 'cand1859' },
        { rowClass: 'poorestFour', state: 'NCT OF Delhi', constit: 'north west delhi', candId: 'cand1220' },
        { rowClass: 'poorestFive', state: 'Odisha', constit: 'puri', candId: 'cand1404' }
    ];
  
    candidates.forEach(candidate => {
        const result = determineStatus(candidate.state, candidate.constit, candidate.candId);
        const row = document.querySelector(`.${candidate.rowClass}`);
        const statusCell = document.createElement('td');
        const countCell = document.createElement('td');
  
        statusCell.innerText = result.status;
        statusCell.innerHTML = `<p>${result.status}</p>`;
          if(result.status==='Won'){
            statusCell.classList.add('won');
          }
          else if(result.status==='Leading'){
            statusCell.classList.add('leading');
          }
          else if(result.status==='Lost'){
            statusCell.classList.add('lost');
          }
          else{
            statusCell.classList.add('trailing');
          }
          countCell.innerHTML = `${result.votes}<br><span style="color:grey; font-size:0.8rem;"> ${result.margin}</span>`;
        row.appendChild(countCell);
        row.appendChild(statusCell);
    });
  }
  
  updateCandidateTable();
  });


  
});
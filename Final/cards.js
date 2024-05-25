async function fetchDataAndRenderCards() {
  console.log('fetchDataAndRenderCards called');
  try {
    const response = await fetch('data.json');
    const data = await response.json();
    console.log(data);
    
    // Sort the data by votes in descending order and select the top 8
    const topEight = data.sort((a, b) => b.votes - a.votes).slice(0, 8);
    
    topEight.forEach(item => {
      helper(
        item.lead,
        item.name,
        item.nameColor,
        item.logoimg,
        item.pid,
        item.place,
        item.votes,
        item.lead2,
        item.lead2votes,
        item.bgColor,
        item.arrColor,
        item.perimg
      );
    });
  } catch (error) {
    console.error('Error fetching or processing data:', error);
  }
}

function helper(lead, name, nameColor, logoimg, pid, place, votes, lead2, lead2votes, bgColor, arrColor, perimg) {
  console.log('Creating card for:', name);
  const card = document.createElement('div');
  card.className = 'position-relative custom-container';
  card.style.background = bgColor;

  const ribbonText = lead ? 'Leading' : 'Trailing';
  const ribbonColor = lead ? 'rgba(34, 177, 76, 255)' : 'rgba(240, 68, 56, 255)';

  card.innerHTML = `
    <div class="ribbon" style="background-color: ${ribbonColor};">${ribbonText}</div>
    <div class="temp custom-temp">
      <div class="card-body w-100">
        <h3 class="card-title custom-card-title" style="color:${nameColor}">${name}</h3>
        <div class="subheaders d-flex align-items-center custom-subheaders">
          <div class="logo"><img class="custom-img" src="${logoimg}" alt=""></div>
          <h6 style="font-weight: bold;">${pid}</h6>
        </div>
        <p class="card-text custom-card-text" style="font-size:small">${place}</p>
        <p class="card-text custom-card-text-votes" style="color:${nameColor}"><span style="color:gray;font-weight:500;font-size:bold">Votes : </span>${votes}</p>
      </div>
      <div class="iribbon d-flex flex-column bg-white rounded-2 position-relative custom-iribbon" style="background:${arrColor}">
        <p class="card-text mb-1 custom-iribbon-text">${lead ? 'Leading by' : 'Trailing by'}</p>
        <p class="card-text custom-iribbon-text-votes">${lead2votes}</p>
      </div>
    </div>
    <div class="person-image d-flex custom-person-image">
      <img class="person-img wid" src="${perimg}" alt="Person Image">
    </div>
  `;
  
  document.getElementById('root').appendChild(card);
}

fetchDataAndRenderCards();

document.getElementById('see-more-btn').addEventListener('click', function() {
  window.location.href = 'cardsPage.html';
});

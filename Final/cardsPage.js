async function fetchMoreCards() {
    try {
        const response = await fetch('data.json');
        const data = await response.json();
        const moreCardsRoot = document.getElementById('more-cards-root');

        data.forEach(item => {
            const card = createCard(item);
            moreCardsRoot.appendChild(card);

        });
    } catch (error) {
        console.error('Error fetching or processing data:', error);
    }
}

function createCard(item) {
    const card = document.createElement('div');
    card.className = 'position-relative custom-container ';
    card.style.background = item.bgColor;

    const ribbonText = item.lead ? 'Leading' : 'Trailing';
    const ribbonColor = item.lead ? 'rgba(34, 177, 76, 255)' : 'rgba(240, 68, 56, 255)';

    card.innerHTML = `
        <div class="ribbon" style="background-color: ${ribbonColor};">${ribbonText}</div>
        <div class="temp custom-temp">
            <div class="card-body w-100">
                <h3 class="card-title custom-card-title" style="color:${item.nameColor}">${item.name}</h3>
                <div class="subheaders d-flex align-items-center custom-subheaders">
                    <div class="logo"><img class="custom-img" src="${item.logoimg}" alt=""></div>
                    <h6 style="font-weight: bold;">${item.pid}</h6>
                </div>
                <p class="card-text custom-card-text" style="font-size:small">${item.place}</p>
                <p class="card-text custom-card-text-votes" style="color:${item.nameColor}">
                    <span style="color:gray;font-weight:500;font-size:bold">Votes : </span>${item.votes}
                </p>
            </div>
            <div class="iribbon d-flex flex-column bg-white rounded-2 position-relative custom-iribbon" style="background:${item.arrColor}">
                <p class="card-text mb-1 custom-iribbon-text">${item.lead ? 'Leading by' : 'Trailing by'}</p>
                <p class="card-text custom-iribbon-text-votes">${item.lead2votes}</p>
            </div>
        </div>
        <div class="person-image d-flex custom-person-image">
            <img class="person-img wid" src="${item.perimg}" alt="Person Image">
        </div>
    `;

    return card;
}

document.getElementById('back-btn').addEventListener('click', function () {
    window.location.href = 'index.html';
});

// Fetch and render the cards when the page loads
fetchMoreCards();

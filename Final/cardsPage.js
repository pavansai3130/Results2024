async function fetchMoreCards() {
    try {
        const response = await fetch('data.json');
        const response2 = await fetch('celebdata.json');
        const data = await response.json();
        const data2 = await response2.json();
        const moreCardsRoot = document.getElementById('more-cards-root');
        const moreCardsRoot1 = document.getElementById('more-celeb-cards-root');

        data.forEach(item => {
            const card = createCard(item);
            moreCardsRoot.appendChild(card);
        });
        data2.forEach(item => {
            const card = createCard(item);
            moreCardsRoot1.appendChild(card);
        });
    } catch (error) {
        console.error('Error fetching or processing data:', error);
    }
}

function createCard(item) {
    const card = document.createElement('div');
    card.className = 'position-relative custom-container';

    // Define default background, arrow colors, and name color
    let bgColor;
    let arrColor;
    let nameColor;

    // Adjust colors based on the alliance field
    if (item.alliance === "NDA") {
        bgColor = "linear-gradient(to right, rgba(255,246,217,255), rgba(255,229,183,255))";
        arrColor = "linear-gradient(to right, rgba(235,141,48,255), rgba(173,99,25,255))";
        nameColor = "#FF9933";
    } else if (item.alliance === "INDA") {
        bgColor = "linear-gradient(to right, rgba(217, 242, 252, 255), rgba(190, 234, 241, 255))";
        arrColor = "linear-gradient(to right, rgba(134, 205, 234, 255), rgba(101, 163, 188, 255))";
        nameColor = "#19AAED";
    } else if (item.alliance === "OTH") {
        bgColor = "linear-gradient(to right, rgba(243,243,243,255), rgba(226,226,226,255))";
        arrColor = "linear-gradient(to right, rgba(101,132,124,255), rgba(75,109,101,255))";
        nameColor = "#0c6b4b";
    }

    card.style.background = bgColor;

    const ribbonText = item.lead ? 'Leading' : 'Trailing';
    const ribbonColor = item.lead ? 'rgba(34, 177, 76, 255)' : 'rgba(240, 68, 56, 255)';

    card.innerHTML = `
        <div class="ribbon" style="background-color: ${ribbonColor};">${ribbonText}</div>
        <div class="temp custom-temp">
            <div class="card-body w-100">
                <h3 class="card-title custom-card-title" style="color:${nameColor}">${item.name}</h3>
                <div class="subheaders d-flex align-items-center custom-subheaders">
                    <div class="logo"><img class="custom-img" src="${item.logoimg}" alt=""></div>
                    <h6 style="font-weight: bold;">${item.pid}</h6>
                </div>
                <p class="card-text custom-card-text card-place" style="font-size:small">${item.place}</p>
                <p class="card-text custom-card-text-votes" style="color:${nameColor}">
                    <span style="color:gray;font-weight:500;font-size:bold">Votes : </span>${item.votes}
                </p>
            </div>
            <div class="iribbon d-flex flex-column bg-white rounded-2 position-relative custom-iribbon" style="background:${arrColor}">
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

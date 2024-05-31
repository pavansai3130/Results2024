async function fetchMoreCards() {
  try {
    // Fetch the state-constituency-candidate JSON
    const stateResponse = await fetch("./data/popular.json");
    const stateData = await stateResponse.json();
    console.log('State Data:', stateData);

    // Fetch the detailed candidate information JSON
    const candidateResponse = await fetch("https://results2024.s3.ap-south-1.amazonaws.com/results.json");
    const candidateData = await candidateResponse.json();
    console.log('Candidate Data:', candidateData);

    const moreCardsRoot = document.getElementById("more-cards-root");

    // Function to get candidate details by ID from the fetched candidate data
    function getCandidateDetails(candidateId) {
      const statesData = candidateData[0];  // Assuming 0th index contains the relevant data
      for (let state in statesData) {
        for (let constituency in statesData[state]) {
          const candidates = statesData[state][constituency].candidates;
          if (candidates) {
            const candidate = candidates.find(candidate => candidate.cId === candidateId);
            if (candidate) {
              candidate.place = `${constituency} (${state})`; 
              return candidate;
            }
          } else {
            console.error('Candidates array is undefined for', state, constituency);  // Add log to debug
          }
        }
      }
      return null;
    }

    // Loop through each state and constituency
    Object.keys(stateData).forEach(state => {
      Object.keys(stateData[state]).forEach(constituency => {
        stateData[state][constituency].forEach(candidateId => {
          const candidateDetails = getCandidateDetails(candidateId);
          if (candidateDetails) {
            const card = createCard(candidateDetails);
            moreCardsRoot.appendChild(card);
          } else {
            console.error('Candidate details not found for ID:', candidateId);
          }
        });
      });
    });
  } catch (error) {
    console.error("Error fetching or processing data:", error);
  }
}

function createCard(item) {
  
  const card = document.createElement("div");
  card.className = "position-relative custom-container";

  // Define default background, arrow colors, and name color
  let bgColor;
  let arrColor;
  let nameColor;

  // Adjust colors based on the alliance field
  if (item.alnce === "NDA") {
    bgColor = "linear-gradient(56deg, #FFF8DC,#FFE4BF)";
    arrColor = "linear-gradient(90deg, #EC8E30,#A65E17)";
    nameColor = "#FF9933";
  } else if (item.alnce === "INDIA") {
    nameColor = "#19AAED";
  } else if (item.alnce === "OTH") {
    bgColor = "linear-gradient(56deg, #F5F5F5,#E0E0E0)";
    arrColor = "linear-gradient(90deg, #6F9088,#42615A)";
    nameColor = "#0c6b4b";
  }

  card.style.background = bgColor;

  const ribbonText = item.lead ? "Leading" : "Trailing";
  const ribbonColor = item.lead ? "rgba(34, 177, 76, 255)" : "rgba(240, 68, 56, 255)";

  card.innerHTML = `
  <div class="ribbon" style="background-color: ${ribbonColor};">${ribbonText}</div>
  <div class="temp custom-temp">
      <div class="card-body w-100">
          <h3 class="card-title custom-card-title" style="color:${nameColor}">${
item.cName
}</h3>
          <div class="subheaders cd-flex align-items-center custom-subheaders">
              <div class="logo"><img class="custom-img" src="${
                item.logoimg
              }" alt=""></div>
              <h6 style="font-weight: bold;">${item.prty}</h6>
          </div>
          <p class="card-text custom-card-text">${
            item.place
          }</p>
          <p class="card-text custom-card-text-votes" style="color:${nameColor};font-size:12px;font-weight:700">
              <span style="color:gray;font-weight:500;font-size:12px">Votes : </span>${
                item.vts
              }
          </p>
      </div>
      <div class="iribbon d-flex flex-column bg-white position-relative custom-iribbon" style="background:${arrColor}">
          <p class="card-text mb-1 custom-iribbon-text">${
            item.lead ? "Leading by" : "Trailing by"
          }</p>
          <p class="card-text custom-iribbon-text-votes">${
            item.lead2votes
          }</p>
      </div>
  </div>
  <div class="person-image d-flex custom-person-image">
      <img class="person-img wid" src="${item.perimg}" alt="Person Image">
  </div>
`;

  return card;
}

document.getElementById("back-btn").addEventListener("click", function () {
  window.location.href = "./index.html";
});

// Fetch and render the cards when the page loads
fetchMoreCards();



function performSearch() {
  const searchInput = document.getElementById('search-input').value.toLowerCase();
  const selectedState = document.getElementById('dropdown').value.toLowerCase();
  const cards = document.querySelectorAll('.custom-container');
  let noRes = true;

  cards.forEach(card => {
      const title = card.querySelector('.card-title').textContent.toLowerCase();
      const place = card.querySelector('.card-text').textContent.toLowerCase(); // Changed from '.card-place'
      
      if ((title.includes(searchInput) || searchInput === '') && (selectedState === '' || place.includes(selectedState))) {
          card.style.display = '';
          noRes = false;
      } else {
          card.style.display = 'none';
      }
  });

  const noResImg = document.getElementById('no-results-img');
  if (noRes) {
      noResImg.style.display = 'block';
  } else {
      noResImg.style.display = 'none';
  }
}



function scrollToSection(sectionId) {
  document.getElementById(sectionId).scrollIntoView({ behavior: "smooth" });
}

// Function to filter cards by state
document.getElementById("dropdown").addEventListener("change", () => {
  performSearch();
});

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

window.addEventListener("scroll", () => {
  const backToTopBtn = document.getElementById("back-to-top-btn");
  if (window.scrollY > 100) {
    backToTopBtn.style.display = "block";
  } else {
    backToTopBtn.style.display = "none";
  }
});
function getParameterByName(name, url = window.location.href) {
  name = name.replace(/[\[\]]/g, '\\$&');
  var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
    results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return '';
  return decodeURIComponent(results[2].replace(/\+/g, ' '));
}
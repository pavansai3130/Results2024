let currentPage = 1;
let currentPageCandidates = 1;
const rowsPerPage = 10;
let breadcrumbConstituency;
let breadcrumbState;
let state_button_pressed = 1;
document.addEventListener("DOMContentLoaded", function () {
  localStorage["consent"] = "accepted";
  document.getElementById("Constituency-res").style.display = "none";
  const stateSelect = document.getElementById("state-select");
  breadcrumbState = document.getElementById("breadcrumb-state");
  breadcrumbConstituency = document.getElementById("breadcrumb-constituency");

  stateSelect.addEventListener("change", function () {
    const selectedState = stateSelect.options[stateSelect.selectedIndex].text;

    if (stateSelect.value === "reset") {
      resetBreadcrumb();
      return;
    }
    breadcrumbState.innerHTML = `<a href="#" onclick="resetstatebread_option()">${selectedState}`;
    breadcrumbState.style.display = "inline";
    breadcrumbConstituency.style.display = "none";
  });
  document.getElementById("consti-bt").addEventListener("click", function () {
    document.getElementById("Constituency-res").style.display = "none";
    console.log("display is none");
    document.getElementById("breadcrumb-india").style.display = "block";
    state_button_pressed = 0;
    document.getElementById("india-map").style.display = "none";
    document.getElementById("map").style.display = "block";
    document.getElementById("stateTabeleContainer").style.display = "block";
    resetBreadcrumb();
    stateSelect.selectedIndex = 0;
  });
  document.getElementById("state-bt").addEventListener("click", function () {
    state_button_pressed = 1;
    document.getElementById("map").style.display = "none";
    document.getElementById("india-map").style.display = "block";
    document.getElementById("Constituency-res").style.display = "none";
    document.getElementById("stateTabeleContainer").style.display = "block";
    resetBreadcrumb();
    stateSelect.selectedIndex = 0;
    render_whole_table();
    map.setView(initialView, initialZoom);
    if (geo2) {
      geo2.remove();
    }
    geo.addTo(map);
    updateMapBounds();
    map.on("resize", delayedBoundsUpdate);
  });
});

function resetBreadcrumb() {
  updateBar(Object.values(allianceJson));
  const breadcrumbState = document.getElementById("breadcrumb-state");
  const breadcrumbConstituency = document.getElementById(
    "breadcrumb-constituency"
  );

  breadcrumbState.style.display = "none";
  breadcrumbState.textContent = "";
  console.log(state_button_pressed);
  breadcrumbConstituency.style.display = "none";
  breadcrumbConstituency.textContent = "";
  if (state_button_pressed) {
    geo2.remove(map);
    geo.addTo(map);
    document.getElementById("map").style.display = "none";
    document.getElementById("india-map").style.display = "block";
    document.getElementById("Constituency-res").style.display = "none";
    document.getElementById("stateTabeleContainer").style.display = "block";
  } else {
    resetMap();
    document.getElementById("stateTabeleContainer").style.display = "block";
  }
}

const zooming = {
  35: [10, 93.3, 6],
  37: [16, 80, 6],
  12: [28, 95, 6],
  18: [26, 93, 6],
  10: [26, 86, 6],
  4: [30.7, 76.8, 8],
  22: [21, 83, 6],
  26: [20.2, 73.3, 6],
  25: [20.5, 72, 7],
  7: [28.67, 77.2, 8],
  30: [15.4, 74.3, 8],
  24: [23, 72.2, 6],
  6: [29.3, 76.6, 7],
  2: [32, 77, 7],
  1: [35, 77, 6],
  20: [23.6, 85.8, 7],
  29: [15, 77, 6],
  32: [11, 76.8, 6],
  31: [10.5, 73, 8],
  23: [24, 79, 6],
  27: [19.2, 77, 6],
  14: [25, 94.5, 7],
  17: [25.6, 91.4, 7],
  15: [23.4, 93.2, 7],
  13: [26, 94, 7],
  21: [20, 85, 6],
  34: [14, 80, 6],
  3: [31, 75.7, 6],
  8: [28, 75.7, 5], //[26.7,74,7],
  11: [27.5, 88.5, 7],
  33: [11, 79.5, 6],
  36: [18, 79.5, 6],
  16: [23.8, 92],
  9: [27, 81, 6],
  5: [30, 79.4, 7],
  19: [24.5, 88, 6],
};
function updateMapBounds() {
  if (geo) {
    let bounds = geo.getBounds();
    map.fitBounds(bounds);
  }
}

function delayedBoundsUpdate2() {
  setTimeout(updateMapBounds2, 100); // Delay the update slightly to allow for smoother resizing
}

function delayedBoundsUpdate() {
  setTimeout(updateMapBounds, 100); // Delay the update slightly to allow for smoother resizing
}
function render_whole_table() {
  document.getElementById("Constituency-res").style.display = "none";
  const tb = document.getElementById("table-body");
  tb.innerHTML = "";

  let count = 0;

  // Create all rows first
  for (let i of ftrs) {
    if (i.pc_id == null) continue;

    const tr = document.createElement("tr");
    tr.className = "tr";

    tr.dataset.pc = i.pc_id;
    tr.dataset.pcname = i.pc_name;
    tr.dataset.state = i.st_name;
    tr.dataset.s_code = i.st_code;
    tr.dataset.pcvalue = "";

    let id = 0;
    let name = "";
    let candid = "";
    let candid2 = "";
    let votes = 0;
    let party_name = "";
    let party_2 = "";
    let votes2 = 0;

    let win;
    const firstCandidateKey = data[i.pc_id][0];
    if (!firstCandidateKey) {
      votes = 0;
      party_name = "INDEPENDENT";
      win = "NOTA";
    } else {
      win = firstCandidateKey.party;
      id = i.pc_id;
      name = data[i.pc_id][0].constituencyName;
      candid = data[i.pc_id][0].candidateName;
      console.log(data[i.pc_id][0]);
      console.log(data[i.pc_id][1]);
      votes = data[i.pc_id][0].votes;
      party_name = data[i.pc_id][0].party;
      if (data[i.pc_id][1] !== undefined) {
        candid2 = data[i.pc_id][1].candidateName;
        votes2 = data[i.pc_id][1].votes;
        party_2 = data[i.pc_id][1].party;
      }
    }

    if (!partyColors[win]) tr.dataset.pccolor = "#D3D3D3";
    else tr.dataset.pccolor = partyColors[win];

    const td = document.createElement("td");
    td.textContent = name;
    td.classList.add("td");
    tr.appendChild(td);

    const td1 = document.createElement("td");
    td1.innerHTML = `${candid}<br><img src="${sym[party_name]}"><span>${party_name}</span>`;
    tr.appendChild(td1);
    td1.classList.add("td1");

    const td2 = document.createElement("td");
    td2.innerHTML = `${candid2}<br><img src="${sym[party_2]}"><span>${party_2}</span>`;
    td2.classList.add("td2");
    tr.appendChild(td2);

    const td3 = document.createElement("td");
    td3.innerHTML = `${votes - votes2}<br>`;
    tr.appendChild(td3);
    td3.classList.add("td3");

    tb.appendChild(tr);
    count++;
  }

  // Update the heading with the count of candidates
  const th = document.getElementById("theading");
  th.innerHTML = `<span id="constituency-name">ALL</span><div>${count} Constituencies</div>`;
  let input = document.getElementById("stateinput");
  if (!input) {
    input = document.createElement("input");
    input.className = "form-control";
    input.id = "stateinput";
    input.type = "text";
    input.placeholder = "Search";
  }
  th.appendChild(input);
  th.style.display = "flex";
  th.style.background = "white";
  updateMapStyles();
  // Search functionality
  document.getElementById("stateinput").addEventListener("keyup", function () {
    const value = this.value.toLowerCase();
    const rows = document.querySelectorAll("#table-body tr");
    rows.forEach(function (row) {
      const text = row.textContent.toLowerCase();
      const words = text.split(/\s+/); // Split text into words
      const match = words.some(function (word) {
        return word.startsWith(value);
      });
      if (match || value === "") {
        row.style.display = ""; // Show the row if it matches the search or if the search input is empty
      } else {
        row.style.display = "none"; // Hide the row if it doesn't match the search
      }
    });

    // Reset to the first page after filtering
    if (value === "") {
      currentPage = 1;
    }
  });
}

function updateMapStyles() {
  geo.setStyle((feature) => ({
    weight: 0.2,
    color: "#000",
    fillColor: document.querySelector(
      `tr[data-pc="${feature.properties.pc_id}"]`
    )?.dataset.pccolor,
    fillOpacity: 0.9,
  }));
}

function updateMapBounds2() {
  if (geo2) {
    let bounds = geo2.getBounds();
    map.fitBounds(bounds);
  }
}
let pressed = 0;
function handleSelection() {
  // console.log(geo2);
  document.getElementById("breadcrumb-india").style.display = "block";
  document.getElementById("stateTabeleContainer").style.display = "none";
  document.getElementById("Candidate-res").style.display = "block";
  document.getElementById("india-map").style.display = "none";
  document.getElementById("map").style.display = "block";

  const selectElement = document.getElementById("state-select");
  const selectedValue = selectElement.value;
  const text = selectElement.options[selectElement.selectedIndex].text;
  if (selectedValue === "reset") {
    resetMap();
    return;
  }

  if (selectedValue) {
    geo.remove(map);

    fetch("geo.json")
      .then((res) => res.json())
      .then((geoJson) => {
        ftrs;
        for (con in ftrs) {
          selectedValue;
          ftrs[con].st_code;
        }
        geo = L.geoJSON(geoJson, {
          onEachFeature: (feature, layer) => {
            layer.on("click", function (event) {
              console.log("first");
              document.getElementById("stateTabeleContainer").style.display =
                "none";
              document.querySelector("#Constituency-res").style.display =
                "none";
              document.querySelector("#Candidate-res").style.display = "block";
              breadcrumbState.innerHTML = `<a href="#" onclick="resetstatebread()">${feature.properties.st_name}`;
              breadcrumbState.style.display = "inline";
              breadcrumbConstituency.textContent = feature.properties.pc_name;
              breadcrumbConstituency.style.display = "inline";
              const candidate_1 =
                data[feature.properties.pc_id][0]["candidateName"];
              const candidate_2 =
                data[feature.properties.pc_id][1]["candidateName"];
              const party_name_1 = data[feature.properties.pc_id][0]["party"];
              const party_name_2 = data[feature.properties.pc_id][1]["party"];
              const votes_1 = data[feature.properties.pc_id][0]["votes"];
              const votes_2 = data[feature.properties.pc_id][1]["votes"];
              const margin = votes_1 - votes_2;
              showdatatable(
                feature.properties.st_name,
                candidate_1,
                candidate_2,
                votes_1,
                votes_2,
                margin,
                feature.properties.pc_name,
                party_name_1,
                party_name_2,
                feature.properties.pc_id
              );
            });
            layer._leaflet_id = feature.properties.pc_id;
          },
        });

        if (pressed) {
          geo2.remove(map);
        }

        var filteredFeatures = geoJson.features.filter(
          (feature) => feature.properties.st_code == selectElement.value
        );
        var filteredGeoJson = { ...geoJson, features: filteredFeatures };
        geo2 = L.geoJSON(filteredGeoJson, {
          onEachFeature: (feature, layer) => {
            layer.on("click", function (event) {
              console.log("change");
              document.querySelector("#Constituency-res").style.display =
                "none";
              document.querySelector("#Candidate-res").style.display = "block";
              breadcrumbConstituency.textContent = feature.properties.pc_name;
              breadcrumbConstituency.style.display = "inline";
              const candidate_1 =
                data[feature.properties.pc_id][0]["candidateName"];
              const candidate_2 =
                data[feature.properties.pc_id][1]["candidateName"];
              const party_name_1 = data[feature.properties.pc_id][0]["party"];
              const party_name_2 = data[feature.properties.pc_id][1]["party"];
              const votes_1 = data[feature.properties.pc_id][0]["votes"];
              const votes_2 = data[feature.properties.pc_id][1]["votes"];
              const margin = votes_1 - votes_2;
              showdatatable(
                feature.properties.st_name,
                candidate_1,
                candidate_2,
                votes_1,
                votes_2,
                margin,
                feature.properties.pc_name,
                party_name_1,
                party_name_2,
                feature.properties.pc_id
              );
            });
            layer._leaflet_id = feature.properties.pc_id;
          },
        });
        if (document.querySelector("#Candidate-res").style.display == "block") {
          document.querySelector("#Candidate-res").style.display = "none";
          document.querySelector("#Constituency-res").style.display = "block";
          render_state_table(
            filteredFeatures.map((feature) => feature.properties),
            text
          );
        }
        map.setView(
          [zooming[selectedValue][0], zooming[selectedValue][1]],
          zooming[selectedValue][2]
        );
        handleStateClick(text);
        geo2.addTo(map);
        updateMapBounds2();
        map.on("resize", delayedBoundsUpdate2);

        pressed = 1;
        console.log(pressed);
        render();
        render2();

        render_state_table(
          filteredFeatures.map((feature) => feature.properties),
          text
        );
      })
      .catch((e) => console.error(e));
  }
}
function updatePaginationControls(totalRows, class_name, second_class_name) {
  const numPages = Math.ceil(totalRows / rowsPerPage);
  const paginationControls = document.getElementById(class_name);
  paginationControls.innerHTML = ""; // Clear previous pagination controls

  const pageButtonsContainer = document.createElement("div");
  pageButtonsContainer.className = "page-buttons";

  const prevButton = document.createElement("button");
  prevButton.innerHTML = `&lt; Previous`;
  prevButton.addEventListener("click", function () {
    if (class_name == "pagination-controls") {
      if (currentPage > 1) {
        currentPage--;
        displayPage(currentPage, second_class_name);
      }
    } else {
      if (currentPageCandidates > 1) {
        currentPageCandidates--;
        displayPage(currentPageCandidates, second_class_name);
      }
    }
  });
  pageButtonsContainer.appendChild(prevButton);

  for (let i = 1; i <= numPages; i++) {
    const button = document.createElement("button");
    button.textContent = i;
    button.addEventListener("click", function () {
      if (class_name == "pagination-controls") {
        currentPage = i;
        displayPage(currentPage, second_class_name);
      } else {
        currentPageCandidates = i;
        displayPage(currentPageCandidates, second_class_name);
      }
    });
    button.className = "newbuttons";
    pageButtonsContainer.appendChild(button);
  }

  const nextButton = document.createElement("button");
  nextButton.innerHTML = `Next &gt;`;
  nextButton.addEventListener("click", function () {
    if (class_name == "pagination-controls") {
      if (currentPage < numPages) {
        currentPage++;
        displayPage(currentPage, second_class_name);
      }
    } else {
      if (currentPageCandidates < numPages) {
        currentPageCandidates++;
        displayPage(currentPageCandidates, second_class_name);
      }
    }
  });
  pageButtonsContainer.appendChild(nextButton);

  paginationControls.appendChild(pageButtonsContainer);
}

function displayPage(page, class_name) {
  const rows = document.querySelectorAll(class_name);
  const startIndex = (page - 1) * rowsPerPage;
  const endIndex = startIndex + rowsPerPage;

  rows.forEach((row, index) => {
    if (index >= startIndex && index < endIndex) {
      row.style.display = "table-row";
    } else {
      row.style.display = "none";
    }
  });
}

function render_state_table(feature, state) {
  let count = 0;
  const tb = document.getElementById("table-body");
  tb.innerHTML = "";

  // Create all rows first
  for (let i of feature) {
    const tr = document.createElement("tr");
    tr.className = "tr";
    tb.appendChild(tr);
    tr.dataset.pc = i.pc_id;
    tr.dataset.pcname = i.pc_name;
    tr.dataset.state = i.st_name;
    tr.dataset.s_code = i.st_code;
    tr.dataset.pcvalue = "";

    if (i.pc_id != null) {
      let id = 0;
      let name = "";
      let candid = "";
      let candid2 = "";
      let votes = 0;
      let party_name = "";
      let party_2 = "";
      let votes2 = 0;

      let win;
      const firstCandidateKey = data[i.pc_id][0];
      if (!firstCandidateKey) {
        votes = 0;
        party_name = "INDEPENDENT";
        win = "NOTA";
      } else {
        win = firstCandidateKey.party;
        id = i.pc_id;
        name = data[i.pc_id][0].constituencyName;
        candid = data[i.pc_id][0].candidateName;
        candid2 = data[i.pc_id][1].candidateName;
        votes = data[i.pc_id][0].votes;
        party_name = data[i.pc_id][0].party;
        votes2 = data[i.pc_id][1].votes;
        party_2 = data[i.pc_id][1].party;
      }
      if (!partyColors[win]) tr.dataset.pccolor = "#D3D3D3";
      else tr.dataset.pccolor = partyColors[win];
      tr.className = tr;

      const td = document.createElement("td");
      td.textContent = name;
      td.classList.add("td");
      tr.appendChild(td);

      const td1 = document.createElement("td");
      td1.innerHTML = `${candid}<br><img src="${sym[party_name]}"><span>${party_name}</span>`;
      tr.appendChild(td1);
      td1.classList.add("td1");

      const td2 = document.createElement("td");
      td2.innerHTML = `${candid2}<br><img src="${sym[party_2]}"><span>${party_2}</span>`;
      td2.classList.add("td2");
      tr.appendChild(td2);

      const td3 = document.createElement("td");
      td3.innerHTML = `${votes - votes2}<br>`;
      tr.appendChild(td3);
      td3.classList.add("td3");
      count++;
    } else {
      tr.dataset.pccolor = "#fff";
    }
  }

  // Update the heading with the count of candidates
  const th = document.getElementById("theading");
  th.innerHTML = `<span id="constituency-name">${state}</span><div>${count} Constituencies</div>`;
  let input = document.getElementById("stateinput");
  if (!input) {
    input = document.createElement("input");
    input.className = "form-control";
    input.id = "stateinput";
    input.type = "text";
    input.placeholder = "Search";
  }
  th.appendChild(input);
  th.style.display = "flex";
  th.style.background = "white";

  // Hide pagination controls if the number of candidates is less than or equal to 36
  const paginationControls = document.getElementById("pagination-controls");
  if (count <= rowsPerPage) {
    paginationControls.style.display = "none";
  } else {
    paginationControls.style.display = "block";
  }

  // Initialize pagination only if needed
  if (count > rowsPerPage) {
    updatePaginationControls(count, "pagination-controls", "#table-body tr");
    displayPage(currentPage, "#table-body tr");
  }

  // Search functionality
  $("#stateinput").on("keyup", function () {
    var value = $(this).val().toLowerCase();
    $("#table-body tr").filter(function () {
      var text = $(this).text().toLowerCase();
      var words = text.split(/\s+/); // Split text into words
      var match = words.some(function (word) {
        return word.startsWith(value);
      });
      $(this).toggle(match);
    });

    // Reset to the first page after filtering
    currentPage = 1;
    // updatePaginationControls(document.querySelectorAll("#table-body tr:visible").length);
    // displayPage(currentPage);
  });
}

// rendering
function render() {
  geo.setStyle((feature) => ({
    weight: 0.2,
    color: "#000",
    fillColor:
      document.querySelector(`tr[data-pc="${feature.properties.pc_id}"]`)
        ?.dataset.pccolor || "#fff",
    fillOpacity: 0.9,
  }));
}
function render2() {
  geo2.setStyle((feature) => ({
    weight: 1,
    color: "#000",
    fillColor:
      document.querySelector(`tr[data-pc="${feature.properties.pc_id}"]`)
        ?.dataset.pccolor || "#fff",
    fillOpacity: 0.9,
  }));
}
function showdatatable(
  state,
  cand1,
  cand2,
  votes1,
  votes2,
  mvotes,
  con1,
  party1,
  party2,
  id
) {
  document.getElementById("containertool").style.display = "block";
  var div = document.getElementById("containertool");
  var htmlCode = `
    <h2 id="h2"><span class="city">${con1}</span><br><span class="state">${state}</span></h2><div id="close" onclick="closedata()">&times;</div>
        <div id="candidatediv">
          <div class="header">
            <div class="header-item1">Candidate</div>
            <div class="header-item2">Votes</div>
          </div>
          <div class="candidate">
              <div class="candidate-info">
                  <div>
                      <div class="candidate-name">${cand1}</div>
                      <div class="party"><img src="${sym[party1]}" class="party-logo">${party1}</div>
                  </div>
              </div>
              <div class="votes">
                  <div id="vs">${votes1}</div>
                  <div class="margin">Margin - ${mvotes}</div>
              </div>
          </div>
          <div class="candidate">
              <div class="candidate-info">
                  
                  <div>
                      <div class="candidate-name">${cand2}</div>
                      <div class="party"><img src="${sym[party2]}"class="party-logo">${party2}</div>
                  </div>
              </div>
              <div class="votes" id="v2">${votes2}</div>
          </div>
        </div>
        <div class="previous-winner">
            <span>
                <div class="winner-title">2019 Winner</div>
                <div class="vote-title">Votes</div>
            </span>
            <div class="winner-info">
                <div class="winner-name">${cand1}</div>
                <div class="winner-votes">${votes1}</div>
            </div>
        </div>
        <div id="checkdetails" onclick="render_table('${id}',1)">Check Full Results <span id="gt">&gt</span></div>`;
  div.innerHTML = "";
  div.innerHTML += htmlCode;
  div.style.display = "block";
}
function closedata() {
  document.getElementById("containertool").style.display = "none";
  document.getElementById("stateTabeleContainer").style.display = "block";
  document.getElementById("Candidate-res").style.display = "none";
}
function render_table(code, page) {
  const tbody = document.querySelector(".candidateBody");
  tbody.innerHTML = "";
  let ct = 0;
  closedata();
  document.getElementById("stateTabeleContainer").style.display = "none";
  document.getElementById("Candidate-res").style.display = "block";

  const pageSize = 10; // Number of rows per page
  const candi = data[code];
  const candi_len = candi.length;

  // Calculate start and end indices for the current page
  const startIndex = (page - 1) * pageSize;
  const endIndex = Math.min(startIndex + pageSize, candi.length);

  for (let i = 0; i < candi_len; i++) {
    const row = document.createElement("tr");
    row.className = "tr";

    const candidate = document.createElement("td");
    candidate.textContent = candi[i].candidateName;
    row.appendChild(candidate);
    candidate.classList.add("tdata");

    const party = document.createElement("td");
    const par = candi[i].party;
    party.innerHTML = `<img src="${sym[par]}"><span>${candi[i].party}</span>`;
    party.className = "tdata1";
    row.appendChild(party);

    const votes = document.createElement("td");
    votes.textContent = candi[i].votes;
    votes.classList.add("tdata2");
    row.appendChild(votes);

    const votes2 = document.createElement("td");
    if (i == 0) {
      votes2.textContent = "-";
    } else if (i > 0) {
      votes2.textContent = candi[i - 1].votes - candi[i].votes;
    }
    votes2.classList.add("tdata3");
    row.appendChild(votes2);

    tbody.appendChild(row);
    ct++;
  }
  const paginationControls = document.getElementById(
    "pagination-controls-candidates"
  );
  if (candi_len > pageSize) {
    updatePaginationControls(
      candi_len,
      "pagination-controls-candidates",
      ".candidateBody tr"
    );
    currentPageCandidates = 1;
    displayPage(currentPageCandidates, ".candidateBody tr");
    paginationControls.style.display = "block";
  } else {
    paginationControls.innerHTML = "";
    paginationControls.style.display = "none";
  }

  // Display pagination controls

  // Update theading2 with input

  const th = document.getElementById("theading2");
  th.innerHTML = `<span id="constituency-name">${candi[0].constituencyName}</span><div>${ct} candidates</div>`;
  let input = document.getElementById("candidateinput");
  if (!input) {
    input = document.createElement("input");
    input.className = "form-control";
    input.id = "candidateinput";
    input.type = "text";
    input.placeholder = "Search";
    th.appendChild(input);
  }
  th.style.display = "flex";
  th.style.background = "white";

  // Search functionality
  $("#candidateinput")
    .off("keyup")
    .on("keyup", function () {
      var value = $(this).val().toLowerCase();
      $(".candidateBody tr").filter(function () {
        var text = $(this).text().toLowerCase();
        var words = text.split(/\s+/); // Split text into words
        var match = words.some(function (word) {
          return word.startsWith(value);
        });
        $(this).toggle(match);
      });
    });
}

function state_map(value, text) {
  document.getElementById("stateTabeleContainer").style.display = "none";
  document.getElementById("Candidate-res").style.display = "block";
  document.getElementById("india-map").style.display = "none";
  document.getElementById("map").style.display = "block";

  if (value) {
    geo.remove(map);
    fetch("geo.json")
      .then((res) => res.json())
      .then((geoJson) => {
        for (con in ftrs) {
          ftrs[con].st_code;
        }

        geo = L.geoJSON(geoJson, {
          onEachFeature: (feature, layer) => {
            layer.on("click", function (event) {
              console.log("first");
              document.getElementById("stateTabeleContainer").style.display =
                "none";
              document.querySelector("#Constituency-res").style.display =
                "none";
              document.querySelector("#Candidate-res").style.display = "block";
              breadcrumbState.innerHTML = `<a href="#" onclick="resetstatebread()">${feature.properties.st_name}`;
              breadcrumbState.style.display = "inline";
              breadcrumbConstituency.textContent = feature.properties.pc_name;
              breadcrumbConstituency.style.display = "inline";
              const candidate_1 =
                data[feature.properties.pc_id][0]["candidateName"];
              const candidate_2 =
                data[feature.properties.pc_id][1]["candidateName"];
              const party_name_1 = data[feature.properties.pc_id][0]["party"];
              const party_name_2 = data[feature.properties.pc_id][1]["party"];
              const votes_1 = data[feature.properties.pc_id][0]["votes"];
              const votes_2 = data[feature.properties.pc_id][1]["votes"];
              const margin = votes_1 - votes_2;
              showdatatable(
                feature.properties.st_name,
                candidate_1,
                candidate_2,
                votes_1,
                votes_2,
                margin,
                feature.properties.pc_name,
                party_name_1,
                party_name_2,
                feature.properties.pc_id
              );
              // render_table(feature.properties.pc_id,1);
            });
            layer._leaflet_id = feature.properties.pc_id;
          },
        });

        geo.addTo(map);
        geo.setStyle((feature) => ({
          weight: 0.2,
          color: "#000",
          fillColor:
            document.querySelector(`tr[data-pc="${feature.properties.pc_id}"]`)
              ?.dataset.pccolor || "#fff",
          fillOpacity: 0.9,
        }));
        // console.log("rendered");
        updateMapBounds();
        map.on("resize", delayedBoundsUpdate);
        render_whole_table();

        if (pressed) {
          geo2.remove(map);
        }

        var filteredFeatures = geoJson.features.filter(
          (feature) => feature.properties.st_code === value
        );
        var filteredGeoJson = { ...geoJson, features: filteredFeatures };
        geo2 = L.geoJSON(filteredGeoJson, {
          onEachFeature: (feature, layer) => {
            //   layer.on('mouseover', function(event) {
            //     showBox(feature.properties, layer);
            // });

            // layer.on('mouseout', function(event) {
            //     hideBox();
            // });

            layer.on("click", function (event) {
              console.log("change");
              document.querySelector("#Constituency-res").style.display =
                "none";
              document.querySelector("#Candidate-res").style.display = "block";
              breadcrumbConstituency.style.display = "block";
              breadcrumbConstituency.textContent = feature.properties.pc_name;
              const candidate_1 =
                data[feature.properties.pc_id][0]["candidateName"];
              const candidate_2 =
                data[feature.properties.pc_id][1]["candidateName"];
              const party_name_1 = data[feature.properties.pc_id][0]["party"];
              const party_name_2 = data[feature.properties.pc_id][1]["party"];
              const votes_1 = data[feature.properties.pc_id][0]["votes"];
              const votes_2 = data[feature.properties.pc_id][1]["votes"];
              const margin = votes_1 - votes_2;
              showdatatable(
                feature.properties.st_name,
                candidate_1,
                candidate_2,
                votes_1,
                votes_2,
                margin,
                feature.properties.pc_name,
                party_name_1,
                party_name_2,
                feature.properties.pc_id
              );
              // render_table(feature.properties.pc_id,1);
            });
            layer._leaflet_id = feature.properties.pc_id;
          },
        });
        if (document.querySelector("#Candidate-res").style.display == "block") {
          document.querySelector("#Candidate-res").style.display = "none";
          document.querySelector("#Constituency-res").style.display = "block";
          render_state_table(
            filteredFeatures.map((feature) => feature.properties),
            text
          );
        }
        map.setView([zooming[value][0], zooming[value][1]], zooming[value][2]);
        geo.remove(map);
        geo2.addTo(map);
        updateMapBounds2();
        map.on("resize", delayedBoundsUpdate2);

        pressed = 1;
        console.log(pressed);
        render();
        render2();

        render_state_table(
          filteredFeatures.map((feature) => feature.properties),
          text
        );
      })
      .catch((e) => console.error(e));
  }
}
function resetMap() {
  render_whole_table();
  map.setView(initialView, initialZoom);
  if (geo2) {
    geo2.remove();
  }
  console.log(geo);
  geo.addTo(map);
  // Initial update
  updateMapBounds();

  // Update map bounds when the map size changes
  map.on("resize", delayedBoundsUpdate);
  document.querySelector("#Candidate-res").style.display = "none";
  // document.querySelector("#Constituency-res").style.display = "block";
}
function resetstatebread() {
  geo.remove(map);
  document.getElementById("stateTabeleContainer").style.display = "none";
  breadcrumbConstituency.style.display = "none";
  document.querySelector("#Candidate-res").style.display = "none";
  document.querySelector("#Constituency-res").style.display = "block";
  console.log(breadcrumbState.textContent);
  fetch("geo.json")
    .then((res) => res.json())
    .then((geoJson) => {
      ftrs;
      for (con in ftrs) {
        ftrs[con].st_code;
      }
      geo = L.geoJSON(geoJson, {
        onEachFeature: (feature, layer) => {
          layer.on("click", function (event) {
            console.log("first");
            document.getElementById("stateTabeleContainer").style.display =
              "none";
            document.querySelector("#Constituency-res").style.display = "none";
            document.querySelector("#Candidate-res").style.display = "block";
            breadcrumbState.innerHTML = `<a href="#" onclick="resetstatebread()">${feature.properties.st_name}`;
            breadcrumbState.style.display = "inline";
            breadcrumbConstituency.textContent = feature.properties.pc_name;
            breadcrumbConstituency.style.display = "inline";
            const candidate_1 =
              data[feature.properties.pc_id][0]["candidateName"];
            const candidate_2 =
              data[feature.properties.pc_id][1]["candidateName"];
            const party_name_1 = data[feature.properties.pc_id][0]["party"];
            const party_name_2 = data[feature.properties.pc_id][1]["party"];
            const votes_1 = data[feature.properties.pc_id][0]["votes"];
            const votes_2 = data[feature.properties.pc_id][1]["votes"];
            const margin = votes_1 - votes_2;
            showdatatable(
              feature.properties.st_name,
              candidate_1,
              candidate_2,
              votes_1,
              votes_2,
              margin,
              feature.properties.pc_name,
              party_name_1,
              party_name_2,
              feature.properties.pc_id
            );
            // render_table(feature.properties.pc_id,1);
          });
          layer._leaflet_id = feature.properties.pc_id;
        },
      });
      if (pressed) {
        geo2.remove(map);
      }

      var filteredFeatures = geoJson.features.filter(
        (feature) =>
          feature.properties.st_code == state_codes[breadcrumbState.textContent]
      );
      var filteredGeoJson = { ...geoJson, features: filteredFeatures };
      geo2 = L.geoJSON(filteredGeoJson, {
        onEachFeature: (feature, layer) => {
          layer.on("click", function (event) {
            console.log("change");
            document.querySelector("#Constituency-res").style.display = "none";
            // document.querySelector("#Candidate-res").style.display = "block";
            breadcrumbConstituency.textContent = feature.properties.pc_name;
            breadcrumbConstituency.style.display = "inline";
            const candidate_1 =
              data[feature.properties.pc_id][0]["candidateName"];
            const candidate_2 =
              data[feature.properties.pc_id][1]["candidateName"];
            const party_name_1 = data[feature.properties.pc_id][0]["party"];
            const party_name_2 = data[feature.properties.pc_id][1]["party"];
            const votes_1 = data[feature.properties.pc_id][0]["votes"];
            const votes_2 = data[feature.properties.pc_id][1]["votes"];
            const margin = votes_1 - votes_2;
            showdatatable(
              feature.properties.st_name,
              candidate_1,
              candidate_2,
              votes_1,
              votes_2,
              margin,
              feature.properties.pc_name,
              party_name_1,
              party_name_2,
              feature.properties.pc_id
            );
            // render_table(feature.properties.pc_id,1);
          });
          layer._leaflet_id = feature.properties.pc_id;
        },
      });
      if (document.querySelector("#Candidate-res").style.display == "block") {
        document.querySelector("#Candidate-res").style.display = "none";
        document.querySelector("#Constituency-res").style.display = "block";
        render_state_table(
          filteredFeatures.map((feature) => feature.properties),
          text
        );
      }
      map.setView(
        [
          zooming[state_codes[breadcrumbState.textContent]][0],
          zooming[state_codes[breadcrumbState.textContent]][1],
        ],
        zooming[state_codes[breadcrumbState.textContent]][2]
      );
      geo.remove(map);
      console.log(pressed);
      handleStateClick(breadcrumbState.textContent);
      geo2.addTo(map);

      updateMapBounds2();
      map.on("resize", delayedBoundsUpdate2);

      pressed = 1;

      render();
      render2();

      render_state_table(
        filteredFeatures.map((feature) => feature.properties),
        breadcrumbState.textContent
      );
    })
    .catch((e) => console.error(e));
}
function resetstatebread_option() {
  breadcrumbConstituency.style.display = "none";
  document.querySelector("#Candidate-res").style.display = "none";
  document.querySelector("#Constituency-res").style.display = "block";
}
function resetstatebread2() {
  breadcrumbConstituency.style.display = "none";
  document.querySelector("#Candidate-res").style.display = "none";
  document.querySelector("#Constituency-res").style.display = "block";
}

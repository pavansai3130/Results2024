// JavaScript code for handling page functionality
// Ensure you have included JQuery library before this script

// JSON object containing party colors
const json2019 = [
  {
    id: "nda",
    name: "NDA",
    seats: 300,
  },
  {
    id: "india",
    name: "I.N.D.I.A",
    seats: 200,
  },
  {
    id: "others",
    name: "Others",
    seats: 43,
  },
];

const initialView = [23, 82.5];
const initialZoom = 5;
let state_value = 36;
let sym = {
  IND: "./imgs/independent.svg",
  BJP: "./imgs/BJP.webp",
  INC: "./imgs/INC.svg",
  DMK: "./imgs/DMK.webp",
  YSRCP: "./imgs/YSRCP.jpeg",
  AITC: "./imgs/AITC.png",
  SHS: "./imgs/SHS.png",
  "JD(U)": "./imgs/JD(U).png",
  BJD: "./imgs/BJD.png",
  BSP: "./imgs/BSP.jpg",
  TRS: "./imgs/TRS.jpg",
  BRS: "./imgs/BRS.jpg",
  LJP: "./imgs/LJP.jpg",
  NCP: "./imgs/NCP.webp",
  SP: "./imgs/SP.jpg",
  TDP: "./imgs/TDP.webp",
  JKN: "./imgs/JKN.webp",
  IUML: "./imgs/IUML.jpg",
  CPIM: "./imgs/CPIM.png",
  AIMIM: "./imgs/AIMIM.png",
  SAD: "./imgs/SAD.webp",
  CPI: "./imgs/CPI.webp",
  ADAL: "./imgs/ADAL.webp",
  AIUDF: "./imgs/AIUDF.png",
  JMM: "./imgs/JMM.png",
  AJSUP: "./imgs/AJSUP.jpg",
  "JD(S)": "./imgs/JD(S).jpg",
  "KEC(M)": "./imgs/KEC(M).webp",
  "Andaman & Nicobar Islands": "./imgs/Andaman_&_Nicobar_Islands.jpg",
  "Andhra Pradesh": "./imgs/Andhra_Pradesh.webp",
  "Arunachal Pradesh": "./imgs/Arunachal_Pradesh.jpg",
  Assam: "./imgs/Assam.jpg",
  Bihar: "./imgs/Bihar.jpg",
  Chandigarh: "./imgs/Chandigarh.png",
  Chhattisgarh: "./imgs/Chhattisgarh.jpg",
  "Dadra & Nagar Haveli": "./imgs/Dadra_&_Nagar_Haveli.png",
  "Daman & Diu": "./imgs/Daman_&_Diu.jpg",
  Goa: "./imgs/Goa.jpg",
  Gujarat: "./imgs/Gujarat.jpg",
  Haryana: "./imgs/Haryana.jpg",
  "Himachal Pradesh": "./imgs/Himachal_Pradesh.jpg",
  "Jammu & Kashmir": "./imgs/Jammu_&_Kashmir.jpg",
  Jharkhand: "./imgs/Jharkhand.jpg",
  Karnataka: "./imgs/Karnataka.jpg",
  Kerala: "./imgs/Kerala.jpg",
  Lakshadweep: "./imgs/Lakshadweep.gif",
  "Madhya Pradesh": "./imgs/Madhya_Pradesh.jpg",
  Maharashtra: "./imgs/Maharashtra.jpg",
  Manipur: "./imgs/Manipur.jpg",
  Meghalaya: "./imgs/Meghalaya.jpg",
  Mizoram: "./imgs/Mizoram.png",
  Nagaland: "./imgs/Nagaland.png",
  "NCT OF Delhi": "./imgs/NCT_OF_Delhi.jpeg",
  Odisha: "./imgs/Odisha.png",
  Puducherry: "./imgs/Puducherry.png",
  Punjab: "./imgs/Punjab.jpg",
  Rajasthan: "./imgs/Rajasthan.png",
  Sikkim: "./imgs/Sikkim.png",
  "Tamil Nadu": "./imgsTamil_Nadu.jpg",
  Telangana: "./imgs/Telangana.png",
  Tripura: "./imgs/Tripura.png",
  "Uttar Pradesh": "./imgs/Uttar_Pradesh.png",
  Uttarakhand: "./imgs/Uttarakhand.png",
  "West Bengal": "./imgs/West_Bengal.png",
};
let state_codes = {
  "Madhya Pradesh": 23,
  Odisha: 21,
  Mizoram: 15,
  Sikkim: 11,
  Goa: 30,
  Kerala: 32,
  Karnataka: 29,
  Maharashtra: 27,
  Manipur: 14,
  Meghalaya: 17,
  Chhattisgarh: 22,
  Gujarat: 24,
  "Arunachal Pradesh": 12,
  Assam: 18,
  "Andhra Pradesh": 37,
  "Andaman and Nicobar Islands": 35,
  Chandigarh: 4,
  Telangana: 36,
  "Tamil Nadu": 33,
  Rajasthan: 8,
  Punjab: 3,
  Puducherry: 34,
  Jharkhand: 20,
  Tripura: 16,
  Lakshadweep: 31,
  Nagaland: 13,
  Ladakh: 1,
  Bihar: 10,
  "Uttar Pradesh": 9,
  Uttarakhand: 5,
  "Himachal Pradesh": 2,
  Haryana: 6,
  "Jammu and Kashmir": 1,
  "Jammu & Kashmir": 1,
  "NCT OF Delhi": 7,
  "Dadra and Nagar Haveli": 26,
  "West Bengal": 19,
};
const partyColors = {
  BJP: "#FF9933",
  Congress: "#0066CC",
  TMC: "#FF3399",
  DMK: "#FF0000",
  ADMK: "#66FF33",
  AAP: "#F7931E",
  AIMIM: "#2E3192",
  YSR: "#E53935",
  BRS: "#66CC99",
  DMDK: "#FF6600",
  PMK: "#00BFFF",
  CPI: "#FF3333",
  CPM: "#FF6600",
  BJD: "#FF9933",
  IUML: "#008000",
  JKPDP: "#FF6600",
  JJP: "#FF3300",
  KC: "#800000",
  PPA: "#FF6666",
  SP: "#FF0000",
  "Shiv Sena": "#0000FF",
  VCK: "#009900",
  "Puthiya Tamilagam": "#FF9933",
  "Naam Tamilar": "#008000",
};
const stateMaps = {
  BJP: "./imgs/BJP.webp",
  INC: "./imgs/INC.svg",
  DMK: "./imgs/DMK.webp",
  YSRCP: "./imgs/YSRCP.jpeg",
  AITC: "./imgs/AITC.png",
  SHS: "./imgs/SHS.png",
  "JD(U)": "./imgs/JD(U).png",
  BJD: "./imgs/BJD.png",
  BSP: "./imgs/BSP.jpg",
  TRS: "./imgs/TRS.jpg",
  BRS: "./imgs/BRS.jpg",
  LJP: "./imgs/LJP.jpg",
  NCP: "./imgs/NCP.webp",
  SP: "./imgs/SP.jpg",
  TDP: "./imgs/TDP.webp",
  JKN: "./imgs/JKN.webp",
  IUML: "./imgs/IUML.jpg",
  CPIM: "./imgs/CPIM.png",
  AIMIM: "./imgs/AIMIM.png",
  SAD: "./imgs/SAD.webp",
  CPI: "./imgs/CPI.webp",
  ADAL: "./imgs/ADAL.webp",
  AIUDF: "./imgs/AIUDF.png",
  JMM: "./imgs/JMM.png",
  AJSUP: "./imgs/AJSUP.jpg",
  "JD(S)": "./imgs/JD(S).jpg",
  "KEC(M)": "./imgs/KEC(M).webp",
  "Andaman and Nicobar Islands": "./imgs/Andaman_&_Nicobar_Islands.jpg",
  "Andhra Pradesh": "./imgs/Andhra_Pradesh.webp",
  "Arunachal Pradesh": "./imgs/Arunachal_Pradesh.jpg",
  Assam: "./imgs/Assam.jpg",
  Bihar: "./imgs/Bihar.jpg",
  Chandigarh: "./imgs/Chandigarh.png",
  Chhattisgarh: "./imgs/Chhattisgarh.jpg",
  "Dadra and Nagar Haveli": "./imgs/Dadra_&_Nagar_Haveli.png",
  "Daman & Diu": "./imgs/Daman_&_Diu.jpg",
  Goa: "./imgs/Goa.jpg",
  Gujarat: "./imgs/Gujarat.jpg",
  Haryana: "./imgs/Haryana.jpg",
  "Himachal Pradesh": "./imgs/Himachal_Pradesh.jpg",
  "Jammu and Kashmir": "./imgs/Jammu_&_Kashmir.jpg",
  Jharkhand: "./imgs/Jharkhand.jpg",
  Karnataka: "./imgs/Karnataka.jpg",
  Kerala: "./imgs/Kerala.jpg",
  Lakshadweep: "./imgs/Lakshadweep.gif",
  "Madhya Pradesh": "./imgs/Madhya_Pradesh.jpg",
  Maharashtra: "./imgs/Maharashtra.jpg",
  Manipur: "./imgs/Manipur.jpg",
  Meghalaya: "./imgs/Meghalaya.jpg",
  Mizoram: "./imgs/Mizoram.png",
  Nagaland: "./imgs/Nagaland.png",
  "NCT OF Delhi": "./imgs/NCT_OF_Delhi.jpeg",
  Odisha: "./imgs/Odisha.png",
  Puducherry: "./imgs/Puducherry.png",
  Punjab: "./imgs/Punjab.jpg",
  Rajasthan: "./imgs/Rajasthan.png",
  Sikkim: "./imgs/Sikkim.png",
  "Tamil Nadu": "./imgsTamil_Nadu.jpg",
  Telangana: "./imgs/Telangana.png",
  Tripura: "./imgs/Tripura.png",
  "Uttar Pradesh": "./imgs/Uttar_Pradesh.png",
  Uttarakhand: "./imgs/Uttarakhand.png",
  "West Bengal": "./imgs/West_Bengal.png",
};
const unionTerritories = [
  "Ladakh",
  "Andaman and Nicobar Islands",
  "Jammu and Kashmir",
  "Puducherry",
  "NCT OF Delhi",
  "Chandigarh",
  "Dadra and Nagar Haveli",
  "Lakshadweep",
];

let alliancePatries = {
  nda: {},
  india: {},
  others: {},
};
let data2024 = {};
let stateDataJson;
let allianceJson;
let data = {};
let ftrs, geo, geo2, map;
let names = {
  "#F47216": "NDA",
  "#87CEEB": "I.N.D.I.A",
  "#BFC8D0": "Others",
  ndaColor: "#F47216",
  indiaColor: "#87CEEB",
  othersColor: "#BFC8D0",
};
async function fetchGeoJSON(file) {
  try {
    const response = await fetch(file);
    const geoJson = await response.json();
    ftrs = geoJson.features
      .map((i) => i.properties)
      .sort((a, b) =>
        a.pc_name > b.pc_name ? 1 : a.pc_name < b.pc_name ? -1 : 0
      );
    // Initialize the map and add the GeoJSON layer
    // console.log(L);
    map = L.map("map", { attributionControl: false, zoomSnap: 0.2 });
    geo = L.geoJSON(geoJson, {
      onEachFeature: (feature, layer) => {
        layer.on("click", function (event) {
          // console.log("first");
          state_value = feature.properties.st_code;

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
              var map = document.getElementById('map').getBoundingClientRect();
              console.log("map the ", map);
              console.log("event map the ", event);
              var clickY = event.layerPoint.y - map.top;
              var mapHeight = map.height;
              var isAboveHalf = clickY < (mapHeight / 2);
              var div = document.getElementById('containertool');

              if (isAboveHalf) {
                div.classList.add("above");
                div.classList.remove("below");
              } else {
                div.classList.add("below");
                div.classList.remove("above");
              }
          // render_table(feature.properties.pc_id,1);
          document.getElementById("stateTabeleContainer").style.display =
            "none";
          document.querySelector("#Constituency-res").style.display = "none";
          document.querySelector("#Candidate-res").style.display = "block";
    
          // Reset the styles of all layers
        });
    
        layer._leaflet_id = feature.properties.pc_id;
      }
    });
    
    map.setView(initialView, initialZoom);
    geo.addTo(map);

    updateMapBounds();
    map.on("resize", delayedBoundsUpdate);
    
    geo.setStyle((feature) => ({
      weight: 0.2,
      color: "#000",
      fillColor:
        document.querySelector(`tr[data-pc="${feature.properties.pc_id}"]`)
          ?.dataset.pccolor || "#fff",
      fillOpacity: 0.9,
    }));
    
    // console.log("rendered");

    var filteredFeatures = geoJson.features.filter(
      (feature) => feature.properties.st_code == state_value
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
          // document.querySelector("#Constituency-res").style.display =
          //   "none";
          // document.querySelector("#Candidate-res").style.display = "block";
          // breadcrumbConstituency.textContent = feature.properties.pc_name;
          // breadcrumbConstituency.style.display = "inline";
          // render_table(feature.properties.pc_id);
        });
        layer._leaflet_id = feature.properties.pc_id;
      },
    });
  } catch (error) {
    console.error("Error loading GeoJSON:", error);
  }
}
async function fetchJSON(file1, file2) {
  try {
    const url = "https://results2024.s3.ap-south-1.amazonaws.com/results.json";
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    data2024 = await response.json();
    allianceJson = data2024[1];
    stateDataJson = data2024[0];
    // let k = Object.keys(data2024[0]);
    // for (let i of k) {
    //   Object.assign(data, data2024[0][i]);
    // }
    // --------------------
    function format(data2024) {
      for (let state in data2024) {
        for (let const_name in data2024[state]) {
          const candidates = [];
          for (let item of data2024[state][const_name]["candidates"]) {
            const candidate = {
              candidateId: item.cId,
              candidateName: item.cName,
              constituencyName: const_name,
              party: item.prty,
              alliance: item.alnce,
              votes: item.vts,
            };
            candidates.push(candidate);
          }
          data[constCodes[state][const_name]] = candidates;
        }
      }
    }
    format(stateDataJson);
    // ----------------------
    // You can process the JSON data here
  } catch (error) {
    console.error("Error fetching the JSON file:", error);
  }
}
// async function fetchData() {
//   //   console.log(`called ${temp++}`);
//   console.log("entered");
//   try {
//     const url = "http://192.168.1.206:4200/constituency-data"; // Replace with the path to your JSON file
//     const response = await fetch(url);
//     stateDataJson = await response.json();
//     allianceJson = stateDataJson[2];
//     stateDataJson = stateDataJson[1];

//     // console.log("entered ");
//     // console.log(stateDataJson);
//     // **Run the rest of your code here using the imported `data`**
//   } catch (error) {
//     console.error(error);
//   }
//   console.log("exited");
// }

$(document).ready(async function () {
  await fetchJSON("./election2024.json");
  await fetchGeoJSON("geo.json");
  //   let intervalId = setInterval(async () => {
  //     await fetchData();
  //     // handleStateClick(lastClickedState);
  //   }, 10000);
  // console.log(data);
  console.log(stateDataJson);
  // console.log(allianceJson);
  // Function to render India map with statewise colors
  function renderIndiaMap() {
    // Implement the logic to render India map using SVG or any other method
    // Add paths to the SVG map
    //alert("aa");
    document.getElementById(
      "india-map"
    ).innerHTML = `<div id="containertool2"></div><svg id="india-svg" viewBox="0 100 1000 1150" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%"></svg>`;
    var pathsStr = "";
    for (let state in paths) {
      pathsStr += `<path id="${states[state]}" d="${paths[state]}"></path>`;
    }
    document.getElementById("india-svg").innerHTML =
      '<svg id="india-svg" viewBox="50 0 900 800" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">' +
      pathsStr +
      "</svg>";
    document.getElementById("map").style.display = "none";
  }

  // Function to render alliance results in tabular format
  renderAllianceResults = function () {
    // Implement the logic to fetch and display alliance results
    alliancePatries = {
      nda: {},
      india: {},
      others: {},
    };
    const tbody = document.getElementById("allianceBody");
    const referenceRow = document.getElementById("referenceRow");

    tbody.innerHTML = "";

    let stateCount = 1;

    for (const state in stateDataJson) {
      // console.log(unionTerritories.includes(state));
      // if (!unionTerritories.includes(state)) {
      let nda = 0,
        india = 0,
        others = 0;

      // console.log(state);
      const stateMap = document.getElementById(state);
      // console.log(stateMap);

      const newRow = referenceRow.cloneNode(true);
      newRow.removeAttribute("id");

      newRow.style.display = "";
      for (const consti in stateDataJson[state]) {
        const leadingCandidate = stateDataJson[state][consti]["candidates"][0];
        if (leadingCandidate.alnce === "NDA") {
          nda++;
          if (alliancePatries["nda"][leadingCandidate.prty] !== undefined)
            alliancePatries["nda"][leadingCandidate.prty]++;
          else alliancePatries["nda"][leadingCandidate.prty] = 1;
        } else if (leadingCandidate.alnce === "OTH") {
          others++;
          if (alliancePatries["others"][leadingCandidate.prty] !== undefined)
            alliancePatries["others"][leadingCandidate.prty]++;
          else alliancePatries["others"][leadingCandidate.prty] = 1;
        } else {
          india++;
          if (alliancePatries["india"][leadingCandidate.prty] !== undefined)
            alliancePatries["india"][leadingCandidate.prty]++;
          else alliancePatries["india"][leadingCandidate.prty] = 1;
        }
        // }
        stateMap.style.fill =
          nda >= india && nda >= others
            ? names.ndaColor
            : india > nda && india >= others
            ? names.indiaColor
            : names.othersColor;

        if (stateCount <= 20) {
          const cells = newRow.getElementsByTagName("td");
          cells[0].innerHTML = `<img id="stateLogo" src='${stateMaps[state]}'>${state}`;
          cells[1].textContent = nda;
          cells[2].textContent = india;
          cells[3].textContent = others;
          tbody.appendChild(newRow);
        }
      }
      stateCount += 1;
    }
    console.log(stateCount);
    // console.log("afhkhbfz");
    // console.log(alliancePatries);
    const sortObjectByValuesDesc = (obj) =>
      Object.fromEntries(Object.entries(obj).sort(([, a], [, b]) => b - a));

    // Sorting each sub-object
    alliancePatries.nda = sortObjectByValuesDesc(alliancePatries.nda);
    alliancePatries.india = sortObjectByValuesDesc(alliancePatries.india);
    alliancePatries.others = sortObjectByValuesDesc(alliancePatries.others);

    populateCarousel();
  };

  // Function to render party-wise results in tabular format
  function renderPartyResults() {
    // Implement the logic to fetch and display party-wise results
  }

  // Function to handle click event on state in India map
  // function handleStateClick(state) {
  //   let nda = 0,
  //     india = 0,
  //     others = 0;
  //   state_map(state_codes[state], state);
  //   breadcrumbState.textContent = state;
  //   breadcrumbState.style.display = "inline";
  //   breadcrumbConstituency.style.display = "none";
  //   // Implement the logic to fetch and display state-wise results
  //   const constituencyTable = document.getElementById("stateTable");
  //   const cells = constituencyTable.getElementsByTagName("th");
  //   for (const consti in stateDataJson[state]) {
  //     const leadingCandidate = stateDataJson[state][consti][0];
  //     if (leadingCandidate.alliance === "NDA") nda++;
  //     else if (leadingCandidate.alliance === "OTH") others++;
  //     else india++;
  //   }
  //   updateBar([nda, india, others]);
  // }

  // Function to render state results page
  function renderStateResults(state) {
    // Implement the logic to render state-wise results page
  }

  // Initial rendering of landing page
  renderIndiaMap();
  renderPartyResults();
  renderAllianceResults();
  // updateBar(Object.values(allianceJson));

  // ------------Search in state table-------------------------------
  $("#stateSearch").on("keyup", function () {
    var value = $(this).val().toLowerCase();
    $("#allianceBody tr").filter(function () {
      var text = $(this).text().toLowerCase();
      var words = text.split(/\s+/); // Split text into words
      var match = words.some(function (word) {
        return word.startsWith(value);
      });
      $(this).toggle(match);
    });
  });

  document.getElementById("prevButton").addEventListener("click", function () {
    // document.getElementById("nextButton").className =
    //   "btn btn-light border border-5";
    // document.getElementById("stateRow").textContent = "State";
    // document.getElementById("stateButton").className += " active";
    renderAllianceResults();
  });

  document.getElementById("nextButton").addEventListener("click", function () {
    // document.getElementById("stateRow").textContent = "Union Territory";
    // document.getElementById("stateButton").className =
    //   "btn btn-light border border-5";
    // document.getElementById("unionButton").className += " active";
    const tbody = document.getElementById("allianceBody");
    tbody.innerHTML = "";
    const referenceRow = document.getElementById("referenceRow");

    let states = Object.keys(stateDataJson);
    states = states.slice(20);
    states.forEach((state) => {
      let nda = 0,
        india = 0,
        others = 0;

      const stateMap = document.getElementById(state);
      const newRow = referenceRow.cloneNode(true);
      newRow.removeAttribute("id");
      newRow.style.display = "";
      const cells = newRow.getElementsByTagName("td");
      cells[0].innerHTML = `<img id="stateLogo" src='${stateMaps[state]}'>${state}`;
      for (const consti in stateDataJson[state]) {
        const leadingCandidate = stateDataJson[state][consti]["candidates"][0];
        if (leadingCandidate.alnce === "NDA") nda++;
        else if (leadingCandidate.alnce === "OTH") others++;
        else india++;
      }

      cells[1].textContent = nda;
      cells[2].textContent = india;
      cells[3].textContent = others;
      stateMap.style.fill =
        nda >= india && nda >= others
          ? names.ndaColor
          : india > nda && india >= others
          ? names.indiaColor
          : names.othersColor;

      tbody.appendChild(newRow);
    });

    // for (const state in stateDataJson) {
    //   if (unionTerritories.includes(state)) {
    //     let nda = 0,
    //       india = 0,
    //       others = 0;

    //     const stateMap = document.getElementById(state);
    //     const newRow = referenceRow.cloneNode(true);
    //     newRow.removeAttribute("id");
    //     newRow.style.display = "";
    //     const cells = newRow.getElementsByTagName("td");
    //     cells[0].innerHTML = `<img id="stateLogo" src='${stateMaps[state]}'>${state}`;
    //     for (const consti in stateDataJson[state]) {
    //       const leadingCandidate =
    //         stateDataJson[state][consti]["candidates"][0];
    //       if (leadingCandidate.alnce === "NDA") nda++;
    //       else if (leadingCandidate.alnce === "OTH") others++;
    //       else india++;
    //     }

    //     cells[1].textContent = nda;
    //     cells[2].textContent = india;
    //     cells[3].textContent = others;
    //     stateMap.style.fill =
    //       nda >= india && nda >= others
    //         ? names.ndaColor
    //         : india > nda && india >= others
    //         ? names.indiaColor
    //         : names.othersColor;

    //     tbody.appendChild(newRow);
    //   }
    // }
  });

  // -----------------Accordion population---------------------------------------------
  // Function to handle click event on state in India map

  // Function to render state results page
  function renderStateResults(state) {
    // Implement the logic to render state-wise results page
  }

  // Example click event handler for state in India map
  $("#india-map").on("click", "path", function (event) {
    const state = $(this).attr("id");
    handleStateClick(state);
    creatediv(state);
    half(event)
  });

  let percent = 0;
  let progress_bar = document.querySelector(
    ".transition-timer-carousel-progress-bar"
  );

  let progress_crsl = new bootstrap.Carousel(
    document.getElementById("carouselExampleIndicators"),
    {
      pause: true,
    }
  );

  // Function to animate the progress bar and change slides
  function progressBarCarousel() {
    let activeElement = document.querySelector(".carousel-item.active");
    // console.log(activeElement.id);
    // console.log(activeElement.id);
    if (activeElement.id.startsWith("nda")) {
      document.getElementById("carouselProgress").style.backgroundColor =
        "#FF9933";
    } else if (activeElement.id.startsWith("india")) {
      document.getElementById("carouselProgress").style.backgroundColor =
        "#87CEEB";
    } else if (activeElement.id.startsWith("others")) {
      document.getElementById("carouselProgress").style.backgroundColor =
        "#EAECF0";
    }
    progress_bar.style.width = percent + "%";
    percent = percent + 1;
    if (percent > 100) {
      percent = 0;
      progress_crsl.next();
    }
  }

  // Start the progress bar animation
  var barInterval = setInterval(progressBarCarousel, 1000000);

  // Pause the progress bar animation on hover
  progress_crsl._element.addEventListener("mouseenter", function () {
    clearInterval(barInterval);
    // progress_crsl.pause();
  });

  progress_crsl._element.addEventListener("mouseleave", function () {
    barInterval = setInterval(progressBarCarousel, 1000000);
    // progress_crsl.cycle();
  });
  // $("#myInput").on("keyup", function () {
  //   var value = $(this).val().toLowerCase();
  //   $("#allianceBody tr").filter(function () {
  //     var text = $(this).text().toLowerCase();
  //     var words = text.split(/\s+/); // Split text into words
  //     var match = words.some(function (word) {
  //       return word.startsWith(value);
  //     });
  //     $(this).toggle(match);
  //   });
  // });
  //   const exampleValues = [335, 65, 81]; // Change these values to see different results
  updateBar(Object.values(allianceJson));

  const carousel = document.querySelector("#carouselExampleIndicators");
  const indicators = document.querySelectorAll(".carousel-indicators button");

  // Function to update active indicator color
  function updateIndicatorColor() {
    indicators.forEach((indicator, index) => {
      if (indicator.getAttribute("aria-label") === "Slide 1") {
        indicator.style.backgroundColor = "#F57A00"; // Color for Slide 1
      } else if (indicator.getAttribute("aria-label") === "Slide 2") {
        indicator.style.backgroundColor = "#3AAFDE"; // Default color for other slides
      } else if (indicator.getAttribute("aria-label") === "Slide 3") {
        indicator.style.backgroundColor = "#B8B8B8"; // Default color for other slides
      }
    });
  }

  // Initial update
  updateIndicatorColor();

  // Add event listener for when the carousel slide changes
  carousel.addEventListener("slid.bs.carousel", (event) => {
    updateIndicatorColor();
  });
  const toggleButtons = document.querySelectorAll(".toggleButton");
  toggleButtons.forEach((toggleButton) => {
    toggleButton.addEventListener("click", toggleEntries);
    // const hiddenRows = document.querySelectorAll(".hiddenRow");
    // toggleButton.addEventListener("click", function () {
    //   hiddenRows.forEach((hiddenRow) => {
    //     if (hiddenRow.classList.contains("d-none")) {
    //       hiddenRow.classList.remove("d-none");
    //       toggleButton.textContent = "Show Less";
    //     } else {
    //       hiddenRow.classList.add("d-none");
    //       toggleButton.textContent = "Show All";
    //     }
    //   });
    // });
  });
  // toggleButton.addEventListener("click", toggleEntries);
  var parliament = d3.parliament().width(400).innerRadiusCoef(0.3);
  parliament.enter.fromCenter(true).smallToBig(true);
  parliament.exit.toCenter(true).bigToSmall(true);
  parliament.on("click", function (e) {
    console.log(e);
  });

  var setData = function (d) {
    d3.select("#allianceChart").datum(d).call(parliament);
  };

  d3.json("./lib/european.json", setData);
});
function toggleEntries() {
  const toggleButtons = document.querySelectorAll(".toggleButton");

  toggleButtons.forEach((toggleButton) => {
    toggleButton.addEventListener("click", toggleEntries);
    if (toggleButton.textContent === "Show All") {
      console.log("enter");
      const hiddenRows = document.querySelectorAll("tbody tr.hiding");
      hiddenRows.forEach((row) => {
        // console.log(row.className);
        row.className = "shown";
        // row.style.opacity = 1;
      });
      const hiddenCols = document.querySelectorAll(".hiddenRow");
      hiddenCols.forEach((hiddenRow) => {
        if (hiddenRow.classList.contains("d-none")) {
          hiddenRow.classList.remove("d-none");
          // toggleButton.textContent = "Show Less";
        } else {
          hiddenRow.classList.add("d-none");
          // toggleButton.textContent = "Show All";
        }
      });
      toggleButton.textContent = "Show Less";
    } else if (toggleButton.textContent === "Show Less") {
      // console.log("exit");

      const hiddenRows = document.querySelectorAll("tbody tr.shown");
      hiddenRows.forEach((row) => {
        // console.log(row.className);
        row.className = "hiding";
        // row.style.opacity = 1;
      });
      const hiddenCols = document.querySelectorAll(".hiddenRow");
      hiddenCols.forEach((hiddenRow) => {
        if (hiddenRow.classList.contains("d-none")) {
          hiddenRow.classList.remove("d-none");
          // toggleButton.textContent = "Show Less";
        } else {
          hiddenRow.classList.add("d-none");
          // toggleButton.textContent = "Show All";
        }
      });
      toggleButton.textContent = "Show All";
    }
  });
  const parentDiv = document.querySelector(".carousel-inner");
  // Select all child divs
  const childDivs = document.querySelectorAll(".carousel-item");

  // Find the maximum width among the child divs
  // let maxHeight = 0;
  // childDivs.forEach((child) => {
  //   const childWidth = child.offsetHeight;
  //   if (childWidth > maxHeight) {
  //     maxHeight = childWidth;
  //   }
  // });
  // parentDiv.style.height = `${maxHeight}px`;
}

// function colorProgress() {
//   let activeElement = document.querySelector(".carousel-item.active");
//   // console.log(activeElement.id);
//   // console.log(activeElement.id);
//   if (activeElement.id.startsWith("nda")) {
//     document.getElementById("carouselProgress").style.backgroundColor =
//       "#FF9933";
//   } else if (activeElement.id.startsWith("india")) {
//     document.getElementById("carouselProgress").style.backgroundColor =
//       "#87CEEB";
//   } else if (activeElement.id.startsWith("others")) {
//     document.getElementById("carouselProgress").style.backgroundColor = "grey";
//   }
// }
function populateCarousel() {
  populateTable("nda", "ndaCarousel");
  populateTable("india", "indiaCarousel");
  populateTable("others", "othersCarousel");
}
function populateTable(alliance, carouselId) {
  let carousel = document.getElementById(carouselId);
  let tbody1 = carousel.querySelector("#tbody1");
  let tbody2 = carousel.querySelector("#tbody2");
  tbody1.innerHTML = "";
  tbody2.innerHTML = "";

  // let count = 1;
  let totalCount = 1; // Total count of rows added
  for (const party in alliancePatries[alliance]) {
    const tr = document.createElement("tr");
    tr.className = " ";
    const td1 = document.createElement("td");
    td1.innerHTML = `<img id="stateLogo" src='${stateMaps[party]}'>${party}`;
    const td2 = document.createElement("td");
    td2.textContent = alliancePatries[alliance][party];

    tr.appendChild(td1);
    tr.appendChild(td2);
    if (totalCount <= 10) {
      if (totalCount <= 5) {
        tbody1.appendChild(tr);
        totalCount += 1;
      } else {
        // console.log("enter"); {
        tbody2.appendChild(tr);
        totalCount += 1;
      }
    } else {
      // Hide one row in tbody1 and one row in tbody2 alternatively
      if (totalCount % 2 === 1) {
        // console.log("enter");
        tr.className = "hiding";
        tbody1.appendChild(tr);
        totalCount += 1;
      } else {
        tr.className = "hiding";
        tbody2.appendChild(tr);
        totalCount += 1;
      }
    }
    const toggleButtons = document.querySelectorAll(".toggleButton");
    if (totalCount > 10) {
      toggleButtons.forEach((toggleButton) => {
        toggleButton.classList.remove("hidden");
      });
      // toggleButton.classList.remove("hidden");
    } else {
      toggleButtons.forEach((toggleButton) => {
        toggleButton.classList.add("hidden");
      });
    }
  }

  // Set the height of the parent div to the maximum width
}
function updateBar(values) {
  const total = values.reduce((acc, val) => acc + val, 0);
  const barContainer = document.getElementById("bar-container");
  const bar1 = document.getElementById("bar1");
  const bar2 = document.getElementById("bar2");
  const bar3 = document.getElementById("bar3");
  bar1.style.display = "block";
  bar2.style.display = "block";
  bar3.style.display = "block";

  // const ndaBar = document.getElementById("ndaBar");
  // const indiaBar = document.getElementById("indiaBar");
  // const othersBar = document.getElementById("othersBar");
  // ndaBar.style.width = (values[0] / total) * 100 + "%";
  // indiaBar.style.width = (values[1] / total) * 100 + "%";
  // othersBar.style.width = (values[2] / total) * 100 + "%";

  // const word1 = document.getElementById("word1");
  // const word2 = document.getElementById("word2");
  // const word3 = document.getElementById("word3");
  const barLabel = document.getElementById("bar-label");
  const barText = document.getElementById("bar-text");

  // Create an array of objects to sort by value
  const bars = [
    {
      element: bar1,
      value: values[0],
      colors: `linear-gradient(90deg, #FF9933 0%, #F57A00 100%)`,
      color: "#F47216",
    }, // Blue
    {
      element: bar2,
      value: values[1],
      colors: ` linear-gradient(90deg, #87CEEB 0%, #3AAFDE 100%)`,
      color: "#87CEEB",
    },
    {
      element: bar3,
      value: values[2],
      colors: `linear-gradient(90deg, #D3D3D3 0%, #B8B8B8 100%)`,
      color: "#BFC8D0",
    }, // Red
  ];

  // Sort bars by value in descending order
  bars.sort((a, b) => b.value - a.value);

  // Clear existing bars from the container
  barContainer.innerHTML = "";

  // Append sorted bars to the container
  bars.forEach((bar, index) => {
    const width = (bar.value / total) * 100;
    bar.element.style.width = width + "%";
    bar.element.style.background = bar.colors;
    bar.element.innerText = `${bar.value}`;
    barContainer.appendChild(bar.element);
    if (bar.value === 0) bar.element.style.display = "none";
  });
  // word2.textContent = names[bars[1].color];
  // word2.style.cssText = `left:${(bars[0].value / total) * 100}%;
  // color:${bars[1].color}`;

  // word1.textContent = names[bars[0].color];
  // // console.log(names[bars[0].color]);
  // word1.style.color = bars[0].color;

  // word3.textContent = names[bars[2].color];
  // word3.style.color = bars[2].color;

  // Update the label text
}

// Example usage: updating the bar with specific values
// ------------Search in state table-------------------------------
function handleStateClick(state) {
  console.log("india");
  document.getElementById("breadcrumb-india").style.display = "block";
  let nda = 0,
    india = 0,
    others = 0;
  breadcrumbState.innerHTML = `<a href="#" onclick="resetstatebread2()">${state}`;
  
  breadcrumbConstituency.style.display = "none";
  // state_map(state_codes[state], state);
  // Implement the logic to fetch and display state-wise results
  const constituencyTable = document.getElementById("stateTable");
  // const cells = constituencyTable.getElementsByTagName("th");
  for (const consti in stateDataJson[state]) {
    const leadingCandidate = stateDataJson[state][consti]["candidates"][0];
    4;
    console.log(leadingCandidate);
    if (leadingCandidate.alnce === "NDA") nda++;
    else if (leadingCandidate.alnce === "OTH") others++;
    else india++;
  }
  updateBar([nda, india, others]);

}
function half(event) {
  var map = document.getElementById('india-map').getBoundingClientRect();
  var clickY = event.clientY - map.top;
  var mapHeight = map.height;
  var isAboveHalf = clickY < (mapHeight / 2);
  var div = document.getElementById('containertool2');

  if (isAboveHalf) {
    div.classList.add("above-half");
    div.classList.remove("below-half");
  } else {
    div.classList.add("below-half");
    div.classList.remove("above-half");
  }
}
// console.log(stateDataJson);
function creatediv(state) {
  fetch('election2019.json')
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok ' + response.statusText);
      }
      return response.json();
    })
    .then(stateDataJson => {
      var obj = {};
      var partynames = [];
      var partyseats = [];
      var constituencyData = stateDataJson[0][state];
      for (let const_name in constituencyData) {
        let party_name = stateDataJson[0][state][const_name]["candidates"][0]["prty"];

        if (party_name in obj) {
          obj[party_name] += 1;
        }
        else
          obj[party_name] = 1;
      }
      var sortedPartyWins = Object.entries(obj).sort((a, b) => b[1] - a[1]);
      for (let i = 0; i < sortedPartyWins.length; i++) {
        partynames[i] = sortedPartyWins[i][0];
        partyseats[i] = sortedPartyWins[i][1];
      }
      var maindiv = document.getElementById('containertool2');
      var mainindiamap = document.getElementById('india-map');
      mainindiamap.append(maindiv);
      var htmlcode = `<span class="close" onclick="close_btn()">&times;</span>
                        <h2 class="sthead">${state}</h2>
                        
                        <table class="detailstable">
                           <thead>
                              <tr>
                                 <th class="tbhead">Party</th>
                                 <th id="wlright" class="tbhead">Won / Lead</th>
                              </tr>
                           </thead>`;
      htmlcode += `</thead>`;
      if (partynames) {
        for (let i = 0; i < partynames.length && i < 5; i++) {
          if (partynames[i] !== undefined) {
            htmlcode += `<tr>
                                  <td class="tdData"><img class="party-icon" src="${sym[partynames[i]]}"> ${partynames[i]}</td>
                                  <td class="tdData" id="wlright">${obj[partynames[i]]}</td></tr>`;
          }
        }
      }
      htmlcode += `</tbody>
                           </table><div class="results12">
                            <h3 class="hdiv3">2019 results</h3>
                           <div class="bars">`;

      for (let i = 0; i < partynames.length && i < 3; i++) {
        if (partynames[i] !== undefined && partyseats[i] !== undefined) {
          htmlcode += `<div class="barbox">
                                <span class="barlabel">${partynames[i]}</span>
                              <div class="br${i + 1} inbar" id="id${i}">${partyseats[i]}</div> </div>`;
        }
      }
      htmlcode += `    </div>
                            </div> <div id="viewdetails" onclick="showmap('${state}')">Check Full Results<span id=gt>&gt</span></div>`;

      maindiv.innerHTML = "";
      maindiv.innerHTML += htmlcode;
      maindiv.style.display = "block";
      // Set the width after the HTML has been added to the DOM
      if (partynames.length == 1) {
        setTimeout(() => {
          document.getElementById('id0').style.width = "13.215rem";
        }, 0);
      }
      if (partynames.length == 2) {
        setTimeout(() => {
          document.getElementById('id0').style.width = "7.215rem";
        }, 0);
      }

    });

}
function showmap(state) {
  render_state_carousel(state);
  breadcrumbState.style.display = "inline";
  state_map(state_codes[state], state);
  close_btn();
}
function close_btn() {
  document.getElementById("containertool2").style.display = "none";
}
async function fetchDataAndRenderCards(numRows) {
  console.log("fetchDataAndRenderCards called");
  try {
    const response = await fetch("data.json");
    const data = await response.json();
    console.log(data);

    // Sort the data by votes in descending order and select the top 10
    const topTen = data.sort((a, b) => b.votes - a.votes).slice(0, 10);
    const rootElement = document.getElementById("root");
    rootElement.innerHTML = "";

    // Get the number of rows in the table
    // const tableRows = document.querySelectorAll("#exTab tr").length - 2;
    const tableRows = numRows;
    // alert(tableRows)

    // Calculate the number of card rows needed (1 card row for every 3 table rows)
    const cardRowsNeeded = Math.floor(tableRows / 4);

    for (let i = 0; i < cardRowsNeeded; i++) {
      // Create a new row for every set of cards
      const row = document.createElement("div");
      row.className = "row raw justify-content-between mt-3 mb-3 g-3";
      document.getElementById("root").appendChild(row);

      // Add two cards to each row (or fewer if not enough data)
      for (let j = 0; j < 2; j++) {
        const cardIndex = i * 2 + j;
        if (cardIndex < topTen.length) {
          helper(topTen[cardIndex], row);
        }
      }
    }
  } catch (error) {
    console.error("Error fetching or processing data:", error);
  }
}

function helper(item, row) {
  console.log("Creating card for:", item.name);
  const card = document.createElement("div");
  card.className = "position-relative custom-container";

  // Define default background and arrow colors
  let bgColor;
  let arrColor;
  let nameColor;

  // Adjust colors based on the alliance field
  if (item.alliance === "NDA") {
    bgColor =
      "linear-gradient(to right, rgba(255,246,217,255), rgba(255,229,183,255))";
    arrColor =
      "linear-gradient(to right, rgba(235,141,48,255), rgba(173,99,25,255))";
    nameColor = "#FF9933";
  } else if (item.alliance === "INDA") {
    bgColor =
      "linear-gradient(to right, rgba(217, 242, 252, 255), rgba(190, 234, 241, 255))";
    arrColor =
      "linear-gradient(to right, rgba(134, 205, 234, 255), rgba(101, 163, 188, 255))";
    nameColor = "#19AAED";
  } else if (item.alliance === "OTH") {
    bgColor =
      "linear-gradient(to right, rgba(243,243,243,255), rgba(226,226,226,255))";
    arrColor =
      "linear-gradient(to right, rgba(101,132,124,255), rgba(75,109,101,255))";
    nameColor = "#0c6b4b";
  }

  card.style.background = bgColor;

  const ribbonText = item.lead ? "Leading" : "Trailing";
  const ribbonColor = item.lead
    ? "rgba(34, 177, 76, 255)"
    : "rgba(240, 68, 56, 255)";

  card.innerHTML = `
        <div class="ribbon" style="background-color: ${ribbonColor};">${ribbonText}</div>
        <div class="temp custom-temp">
            <div class="card-body w-100">
                <h3 class="card-title custom-card-title" style="color:${nameColor}">${
    item.name
  }</h3>
                <div class="subheaders cd-flex align-items-center custom-subheaders">
                    <div class="logo"><img class="custom-img" src="${
                      item.logoimg
                    }" alt=""></div>
                    <h6 style="font-weight: bold;">${item.pid}</h6>
                </div>
                <p class="card-text custom-card-text">${
                  item.place
                }</p>
                <p class="card-text custom-card-text-votes" style="color:${nameColor};font-size:12px;font-weight:700">
                    <span style="color:gray;font-weight:500;font-size:12px">Votes : </span>${
                      item.votes
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

  row.appendChild(card);
}

// fetchDataAndRenderCards();

document.getElementById("see-more-btn").addEventListener("click", function () {
  window.location.href = "cardsPage.html";
});
let renderAllianceResults;
document.addEventListener("DOMContentLoaded", function() {
  const table = document.getElementById("mainTable");
  const observer = new ResizeObserver(entries => {
      for (let entry of entries) {
          if (entry.target === table) {
              const numRows = table.getElementsByTagName("tr").length - 1; // Subtract 1 for the header row
              // alert(`Table height changed. Number of rows: ${numRows}`);
              fetchDataAndRenderCards(numRows);
          }
      }
  });

  observer.observe(table);
});


async function fetchDataAndRenderCards(numRows) {
  console.log("fetchDataAndRenderCards called");
  try {
    const response = await fetch("data.json");
    const data = await response.json();
    console.log(data);

    // Sort the data by votes in descending order and select the top 10
    const topTen = data.sort((a, b) => b.votes - a.votes).slice(0, 10);
    const rootElement = document.getElementById("root");
    rootElement.innerHTML = "";

    // Get the number of rows in the table
    // const tableRows = document.querySelectorAll("#exTab tr").length - 2;
    const tableRows = numRows;
    // alert(tableRows)

    // Calculate the number of card rows needed (1 card row for every 3 table rows)
    const cardRowsNeeded = Math.ceil(tableRows / 3);

    for (let i = 0; i < cardRowsNeeded; i++) {
      // Create a new row for every set of cards
      const row = document.createElement("div");
      row.className = "row raw justify-content-between";
      document.getElementById("root").appendChild(row);

      // Add two cards to each row (or fewer if not enough data)
      for (let j = 0; j < 2; j++) {
        const cardIndex = i * 2 + j;
        if (cardIndex < topTen.length) {
          helper(topTen[cardIndex], row);
        }
      }
    }
  } catch (error) {
    console.error("Error fetching or processing data:", error);
  }
}

function helper(item, row) {
  console.log("Creating card for:", item.name);
  const card = document.createElement("div");
  card.className = "position-relative custom-container";

  // Define default background and arrow colors
  let bgColor;
  let arrColor;
  let nameColor;

  // Adjust colors based on the alliance field
  if (item.alliance === "NDA") {
    bgColor =
      "linear-gradient(to right, rgba(255,246,217,255), rgba(255,229,183,255))";
    arrColor =
      "linear-gradient(to right, rgba(235,141,48,255), rgba(173,99,25,255))";
    nameColor = "#FF9933";
  } else if (item.alliance === "INDA") {
    bgColor =
      "linear-gradient(to right, rgba(217, 242, 252, 255), rgba(190, 234, 241, 255))";
    arrColor =
      "linear-gradient(to right, rgba(134, 205, 234, 255), rgba(101, 163, 188, 255))";
    nameColor = "#19AAED";
  } else if (item.alliance === "OTH") {
    bgColor =
      "linear-gradient(to right, rgba(243,243,243,255), rgba(226,226,226,255))";
    arrColor =
      "linear-gradient(to right, rgba(101,132,124,255), rgba(75,109,101,255))";
    nameColor = "#0c6b4b";
  }

  card.style.background = bgColor;

  const ribbonText = item.lead ? "Leading" : "Trailing";
  const ribbonColor = item.lead
    ? "rgba(34, 177, 76, 255)"
    : "rgba(240, 68, 56, 255)";

  card.innerHTML = `
        <div class="ribbon" style="background-color: ${ribbonColor};">${ribbonText}</div>
        <div class="temp custom-temp">
            <div class="card-body w-100">
                <h3 class="card-title custom-card-title" style="color:${nameColor}">${
    item.name
  }</h3>
                <div class="subheaders cd-flex align-items-center custom-subheaders">
                    <div class="logo"><img class="custom-img" src="${
                      item.logoimg
                    }" alt=""></div>
                    <h6 style="font-weight: bold;">${item.pid}</h6>
                </div>
                <p class="card-text custom-card-text">${
                  item.place
                }</p>
                <p class="card-text custom-card-text-votes" style="color:${nameColor};font-size:12px;font-weight:700">
                    <span style="color:gray;font-weight:500;font-size:12px">Votes : </span>${
                      item.votes
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

  row.appendChild(card);
}

// fetchDataAndRenderCards();

document.getElementById("see-more-btn").addEventListener("click", function () {
  window.location.href = "cardsPage.html";
});

document.addEventListener("DOMContentLoaded", function() {
  const table = document.getElementById("constTable");
  const observer = new ResizeObserver(entries => {
      for (let entry of entries) {
          if (entry.target === table) {
              const numRows = table.getElementsByTagName("tr").length - 1; // Subtract 1 for the header row
              // alert(`Table height changed. Number of rows: ${numRows}`);
              fetchDataAndRenderCards(numRows);
          }
      }
  });

  observer.observe(table);
});
function render_state_carousel(state) {
    let swiperContainer = document.getElementById('slider_div');
    let party_img_json, candidates_data;
    document.getElementById("view_all").setAttribute("href","./bigfights_viewall.html" + "?state=" + state);
    function createSlide(const_name, state, partySymbol1, partySymbol2, candidateImg1, candidateImg2, cand_name1, cand_name2, votes1, votes2) {
      let party_path1 = (partySymbol1 in party_img_json) ? party_img_json[partySymbol1] : party_img_json["default"];
      let party_path2 = (partySymbol2 in party_img_json) ? party_img_json[partySymbol2] : party_img_json["default"];
      let state_img = (state.toLowerCase() in party_img_json) ? party_img_json[state.toLowerCase()] : "./imgs2/madhya_pradesh.jpg";
      return `
      <div class="card swiper-slide">
          <span class="state_name">${const_name} <span class="state_party_slot">(${state})</span></span>
          <div class="cand_desc1">
              <span class="img_container">
                  <img class="party_symbol" src=${party_path1} alt="">
                  <img class="cand_img1" src="${candidateImg1}" alt="">
              </span>
              <div class="desc_container">
                  <div class="cand_name1">${cand_name1} <span class="state_party_slot">(${partySymbol1})</span></div>
                  <span class="lead_bar">${votes1}</span>
              </div>
          </div>
          <div class="cand_desc2">
              <span class="img_container">
                  <img class="party_symbol" src="${party_path2}" alt="">
                  <img class="cand_img1" src="${candidateImg2}" alt="">
              </span>
              <div class="desc_container">
                  <div class="cand_name1">${cand_name2} <span class="state_party_slot">(${partySymbol2})</span></div>
                  <span class="trail_bar" >${votes2}</span>
              </div>
          </div>
          <div class="map_container">
              <img class="img_map" src="${state_img}" alt="">
          </div>
          <span class="last_update">Last Updated : 12:10 pm</span>
      </div>
      `;
    }
  
    fetch('./bigfights.json')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok ' + response.statusText);
        }
        return response.json();
      })
      .then(data => {
        party_img_json = data["images_key"];
        candidates_data = data["candidate_details"][state.toLowerCase()];
        
        // Clear previous content and destroy previous Swiper instance if it exists
        if (swiper) {
          swiper.destroy(true, true);
        }
        swiperContainer.innerHTML = "";
        console.log(candidates_data);
        // function toTitleCase(name) {
        //   return name.split(' ').map(word => {
        //     return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
        //   }).join(' ');
        // }
        for(const_name in candidates_data) {
          for(let bigf = 0; bigf < candidates_data[const_name].length; bigf++) {
          const slideMarkup = createSlide(const_name, state, candidates_data[const_name][bigf]["party1"],candidates_data[const_name][bigf]["party2"], "./imgs2/rahul.png",  "./imgs2/smriti_irani.png", candidates_data[const_name][bigf]["name1"],candidates_data[const_name][bigf]["name2"],"100000","50000")
          swiperContainer.insertAdjacentHTML('beforeend', slideMarkup);
          }
        }
        // candidates_data.forEach(data => {
        //   const slideMarkup = createSlide(data["const_name"], data["state"], data["cand_party1"], data["cand_party2"], data["candidateImg1"], data["candidateImg2"], data["cand_name1"], data["cand_name2"], data["votes1"], data["votes2"]);
        //   swiperContainer.insertAdjacentHTML('beforeend', slideMarkup);
        // });
        
        swiper = new Swiper(".slide-content", {
          slidesPerView: 3,
          spaceBetween: 40,
          loop: true,
          centerSlide: true,
          fade: true,
          grabCursor: true,
          pagination: {
            el: ".swiper-pagination",
            clickable: true,
            dynamicBullets: true
          },
          navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          },
          breakpoints: {
            0: {
              slidesPerView: 1,
            },
            600: {
              slidesPerView: 2,
            },
            950: {
              slidesPerView: 3,
            }
          },
          autoplay: {
            delay: 3000, 
            disableOnInteraction: false,  
          },
          speed: 1300,
        });
        
        swiperContainer.addEventListener('mouseenter', function () {
          swiper.autoplay.stop();
        });
        
        swiperContainer.addEventListener('mouseleave', function () {
          swiper.autoplay.start();
        });
      })
      .catch(error => {
        console.error('There has been a problem with your fetch operation:', error);
      });
  }

// var searchBar = document.getElementById("candname_search_bar");
// var states_dropdown = document.getElementById("states-dropdown-list");
var party_img_json = {
  "BJP": "./imgs2/BJP.jpg",
  "INC": "./imgs2/INC.png",
  "DMK": "./imgs2/DMK.webp",
  "YSRCP": "./imgs2/YSRCP.jpeg",
  "AITC": "./imgs2/AITC.png",
  "SHS": "./imgs2/SHS.png",
  "JD(U)": "./imgs2/JD(U).png",
  "BJD": "./imgs2/BJD.png",
  "BSP": "./imgs2/BSP.jpg",
  "TRS": "./imgs2/TRS.jpg",
  "BRS": "./imgs2/BRS.jpg",
  "LJP": "./imgs2/LJP.jpg",
  "NCP": "./imgs2/NCP.webp",
  "SP": "./imgs2/SP.jpg",
  "TDP": "./imgs2/TDP.webp",
  "JKN": "./imgs2/JKN.webp",
  "IUML": "./imgs2/IUML.jpg",
  "CPIM": "./imgs2/CPIM.png",
  "AIMIM": "./imgs2/AIMIM.png",
  "SAD": "./imgs2/SAD.webp",
  "CPI": "./imgs2/CPI.webp",
  "ADAL": "./imgs2/ADAL.webp",
  "AIUDF": "./imgs2/AIUDF.png",
  "JMM": "./imgs2/JMM.png",
  "AJSUP": "./imgs2/AJSUP.jpg",
  "JD(S)": "./imgs2/JD(S).jpg",
  "KEC(M)": "./imgs2/KEC(M).webp",
  "Andaman & Nicobar Islands": "./imgs2/Andaman_and_Nicobar_Islands.png",
  "Andhra Pradesh": "./imgs2/andhra_pradesh.png",
  "Arunachal Pradesh": "./imgs2/arunachal_pradesh.png",
  "Assam": "./imgs2/assam.png",
  "Bihar": "./imgs2/bihar.png",
  "Chandigarh": "./imgs2/chandigarh.png",
  "Chhattisgarh": "./imgs2/chhattisgarh.png",
  "Dadra & Nagar Haveli": "./imgs2/Dadra_and_Nagar_Haveli.png",
  "Daman & Diu": "./imgs2/Daman_and_Diu.jpg",
  "Goa": "./imgs2/goa.png",
  "Gujarat": "./imgs2/gujarat.png",
  "Haryana": "./imgs2/haryana.png",
  "Himachal Pradesh": "./imgs2/himachal_pradesh.png",
  "Jammu & Kashmir": "./imgs2/jammu_and_kashmir.png",
  "Jharkhand": "./imgs2/jharkhand.png",
  "Karnataka": "./imgs2/karnataka.png",
  "Kerala": "./imgs2/kerala.png",
  "Lakshadweep": "./imgs2/lakshadweep.png",
  "Madhya Pradesh": "./imgs2/madhya_pradesh.png",
  "Maharashtra": "./imgs2/maharashtra.png",
  "Manipur": "./imgs2/manipur.png",
  "Meghalaya": "./imgs2/meghalaya.png",
  "Mizoram": "./imgs2/mizoram.png",
  "Nagaland": "./imgs2/nagaland.png",
  "NCT of Delhi": "./imgs2/nct_of_delhi.png",
  "Odisha": "./imgs2/odisha.png",
  "Puducherry": "./imgs2/puducherry.png",
  "Punjab": "./imgs2/punjab.png",
  "Rajasthan": "./imgs2/rajasthan.png",
  "Sikkim": "./imgs2/sikkim.png",
  "Tamil Nadu": "./imgs2/tamil_nadu.png",
  "Telangana": "./imgs2/telangana.png",
  "Tripura": "./imgs2/tripura.png",
  "Uttar Pradesh": "./imgs2/uttar_pradesh.png",
  "Uttarakhand": "./imgs2/uttarakhand.png",
  "West Bengal": "./imgs2/west_bengal.png",
  "default": "./imgs2/default.jpg"
}
var data = [
  {
    "state": "Uttar Pradesh",
    "const_name": "Amethi",
    "cand_party1": "INC",
    "cand_party2": "BJP",
    "cand_name1": "Rahul Gandhi",
    "cand_name2": "Smriti Irani",
    "votes1": "40238",
    "votes2": "4028",
    "partySymbol1": "./imgs2/INC.png",
    "partySymbol2": "./imgs2/BJP.jpg",
    "candidateImg1": "./imgs2/rahul.png",
    "candidateImg2": "./imgs2/smriti_irani.png",
    "mapImg": "./imgs2/Uttar_Pradesh.png"
  },
  {
    "cand_name1": "SUNETRA AJITDADA PAWAR",
    "cand_party1": "NCP",
    "votes1": "242209",
    "cand_name2": "SUPRIYA SULE",
    "cand_party2": "NCP(SP)",
    "votes2": "240110",
    "const_name": "Baramati",
    "state": "Maharashtra",
    "partySymbol1": "./imgs2/INC.png",
    "partySymbol2": "./imgs2/BJP.jpg",
    "candidateImg1": "./imgs2/rahul.png",
    "candidateImg2": "./imgs2/smriti_irani.png",
    "mapImg": "./imgs2/Uttar_Pradesh.png"
  },
  {
    "cand_name1": "Manoj Tiwari",
    "cand_party1": "BJP",
    "votes1": "645665",
    "cand_name2": "Kanhaiya Kumar",
    "cand_party2": "INC",
    "votes2": "145987",
    "const_name": "North East Delhi",
    "state": "NCT of Delhi",
    "partySymbol1": "./imgs2/INC.png",
    "partySymbol2": "./imgs2/BJP.jpg",
    "candidateImg1": "./imgs2/rahul.png",
    "candidateImg2": "./imgs2/smriti_irani.png",
    "mapImg": "./imgs2/Uttar_Pradesh.png"
  },
  {
    "cand_name1": "Sambit Patra",
    "cand_party1": "BJP",
    "votes1": "459877",
    "cand_name2": "Arup Patnaik",
    "cand_party2": "BJD",
    "votes2": "456650",
    "const_name": "Puri",
    "state": "Odisha",
    "partySymbol1": "./imgs2/INC.png",
    "partySymbol2": "./imgs2/BJP.jpg",
    "candidateImg1": "./imgs2/rahul.png",
    "candidateImg2": "./imgs2/smriti_irani.png",
    "mapImg": "./imgs2/Uttar_Pradesh.png"
  },
  {
    "cand_name1": "Smriti Irani",
    "cand_party1": "BJP",
    "votes1": "404119",
    "cand_name2": "Kishori Lal Sharma",
    "cand_party2": "INC",
    "votes2": "401525",
    "const_name": "Amethi",
    "state": "Uttar Pradesh",
    "partySymbol1": "./imgs2/INC.png",
    "partySymbol2": "./imgs2/BJP.jpg",
    "candidateImg1": "./imgs2/rahul.png",
    "candidateImg2": "./imgs2/smriti_irani.png",
    "mapImg": "./imgs2/Uttar_Pradesh.png"
  },
  {
    "cand_name1": "Bansuri Swaraj",
    "cand_party1": "BJP",
    "votes1": "522879",
    "cand_name2": "Somnath Bharti",
    "cand_party2": "AAP",
    "votes2": "329309",
    "const_name": "New Delhi",
    "state": "NCT of Delhi",
    "partySymbol1": "./imgs2/INC.png",
    "partySymbol2": "./imgs2/BJP.jpg",
    "candidateImg1": "./imgs2/rahul.png",
    "candidateImg2": "./imgs2/smriti_irani.png",
    "mapImg": "./imgs2/Uttar_Pradesh.png"
  },
  {
    "cand_name1": "Rohini Acharya",
    "cand_party1": "RJD",
    "votes1": "480198",
    "cand_name2": "Rajiv Pratap Rudy",
    "cand_party2": "BJP",
    "votes2": "35678",
    "const_name": "Saran",
    "state": "Bihar",
    "partySymbol1": "./imgs2/INC.png",
    "partySymbol2": "./imgs2/BJP.jpg",
    "candidateImg1": "./imgs2/rahul.png",
    "candidateImg2": "./imgs2/smriti_irani.png",
    "mapImg": "./imgs2/Uttar_Pradesh.png"
  }
  // Add more slide data objects as needed
];
var enable_search = document.getElementById("enable_search");
var search_but = document.getElementById("search_button");
search_but.addEventListener("click", () => {
  (enable_search.style.display == "block") ? 
  enable_search.style.display = "none" : enable_search.style.display = "block";
});
var main_div = document.getElementById("more-cards-root");
function represent_All() {
  data.forEach((obj) => {
    let card_div = document.createElement("div");
    card_div.setAttribute("class", "card");
    let party_path1 = (obj["cand_party1"] in party_img_json) ? party_img_json[obj["cand_party1"]] : party_img_json["default"];
    let party_path2 = (obj["cand_party2"] in party_img_json) ? party_img_json[obj["cand_party2"]] : party_img_json["default"];
    let state_img = (obj["state"] in party_img_json) ? party_img_json[obj["state"]] : "./imgs2/Madhya_Pradesh.jpg";
    let bar_length = (parseInt(obj["votes2"]) / (parseInt(obj["votes1"]) + parseInt(obj["votes2"]))) * 100;
    let html_data = `<span class="state_name" data-state="${obj["state"]}" data-const="${obj["const_name"]}">${obj["const_name"]} <span class="state_party_slot">(${obj["state"]})</span></span>
        <div class="cand_desc1">
            <span class="img_container">
                <img class="party_symbol" src="${party_path1}" alt="">
                <img class="cand_img1" src="./imgs2/rahul.png" alt="">
            </span>
            <div class="desc_container">
                <div class="cand_name1 render_name1" data-candname="${obj["cand_name1"]}">${obj["cand_name1"]} <span class="state_party_slot">(${obj["cand_party1"]})</span></div>
                <span class="bar1">${obj["votes1"]}</span>
            </div>
        </div>
        <div class="cand_desc2">
            <span class="img_container">
                <img class="party_symbol" src=${party_path2} alt="">
                <img class="cand_img1" src="./imgs2/smriti_irani.png" alt="">
            </span>
            <div class="desc_container">
                <div class="cand_name1 render_name2" data-candname="${obj["cand_name2"]}">${obj["cand_name2"]} <span class="state_party_slot">(${obj["cand_party2"]})</span></div>
                <span class="bar2" style="width:${bar_length + 10}%;">${obj["votes2"]}</span>
            </div>
        </div>
        <div class="map_container">
            <img class="img_map" src=${state_img} alt="">
        </div>
        <span class="last_update">Last Updated : 12:10 pm</span>`;
    card_div.innerHTML = html_data;
    main_div.appendChild(card_div);
  });
}
represent_All();
// searchBar.addEventListener("input",performSearch);
// function performSearch() {
//   const searchInput = searchBar.value.toLowerCase();
//   const cards = document.querySelectorAll('.card');
//   const dropdown_input = states_dropdown.value.toLowerCase();
//   console.log(dropdown_input);
//   cards.forEach(card => {
//     const name1 = card.querySelector('.render_name1').dataset.candname.toLowerCase();
//     const name2 = card.querySelector('.render_name2').dataset.candname.toLowerCase();
//     // const const_name = card.querySelector('.state_name').dataset.const.toLowerCase();
//     const state_name = card.querySelector('.state_name').dataset.state.toLowerCase();
//     if ((searchInput == "" || name1.includes(searchInput) || name2.includes(searchInput)) && (dropdown_input == "" || state_name.includes(dropdown_input)) ) {
//       card.style.display = '';
//     } else {
//       card.style.display = 'none';
//     }
//     // console.log(state_name + " " + dropdown_input + " " + state_name.includes(dropdown_input))
//   });
// }
// searchBar.addEventListener("keyup", performSearch);
// states_dropdown.addEventListener("change", performSearch);
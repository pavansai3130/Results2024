var searchBar1 = document.getElementById("candname_search_bar1");
var searchBar2 = document.getElementById("candname_search_bar2");

var temp_data = [];

var temp_const = [];

var temp_states = [];
var enable_search = document.getElementById("enable_search");
var search_but = document.getElementById("search_button");
var selectedIndex = -1;
var back_bottom = document.getElementById("back_bottom");

search_but.addEventListener("click", () => {
  enable_search.style.display == "block"
    ? (enable_search.style.display = "none")
    : (enable_search.style.display = "block");
});
var main_div = document.getElementById("more-cards-root");
function represent_All() {
  let state_tag = document.getElementById("state_tag");
  state_tag.style.display = "none";
  main_div.innerHTML = "";
  fetch("./data/bigfights.json")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok " + response.statusText);
      }
      return response.json();
    })
    .then((data) => {
      temp_const = [];
      temp_data = [];
      temp_states = [];
      bigfights_data = data["candidate_details"];
      party_img_json = data["images_key"];
      for (let state in bigfights_data) {
        temp_states.push(state);
        for (let const_name in bigfights_data[state]) {
          temp_const.push(const_name);
          for (
            let bigf = 0;
            bigf < bigfights_data[state][const_name].length;
            bigf++
          ) {
            obj = bigfights_data[state][const_name][bigf];
            let card_div = document.createElement("div");
            card_div.setAttribute("class", "card");
            let party_path1 =
              obj["party1"] in party_img_json
                ? party_img_json[obj["party1"]]
                : party_img_json["default"];
            let party_path2 =
              obj["party2"] in party_img_json
                ? party_img_json[obj["party2"]]
                : party_img_json["default"];
            let state_img =
              state in party_img_json
                ? party_img_json[state]
                : "./images/imgs2/madhya_pradesh.png";
            console.log(state);
            let bar_length =
              (parseInt(50000) / (parseInt(100000) + parseInt(50000))) * 100;
            temp_data.push(obj["name1"]);
            temp_data.push(obj["name2"]);
            let html_data = `<span class="state_name" data-state="${state}" data-const="${const_name}">${toTitleCase(const_name)} <span class="state_party_slot">(${toTitleCase(state)})</span></span>
      <div class="cand_desc1">
          <span class="img_container">
              <img class="party_symbol" src="${party_path1}" alt="">
              <img class="cand_img1" src="./images/imgs2/rahul.png" alt="">
          </span>
          <div class="desc_container">
              <div class="cand_name1 render_name1" data-candname="${
                obj["name1"]
              }">${toTitleCase(obj["name1"])} <span class="state_party_slot">(${
              obj["party1"]
            })</span></div>
              <span class="lead_bar">${100000}</span>
          </div>
      </div>
      <div class="cand_desc2">
          <span class="img_container">
              <img class="party_symbol" src=${party_path2} alt="">
              <img class="cand_img1" src="./images/imgs2/smriti_irani.png" alt="">
          </span>
          <div class="desc_container">
              <div class="cand_name1 render_name2" data-candname="${
                obj["name2"]
              }">${toTitleCase(obj["name2"])} <span class="state_party_slot">(${
              obj["party2"]
            })</span></div>
              <span class="trail_bar" style="width:${
                bar_length + 10
              }%;">${50000}</span>
          </div>
      </div>
      <div class="map_container">
          <img class="img_map" src=${state_img} alt="">
      </div>
      <span class="last_update">Last Updated : 12:10 pm</span>`;
            card_div.innerHTML = html_data;
            main_div.appendChild(card_div);
          }
        }
      }
    });
}
var currentpage = "-";
function getParameterByName(name, url = window.location.href) {
  name = name.replace(/[\[\]]/g, "\\$&");
  var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
    results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return "";
  return decodeURIComponent(results[2].replace(/\+/g, " "));
}
function represent_state(state) {
  // let back_top = document.getElementById("back_top");
  // let state_cancel = document.createElement("div");
  // back_top.insertAdjacentHTML('afterend', state_cancel);
  // let button = document.createElement("button");
  // state_cancel.appendChild(button);
  main_div.innerHTML = "";
  let state_tag = document.getElementById("state_tag");
  state_tag.style.display = "block";
  let state_tag_name = document.getElementById("state_tag_name");
  state_tag_name.innerText = state;
  document
    .getElementById("state_cancel_icon")
    .addEventListener("click", function () {
      currentpage = "all";
      represent_All();
    });
  fetch("./data/bigfights.json")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok " + response.statusText);
      }
      return response.json();
    })
    .then((data) => {
      temp_const = [];
      temp_data = [];
      temp_states = [];
      party_img_json = data["images_key"];
      candidates_data = data["candidate_details"][state.toLowerCase()];
      temp_states.push(state);
      for (let const_name in candidates_data) {
        let arr_obj = candidates_data[const_name];
        temp_const.push(const_name);
        for (let bigf = 0; bigf < arr_obj.length; bigf++) {
          obj = candidates_data[const_name][bigf];
          let card_div = document.createElement("div");
          card_div.setAttribute("class", "card");
          let party_path1 =
            obj["party1"] in party_img_json
              ? party_img_json[obj["party1"]]
              : party_img_json["default"];
          let party_path2 =
            obj["party2"] in party_img_json
              ? party_img_json[obj["party2"]]
              : party_img_json["default"];
          let state_img =
            state.toLowerCase() in party_img_json
              ? party_img_json[state.toLowerCase()]
              : "./images/imgs2/madhya_pradesh.png";
          let bar_length =
            (parseInt(50000) / (parseInt(obj[100000]) + parseInt(obj[50000]))) *
            100;
          temp_data.push(obj["name1"]);
          temp_data.push(obj["name2"]);
          let html_data = `<span class="state_name" data-state="${state}" data-const="${const_name}">${toTitleCase(const_name)} <span class="state_party_slot">(${toTitleCase(state)})</span></span>
          <div class="cand_desc1">
              <span class="img_container">
                  <img class="party_symbol" src="${party_path1}" alt="">
                  <img class="cand_img1" src="./images/imgs2/rahul.png" alt="">
              </span>
              <div class="desc_container">
                  <div class="cand_name1 render_name1" data-candname="${
                    obj["name1"]
                  }">${toTitleCase(obj["name1"])} <span class="state_party_slot">(${
            toTitleCase(obj["party1"])
          })</span></div>
                  <span class="lead_bar">${100000}</span>
              </div>
          </div>
          <div class="cand_desc2">
              <span class="img_container">
                  <img class="party_symbol" src=${party_path2} alt="">
                  <img class="cand_img1" src="./images/imgs2/smriti_irani.png" alt="">
              </span>
              <div class="desc_container">
                  <div class="cand_name1 render_name2" data-candname="${
                    obj["name2"]
                  }">${toTitleCase(obj["name2"])} <span class="state_party_slot">(${
            obj["party2"]
          })</span></div>
                  <span class="trail_bar" style="width:${
                    bar_length + 10
                  }%;">${50000}</span>
              </div>
          </div>
          <div class="map_container">
              <img class="img_map" src=${state_img} alt="">
          </div>
          <span class="last_update">Last Updated : 12:10 pm</span>`;
          card_div.innerHTML = html_data;
          main_div.appendChild(card_div);
        }
      }
    });
}
if (!getParameterByName("state") || getParameterByName("state") === "all")
  represent_All();
else represent_state(getParameterByName("state"));
searchBar1.addEventListener("keyup", function () {
  recommendations(searchBar1, "search_unorderlist1");
});
searchBar2.addEventListener("keyup", function () {
  recommendations(searchBar2, "search_unorderlist2");
});

function recommendations(searchBar, id_name) {
  var unorderList = document.getElementById(id_name);
  clearList(id_name);
  let input = searchBar.value.toLowerCase();
  if (input == "") return;
  var ct = 0;
  for (let full_name of temp_states) {
    if (ct > 2) break;
    if (full_name.toLowerCase().startsWith(input)) {
      if (ct === 0) {
        var list = document.createElement("li");
        list.classList.add("search_list_heading");
        list.classList.add("start_list");
        list.innerHTML = "States";
        unorderList.appendChild(list);
      }
      list = document.createElement("li");
      list.classList.add("search_list");
      list.classList.add("index_class");
      list.innerHTML = full_name;
      list.addEventListener("click", function () {
        searchBar.value = this.innerText;
        search_fun(searchBar, id_name);
      });
      unorderList.appendChild(list);
      ct++;
      continue;
    }
    // console.log(input +' '+ name+ name.startsWith(input));
    // console.log(input);
    for (let name of full_name.toLowerCase().split(" ")) {
      if (ct > 2) break;
      if (name.startsWith(input) && input != "") {
        if (ct === 0) {
          var list = document.createElement("li");
          list.classList.add("search_list_heading");
          list.classList.add("start_list");
          list.innerHTML = "States";
          unorderList.appendChild(list);
        }
        list = document.createElement("li");
        list.classList.add("search_list");
        list.classList.add("index_class");
        list.innerHTML = full_name;
        list.addEventListener("click", function () {
          searchBar.value = this.innerText;
          search_fun(searchBar, id_name);
        });
        unorderList.appendChild(list);
        ct++;
        break;
      }
    }
  }
  if (ct > 0) list.classList.add("search_list_last");
  var ct = 0;
  for (let full_name of temp_const) {
    // console.log(input +' '+ name+ name.startsWith(input));
    // console.log(input);
    if (ct > 2) break;
    if (full_name.toLowerCase().startsWith(input)) {
      if (ct === 0) {
        var list = document.createElement("li");
        list.classList.add("search_list_heading");
        list.innerHTML = "Constituencies";
        unorderList.appendChild(list);
      }
      list = document.createElement("li");
      list.classList.add("search_list");
      list.classList.add("index_class");
      list.innerHTML = full_name;
      list.addEventListener("click", function () {
        searchBar.value = this.innerText;
        search_fun(searchBar, id_name);
      });
      unorderList.appendChild(list);
      ct++;
      continue;
    }
    for (let name of full_name.toLowerCase().split(" ")) {
      if (ct > 2) break;
      if (name.startsWith(input) && input != "") {
        if (ct === 0) {
          var list = document.createElement("li");
          list.classList.add("search_list_heading");
          list.innerHTML = "Constituencies";
          unorderList.appendChild(list);
        }
        list = document.createElement("li");
        list.classList.add("search_list");
        list.classList.add("index_class");
        list.innerHTML = full_name;
        list.addEventListener("click", function () {
          searchBar.value = this.innerText;
          search_fun(searchBar, id_name);
        });
        unorderList.appendChild(list);
        ct++;
        break;
      }
    }
  }
  if (ct > 0) list.classList.add("search_list_last");
  var ct = 0;
  for (let full_name of temp_data) {
    // console.log(input +' '+ name+ name.startsWith(input));
    // console.log(input);
    if (ct > 2) break;
    if (full_name.toLowerCase().startsWith(input)) {
      if (ct === 0) {
        list = document.createElement("li");
        list.classList.add("search_list_heading");
        list.innerHTML = "Candidates";
        unorderList.appendChild(list);
      }
      list = document.createElement("li");
      list.classList.add("search_list");
      list.classList.add("index_class");
      list.innerHTML = full_name;
      list.addEventListener("click", function () {
        searchBar.value = this.innerText;
        search_fun(searchBar, id_name);
      });
      unorderList.appendChild(list);
      ct++;
      continue;
    }
    for (let name of full_name.toLowerCase().split(" ")) {
      if (ct > 2) break;
      if (name.startsWith(input) && input != "") {
        if (ct === 0) {
          list = document.createElement("li");
          list.classList.add("search_list_heading");
          list.innerHTML = "Candidates";
          unorderList.appendChild(list);
        }
        list = document.createElement("li");
        list.classList.add("search_list");
        list.classList.add("index_class");
        list.innerHTML = full_name;
        list.addEventListener("click", function () {
          searchBar.value = this.innerText;
          search_fun(searchBar, id_name);
        });
        unorderList.appendChild(list);
        ct++;
        break;
      }
    }
  }
  if (ct > 0) {
    list.classList.add("search_list_last");
    list.classList.add("end_list");
  }
  // if (ct == 0) {
  //   let list = document.createElement("li");
  //   list.classList.add("search_list");
  //   list.innerHTML = "No results found..";
  //   unorderList.appendChild(list);
  // }
  unorderList.style.display = "";
  back_bottom.classList.add("blur_class");
}
function clearList(id_name) {
  let lists = document.getElementById(id_name);
  lists.innerHTML = "";
}

function search_fun(searchBar, id_name) {
  back_bottom.classList.remove("blur_class");
  const unorderList = document.getElementById(id_name);
  unorderList.style.display = "none";
  const searchInput = searchBar.value.toLowerCase();
  const cards = document.querySelectorAll(".card");
  cards.forEach((card) => {
    const name1 = card
      .querySelector(".render_name1")
      .dataset.candname.toLowerCase();
    const name2 = card
      .querySelector(".render_name2")
      .dataset.candname.toLowerCase();
    const const_name = card
      .querySelector(".state_name")
      .dataset.const.toLowerCase();
    const state_name = card
      .querySelector(".state_name")
      .dataset.state.toLowerCase();
    let flag = true;
    if (
      searchInput != "" &&
      (name1.toLowerCase().startsWith(searchInput) ||
        const_name.toLowerCase().startsWith(searchInput) ||
        state_name.toLowerCase().startsWith(searchInput))
    ) {
      card.style.display = "";
      flag = false;
    } else if (
      name2.toLowerCase().startsWith(searchInput) &&
      searchInput != ""
    ) {
      card.style.display = "";
      flag = false;
    }
    if (flag) {
      card.style.display = "none";
    }
  });
}
searchBar1.addEventListener("input", function () {
  if (searchBar1.value === "") {
    main_div.innerHTML = "";
    back_bottom.classList.remove("blur_class");
    if (!getParameterByName("state") || getParameterByName("state") === "all" || currentpage == "all")
      represent_All();
    else represent_state(getParameterByName("state"));
    return;
  }
});
searchBar2.addEventListener("input", function () {
  if (searchBar2.value === "") {
    main_div.innerHTML = "";
    back_bottom.classList.remove("blur_class");
    if (!getParameterByName("state") || getParameterByName("state") === "all" || currentpage == "all")
      represent_All();
    else represent_state(getParameterByName("state"));
    return;
  }
});
function toTitleCase(name) {
  return name.split(' ').map(word => {
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  }).join(' ');
}

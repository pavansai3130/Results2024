let currentPage = 1;
let currentPageCandidates = 1;
const rowsPerPage = 10;
let breadcrumbConstituency;
let breadcrumbState;
let state_button_pressed = 1;
const constCodes = {
  "Andaman and Nicobar Islands": {
    "andaman and nicobar islands": 3501,
  },
  "Andhra Pradesh": {
    amalapuram: 2824,
    anakapalli: 2822,
    anantapur: 2836,
    araku: 2818,
    bapatla: 2832,
    chittoor: 2842,
    eluru: 2827,
    guntur: 2830,
    hindupur: 2837,
    kadapa: 2838,
    kakinada: 2823,
    kurnool: 2835,
    machilipatnam: 2828,
    nandyal: 2834,
    narasaraopet: 2831,
    narsapuram: 2826,
    nellore: 2839,
    ongole: 2833,
    rajahmundry: 2825,
    rajampet: 2841,
    srikakulam: 2819,
    tirupati: 2840,
    vijayawada: 2829,
    visakhapatnam: 2821,
    vizianagaram: 2820,
  },
  "Arunachal Pradesh": {
    "arunachal east": 1202,
    "arunachal west": 1201,
  },
  Assam: {
    barpeta: 1806,
    "darrang - udalguri": 1808,
    dhubri: 1804,
    dibrugarh: 1813,
    diphu: 1803,
    guwahati: 1807,
    jorhat: 1812,
    karimganj: 1801,
    kaziranga: 1811,
    kokrajhar: 1805,
    lakhimpur: 1814,
    nowgong: 1810,
    silchar: 1802,
    sonitpur: 1809,
  },
  Bihar: {
    araria: 1009,
    arrah: 1032,
    aurangabad: 1037,
    banka: 1027,
    begusarai: 1024,
    bhagalpur: 1026,
    buxar: 1033,
    darbhanga: 1014,
    gaya: 1038,
    gopalganj: 1017,
    hajipur: 1021,
    jahanabad: 1036,
    jamui: 1040,
    jhanjharpur: 1007,
    karakat: 1035,
    katihar: 1011,
    khagaria: 1025,
    kishanganj: 1010,
    madhepura: 1013,
    madhubani: 1006,
    maharajganj: 1019,
    munger: 1028,
    muzaffarpur: 1015,
    nalanda: 1029,
    nawada: 1039,
    "paschim champaran": 1002,
    pataliputra: 1031,
    "patna sahib": 1030,
    purnia: 1012,
    "purvi champaran": 1003,
    samastipur: 1023,
    saran: 1020,
    sasaram: 1034,
    sheohar: 1004,
    sitamarhi: 1005,
    siwan: 1018,
    supaul: 1008,
    ujiarpur: 1022,
    vaishali: 1016,
    "valmiki nagar": 1001,
  },
  Chandigarh: {
    chandigarh: 401,
  },
  Chhattisgarh: {
    bastar: 2210,
    bilaspur: 2205,
    durg: 2207,
    "janjgir-champa": 2203,
    kanker: 2211,
    korba: 2204,
    mahasamund: 2209,
    raigarh: 2202,
    raipur: 2208,
    rajnandgaon: 2206,
    surguja: 2201,
  },
  "Dadra and Nagar Haveli": {
    "dadra and nagar haveli": 2601,
    "daman and diu": 2501,
  },
  Goa: {
    "north goa": 3001,
    "south goa": 3002,
  },
  Gujarat: {
    "ahmedabad east": 2407,
    "ahmedabad west": 2408,
    amreli: 2414,
    anand: 2416,
    banaskantha: 2402,
    bardoli: 2423,
    bharuch: 2422,
    bhavnagar: 2415,
    "chhota udaipur": 2421,
    dahod: 2419,
    gandhinagar: 2406,
    jamnagar: 2412,
    junagadh: 2413,
    kachchh: 2401,
    kheda: 2417,
    mahesana: 2404,
    navsari: 2425,
    panchmahal: 2418,
    patan: 2403,
    porbandar: 2411,
    rajkot: 2410,
    sabarkantha: 2405,
    surat: 2424,
    surendranagar: 2409,
    vadodara: 2420,
    valsad: 2426,
  },
  Haryana: {
    ambala: 601,
    "bhiwani-mahendragarh": 608,
    faridabad: 610,
    gurgaon: 609,
    hisar: 604,
    karnal: 605,
    kurukshetra: 602,
    rohtak: 607,
    sirsa: 603,
    sonipat: 606,
  },
  "Himachal Pradesh": {
    hamirpur: 203,
    kangra: 201,
    mandi: 202,
    shimla: 204,
  },
  "Jammu and Kashmir": {
    anantnag: 103,
    baramulla: 101,
    jammu: 106,
    srinagar: 102,
    udhampur: 105,
  },
  Jharkhand: {
    chatra: 2004,
    dhanbad: 2007,
    dumka: 2002,
    giridih: 2006,
    godda: 2003,
    hazaribagh: 2014,
    jamshedpur: 2009,
    khunti: 2011,
    kodarma: 2005,
    lohardaga: 2012,
    palamu: 2013,
    rajmahal: 2001,
    ranchi: 2008,
    singhbhum: 2010,
  },
  Karnataka: {
    bagalkot: 2903,
    "bangalore central": 2925,
    "bangalore north": 2924,
    "bangalore rural": 2923,
    "bangalore south": 2926,
    belagavi: 2902,
    bellary: 2909,
    bidar: 2907,
    bijapur: 2904,
    chamarajanagar: 2922,
    chikballapur: 2927,
    chikodi: 2901,
    chitradurga: 2918,
    "dakshina kannada": 2917,
    davangere: 2913,
    dharwad: 2911,
    gulbarga: 2905,
    haasan: 2916,
    haveri: 2910,
    kolar: 2928,
    koppal: 2908,
    mandya: 2920,
    mysore: 2921,
    raichur: 2906,
    shimoga: 2914,
    tumkur: 2919,
    "udupi chikmagalur": 2915,
    "uttara kannada": 2912,
  },
  Kerala: {
    alappuzha: 3215,
    alathur: 3209,
    attingal: 3219,
    chalakudy: 3211,
    ernakulam: 3212,
    idukki: 3213,
    kannur: 3202,
    kasaragod: 3201,
    kollam: 3218,
    kottayam: 3214,
    kozhikode: 3205,
    malappuram: 3206,
    mavelikara: 3216,
    palakkad: 3208,
    pathanamthitta: 3217,
    ponnani: 3207,
    thiruvananthapuram: 3220,
    thrissur: 3210,
    vadakara: 3203,
    wayanad: 3204,
  },
  Ladakh: {
    ladakh: 104,
  },
  Lakshadweep: {
    lakshadweep: 3101,
  },
  "Madhya Pradesh": {
    balaghat: 2315,
    betul: 2329,
    bhind: 2302,
    bhopal: 2319,
    chhindwara: 2316,
    damoh: 2307,
    dewas: 2321,
    dhar: 2325,
    guna: 2304,
    gwalior: 2303,
    hoshangabad: 2317,
    indore: 2326,
    jabalpur: 2313,
    khajuraho: 2308,
    khandwa: 2328,
    khargone: 2327,
    mandla: 2314,
    mandsour: 2323,
    morena: 2301,
    rajgarh: 2320,
    ratlam: 2324,
    rewa: 2310,
    sagar: 2305,
    satna: 2309,
    shahdol: 2312,
    sidhi: 2311,
    tikamgarh: 2306,
    ujjain: 2322,
    vidisha: 2318,
  },
  Maharashtra: {
    ahmednagar: 2737,
    akola: 2706,
    amravati: 2707,
    aurangabad: 2719,
    baramati: 2735,
    beed: 2739,
    "bhandara gondiya": 2711,
    bhiwandi: 2723,
    buldhana: 2705,
    chandrapur: 2713,
    dhule: 2702,
    dindori: 2720,
    "gadchiroli-chimur": 2712,
    hatkanangle: 2748,
    hingoli: 2715,
    jalgaon: 2703,
    jalna: 2718,
    kalyan: 2724,
    kolhapur: 2747,
    latur: 2741,
    madha: 2743,
    maval: 2733,
    "mumbai north": 2726,
    "mumbai north central": 2729,
    "mumbai north east": 2728,
    "mumbai north west": 2727,
    "mumbai south": 2731,
    "mumbai south central": 2730,
    nagpur: 2710,
    nanded: 2716,
    nandurbar: 2701,
    nashik: 2721,
    osmanabad: 2740,
    palghar: 2722,
    parbhani: 2717,
    pune: 2734,
    raigad: 2732,
    ramtek: 2709,
    "ratnagiri - sindhudurg": 2746,
    raver: 2704,
    sangli: 2744,
    satara: 2745,
    shirdi: 2738,
    shirur: 2736,
    solapur: 2742,
    thane: 2725,
    wardha: 2708,
    "yavatmal-washim": 2714,
  },
  Manipur: {
    "inner manipur": 1401,
    "outer manipur": 1402,
  },
  Meghalaya: {
    shillong: 1701,
    tura: 1702,
  },
  Mizoram: {
    mizoram: 1501,
  },
  Nagaland: {
    nagaland: 1301,
  },
  "NCT OF Delhi": {
    "chandni chowk": 701,
    "east delhi": 703,
    "new delhi": 704,
    "north east delhi": 702,
    "north west delhi": 705,
    "south delhi": 707,
    "west delhi": 706,
  },
  Odisha: {
    aska: 2119,
    balasore: 2106,
    bargarh: 2101,
    berhampur: 2120,
    bhadrak: 2107,
    bhubaneswar: 2118,
    bolangir: 2110,
    cuttack: 2114,
    dhenkanal: 2109,
    jagatsinghpur: 2116,
    jajpur: 2108,
    kalahandi: 2111,
    kandhamal: 2113,
    kendrapara: 2115,
    keonjhar: 2104,
    koraput: 2121,
    mayurbhanj: 2105,
    nabarangpur: 2112,
    puri: 2117,
    sambalpur: 2103,
    sundargarh: 2102,
  },
  Puducherry: {
    puducherry: 3401,
  },
  Punjab: {
    amritsar: 302,
    "anandpur sahib": 306,
    bathinda: 311,
    faridkot: 309,
    "fatehgarh sahib": 308,
    firozpur: 310,
    gurdaspur: 301,
    hoshiarpur: 305,
    jalandhar: 304,
    "khadoor sahib": 303,
    ludhiana: 307,
    patiala: 313,
    sangrur: 312,
  },
  Rajasthan: {
    ajmer: 813,
    alwar: 808,
    banswara: 820,
    barmer: 817,
    bharatpur: 809,
    bhilwara: 823,
    bikaner: 802,
    chittorgarh: 821,
    churu: 803,
    dausa: 811,
    ganganagar: 801,
    jaipur: 807,
    "jaipur rural": 806,
    jalore: 818,
    "jhalawar-baran": 825,
    jhunjhunu: 804,
    jodhpur: 816,
    "karauli-dholpur": 810,
    kota: 824,
    nagaur: 814,
    pali: 815,
    rajsamand: 822,
    sikar: 805,
    "tonk-sawai madhopur": 812,
    udaipur: 819,
  },
  Sikkim: {
    sikkim: 1101,
  },
  "Tamil Nadu": {
    arakkonam: 3307,
    arani: 3312,
    "chennai central": 3304,
    "chennai north": 3302,
    "chennai south": 3303,
    chidambaram: 3327,
    coimbatore: 3320,
    cuddalore: 3326,
    dharmapuri: 3310,
    dindigul: 3322,
    erode: 3317,
    kallakurichi: 3314,
    kancheepuram: 3306,
    kanniyakumari: 3339,
    karur: 3323,
    krishnagiri: 3309,
    madurai: 3332,
    mayiladuthurai: 3328,
    nagapattinam: 3329,
    namakkal: 3316,
    nilgiris: 3319,
    perambalur: 3325,
    pollachi: 3321,
    ramanathapuram: 3335,
    salem: 3315,
    sivaganga: 3331,
    sriperumbudur: 3305,
    tenkasi: 3337,
    thanjavur: 3330,
    theni: 3333,
    thiruvallur: 3301,
    thoothukudi: 3336,
    tiruchirappalli: 3324,
    tirunelveli: 3338,
    tiruppur: 3318,
    tiruvannamalai: 3311,
    vellore: 3308,
    viluppuram: 3313,
    virudhunagar: 3334,
  },
  Telangana: {
    adilabad: 2801,
    bhongir: 2814,
    chevella: 2810,
    hyderabad: 2809,
    karimnagar: 2803,
    khammam: 2817,
    mahabubabad: 2816,
    mahabubnagar: 2811,
    malkajgiri: 2807,
    medak: 2806,
    nagarkurnool: 2812,
    nalgonda: 2813,
    nizamabad: 2804,
    peddapalle: 2802,
    secunderabad: 2808,
    warangal: 2815,
    zahirabad: 2805,
  },
  Tripura: {
    "tripura east": 1602,
    "tripura west": 1601,
  },
  "Uttar Pradesh": {
    agra: 918,
    akbarpur: 944,
    aligarh: 915,
    allahabad: 952,
    "ambedkar nagar": 955,
    amethi: 937,
    amroha: 909,
    aonla: 924,
    azamgarh: 969,
    badaun: 923,
    baghpat: 911,
    bahraich: 956,
    ballia: 972,
    banda: 948,
    bansgaon: 967,
    barabanki: 953,
    bareilly: 925,
    basti: 961,
    bhadohi: 978,
    bijnor: 904,
    bulandshahr: 914,
    chandauli: 976,
    deoria: 966,
    dhaurahra: 929,
    domariyaganj: 960,
    etah: 922,
    etawah: 941,
    faizabad: 954,
    farrukhabad: 940,
    fatehpur: 949,
    "fatehpur sikri": 919,
    firozabad: 920,
    "gautam buddha nagar": 913,
    ghaziabad: 912,
    ghazipur: 975,
    ghosi: 970,
    gonda: 959,
    gorakhpur: 964,
    hamirpur: 947,
    hardoi: 931,
    hathras: 916,
    jalaun: 945,
    jaunpur: 973,
    jhansi: 946,
    kairana: 902,
    kaiserganj: 957,
    kannauj: 942,
    kanpur: 943,
    kaushambi: 950,
    kheri: 928,
    "kushi nagar": 965,
    lalganj: 968,
    lucknow: 935,
    machhlishahr: 974,
    maharajganj: 963,
    mainpuri: 921,
    mathura: 917,
    meerut: 910,
    mirzapur: 979,
    misrikh: 932,
    mohanlalganj: 934,
    moradabad: 906,
    muzaffarnagar: 903,
    nagina: 905,
    phulpur: 951,
    pilibhit: 926,
    pratapgarh: 939,
    "rae bareli": 936,
    rampur: 907,
    robertsganj: 980,
    saharanpur: 901,
    salempur: 971,
    sambhal: 908,
    "sant kabir nagar": 962,
    shahjahanpur: 927,
    shrawasti: 958,
    sitapur: 930,
    sultanpur: 938,
    unnao: 933,
    varanasi: 977,
  },
  Uttarakhand: {
    almora: 503,
    garhwal: 502,
    haridwar: 505,
    "nainital-udhamsingh nagar": 504,
    "tehri garhwal": 501,
  },
  "West Bengal": {
    alipurduars: 1902,
    arambagh: 1929,
    asansol: 1940,
    baharampur: 1910,
    balurghat: 1906,
    bangaon: 1914,
    bankura: 1936,
    barasat: 1917,
    "bardhaman durgapur": 1939,
    "bardhaman purba": 1938,
    barrackpore: 1915,
    basirhat: 1918,
    birbhum: 1942,
    bishnupur: 1937,
    bolpur: 1941,
    "cooch behar": 1901,
    darjeeling: 1904,
    "diamond harbour": 1921,
    "dum dum": 1916,
    ghatal: 1932,
    hooghly: 1928,
    howrah: 1925,
    jadavpur: 1922,
    jalpaiguri: 1903,
    jangipur: 1909,
    jaynagar: 1919,
    jhargram: 1933,
    kanthi: 1931,
    "kolkata dakshin": 1923,
    "kolkata uttar": 1924,
    krishnanagar: 1912,
    "maldaha dakshin": 1908,
    "maldaha uttar": 1907,
    mathurapur: 1920,
    medinipur: 1934,
    murshidabad: 1911,
    purulia: 1935,
    raiganj: 1905,
    ranaghat: 1913,
    srerampur: 1927,
    tamluk: 1930,
    uluberia: 1926,
  },
};

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

  // --------------------
  // const constiMap = document.getElementById("map");
  // constiMap.on("wheel", function (event) {
  //   event.preventDefault();
  // });

  // // Prevent pinch-zoom on touch devices
  // constiMap.on(
  //   "touchmove",
  //   function (event) {
  //     if (event.touches.length > 1) {
  //       event.preventDefault();
  //     }
  //   },
  //   { passive: false }
  // );
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
function updatePaginationControls(
  totalRows,
  class_name,
  second_class_name,
  numberOfRows
) {
  const numPages = Math.ceil(totalRows / numberOfRows);
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
        displayPage(currentPage, second_class_name, 10);
      }
    } else {
      if (currentPageCandidates > 1) {
        currentPageCandidates--;
        displayPage(currentPageCandidates, second_class_name, 10);
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
        displayPage(currentPage, second_class_name, 10);
      } else {
        currentPageCandidates = i;
        displayPage(currentPageCandidates, second_class_name, 10);
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
        displayPage(currentPage, second_class_name, 10);
      }
    } else {
      if (currentPageCandidates < numPages) {
        currentPageCandidates++;
        displayPage(currentPageCandidates, second_class_name, 10);
      }
    }
  });
  pageButtonsContainer.appendChild(nextButton);

  paginationControls.appendChild(pageButtonsContainer);
}

function displayPage(page, class_name, numberOfRows) {
  const rows = document.querySelectorAll(class_name);
  const startIndex = (page - 1) * numberOfRows;
  const endIndex = startIndex + numberOfRows;

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
    updatePaginationControls(
      count,
      "pagination-controls",
      "#table-body tr",
      10
    );
    displayPage(currentPage, "#table-body tr", 10);
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

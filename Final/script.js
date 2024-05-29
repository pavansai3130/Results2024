// JavaScript code for handling page functionality
// Ensure you have included JQuery library before this script
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

// JSON object containing party colors
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
  "NCT Of Delhi",
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
    console.log(L);
    map = L.map("map", { attributionControl: false, zoomSnap: 0.2 });
    geo = L.geoJSON(geoJson, {
      onEachFeature: (feature, layer) => {
        layer.on("click", function (event) {
          console.log("first");
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
          // render_table(feature.properties.pc_id,1);
          document.getElementById("stateTabeleContainer").style.display =
            "none";
          document.querySelector("#Constituency-res").style.display = "none";
          document.querySelector("#Candidate-res").style.display = "block";
        });
        layer._leaflet_id = feature.properties.pc_id;
      },
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
async function fetchJSON(file) {
  try {
    const url = "https://results2024.s3.ap-south-1.amazonaws.com/results.json";
    const response = await fetch(file);
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
  console.log(data);
  // console.log(stateDataJson);
  // console.log(allianceJson);
  // Function to render India map with statewise colors
  function renderIndiaMap() {
    // Implement the logic to render India map using SVG or any other method
    // Add paths to the SVG map
    //alert("aa");
    document.getElementById("india-map").innerHTML =
      '<svg id="india-svg" viewBox="0 100 1000 1150" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%"></svg>';
    var pathsStr = "";
    for (let state in paths) {
      pathsStr += `<path id="${states[state]}" d="${paths[state]}"></path>`;
    }
    document.getElementById("india-svg").innerHTML =
      '<svg id="india-svg" viewBox="0 0 1000 800" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">' +
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

    let stateCount = 0;
    for (const state in stateDataJson) {
      // console.log(unionTerritories.includes(state));
      if (!unionTerritories.includes(state)) {
        let nda = 0,
          india = 0,
          others = 0;

        // console.log(state);
        const stateMap = document.getElementById(state);
        // console.log(stateMap);

        const newRow = referenceRow.cloneNode(true);
        newRow.removeAttribute("id");

        newRow.style.display = "";
        const cells = newRow.getElementsByTagName("td");
        cells[0].innerHTML = `<img id="stateLogo" src='${stateMaps[state]}'>${state}`;
        for (const consti in stateDataJson[state]) {
          const leadingCandidate =
            stateDataJson[state][consti]["candidates"][0];
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
        stateCount++;
      }
      // console.log(stateCount);
    }
    // console.log("afhkhbfz");
    console.log(alliancePatries);
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

  document.getElementById("stateButton").addEventListener("click", function () {
    document.getElementById("unionButton").className =
      "btn btn-light border border-5";
    document.getElementById("stateRow").textContent = "State";
    document.getElementById("stateButton").className += " active";
    renderAllianceResults();
  });

  document.getElementById("unionButton").addEventListener("click", function () {
    document.getElementById("stateRow").textContent = "Union Territory";
    document.getElementById("stateButton").className =
      "btn btn-light border border-5";
    document.getElementById("unionButton").className += " active";
    const tbody = document.getElementById("allianceBody");
    tbody.innerHTML = "";
    const referenceRow = document.getElementById("referenceRow");

    for (const state in stateDataJson) {
      if (unionTerritories.includes(state)) {
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
          const leadingCandidate =
            stateDataJson[state][consti]["candidates"][0];
          if (leadingCandidate.alliance === "NDA") nda++;
          else if (leadingCandidate.alliance === "OTH") others++;
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
      }
    }
  });

  // -----------------Accordion population---------------------------------------------
  // Function to handle click event on state in India map

  // Function to render state results page
  function renderStateResults(state) {
    // Implement the logic to render state-wise results page
  }

  // Example click event handler for state in India map
  $("#india-map").on("click", "path", function () {
    const state = $(this).attr("id");
    handleStateClick(state);
    creatediv(state);
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

function colorProgress() {
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
    document.getElementById("carouselProgress").style.backgroundColor = "grey";
  }
}
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
  breadcrumbState.style.display = "inline";
  breadcrumbConstituency.style.display = "none";
  // state_map(state_codes[state], state);
  // Implement the logic to fetch and display state-wise results
  const constituencyTable = document.getElementById("stateTable");
  const cells = constituencyTable.getElementsByTagName("th");
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
function creatediv(state) {
  var obj = {};
  var partynames = [];
  var partyseats = [];
  var constituencyData = stateDataJson[state];
  for (let constituencyname in constituencyData) {
    let party_name =
      stateDataJson[state][constituencyname]["candidates"][0]["prty"];
    if (party_name in obj) {
      obj[party_name] += 1;
    } else obj[party_name] = 1;
  }
  var sortedPartyWins = Object.entries(obj).sort((a, b) => b[1] - a[1]);
  for (let i = 0; i < sortedPartyWins.length; i++) {
    partynames[i] = sortedPartyWins[i][0];
    partyseats[i] = sortedPartyWins[i][1];
  }
  var maindiv = document.getElementById("containertool2");
  var htmlcode = `<span class="close" onclick="close_btn()">&times;</span>
                    <h2 class="sthead">${state}</h2>
                    
                    <table class="detailstable">
                       <thead>
                          <tr>
                             <th class="tbhead">Party</th>
                             <th id="wlright" class="tbhead">Won / Lead</th>
                          </tr>
                       </thead>`;
  if (partynames)
    for (let i = 0; i < partynames.length && i < 5; i++) {
      htmlcode += `<tr>
                                       <td class="tdData"><img class="party-icon" src="${
                                         sym[partynames[i]]
                                       }"> ${partynames[i]}</td>
                                       <td class="tdData" id="wlright">${
                                         obj[partynames[i]]
                                       }</td>
                                     </tr>`;
    }
  htmlcode += `</tbody>
                    </table>
                    <div class="results12">
                       <h3 class="hdiv3">2019 results</h3>
                       <div class="bars">
                           <div class="barbox">
                               <span class="barlabel" style="margin-left:-60px;">${partynames[0]}</span>
                               <div class="bar1 inbar">${partyseats[0]}</div>
                           </div>
                           <div class="barbox">
                               <span class="barlabel" style="margin-left:-50px;">${partynames[1]}</span>
                               <div class="bar2 inbar">${partyseats[1]}</div>
                           </div>
                           <div class="barbox">
                               <span class="barlabel" style="margin-left:-5px;">Others</span>
                               <div class="bar3 inbar">81</div>
                           </div>
                       </div>
                   </div>
                   <div id="viewdetails" onclick="showmap('${state}')">Check Full Results<span id=gt>&gt</span></div>`;
  maindiv.innerHTML = "";
  maindiv.innerHTML += htmlcode;
  maindiv.style.display = "block";
}
function showmap(state) {
  state_map(state_codes[state], state);
  close_btn();
}
function close_btn() {
  document.getElementById("containertool2").style.display = "none";
}

let renderAllianceResults;

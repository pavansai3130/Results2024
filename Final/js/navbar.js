function showTooltip() {
  if (window.innerWidth >= 950) {
    document.getElementById("tooltip").style.visibility = "visible";
  }
}

function hideTooltip() {
  if (window.innerWidth >= 950) {
    document.getElementById("tooltip").style.visibility = "hidden";
  }
}

function toggleMenu() {
  const navBorder = document.querySelector("nav");
  var navLinks = document.getElementById("nav-links");
  var mobileLinks = document.getElementById("mobile-links");
  const mainBody = document.querySelector(".body-main-content");
  const slideBody = document.querySelector(".slide-main-content");
  const oneBody = document.querySelector(".table-main-one");
  const twoBody = document.querySelector(".table-main-two");
  const btnBody = document.querySelector(".select-main-btn");
  const mapBody = document.querySelector(".select-main-map");
  const footerI = document.querySelector(".footer");
  const navHeader = document.getElementById("navHeader");

  navBorder.style.border = "none";
  navLinks.classList.toggle("show");
  mobileLinks.classList.toggle("show");
  if (mainBody.style.display === "block") {
    footerI.style.visibility = "hidden";
    navHeader.style.border = "none";
    mainBody.style.display = "none";
    slideBody.style.display = "none";
    oneBody.style.display = "none";
    twoBody.style.display = "none";
    btnBody.style.display = "none";
    mapBody.style.display = "none";
  } else {
    footerI.style.visibility = "visible";
    navHeader.style.borderBottom = "1px solid rgba(0, 0, 0, 0.1)";
    mainBody.style.display = "block";
    slideBody.style.display = "block";
    oneBody.style.display = "block";
    twoBody.style.display = "block";
    btnBody.style.display = "block";
    mapBody.style.display = "block";
  }
}

function toggleTooltip() {
  const mobiletoolTip = document.getElementById("mobile-tooltip");
  const hoverable = document.getElementById("hoverable");
  const mobileLi = document.querySelectorAll(".hiding li");
  const up = document.querySelector(".fa-chevron-up");
  const down = document.querySelector(".fa-chevron-down");

  if (window.innerWidth < 998) {
    if (mobiletoolTip.style.display === "block") {
      mobiletoolTip.style.display = "none";
      up.style.display = "none";
      down.style.display = "block";
      hoverable.style.borderBottom = "1px solid rgba(0, 0, 0, 0.1)";
    } else {
      up.style.display = "block";
      down.style.display = "none";
      hoverable.style.border = "none";
      mobiletoolTip.style.display = "block";
    }
    mobileLi.forEach((li) => (li.style.border = "none"));
  }
}

document.querySelectorAll("a.disabled").forEach(function (link) {
  link.addEventListener("click", function (event) {
    event.preventDefault();
  });
});

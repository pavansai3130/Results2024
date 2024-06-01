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
  const footer = document.querySelector(".footer");
  const navHeader = document.getElementById("navHeader");

  navBorder.style.border = "none";
  navLinks.classList.toggle("show");
  mobileLinks.classList.toggle("show");
  if (mainBody.style.display === "block") {
    mainBody.style.display = "none";
    navHeader.style.border = "none";
    footer.classList.add("hideFooter");
  } else {
    mainBody.style.display = "block";
    navHeader.style.borderBottom = "1px solid rgba(0, 0, 0, 0.1)";
    footer.classList.remove("hideFooter");
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

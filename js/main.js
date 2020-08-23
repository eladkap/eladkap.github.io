// Select DOM items
var menuBtn = document.querySelector(".menu-btn");
var menu = document.querySelector(".menu");
var menuNav = document.querySelector(".menu-nav");
var menuBranding = document.querySelector(".menu-branding");
var navItems = document.querySelectorAll(".nav-item");

// Set Initial State of Menu
var showMenu = false;

if (menuBtn) {
  menuBtn.addEventListener("click", toggleMenu);
}

function toggleMenu() {
  if (!showMenu) {
    menuBtn.classList.add("close");
    menu.classList.add("show");
    menuNav.classList.add("show");
    menuBranding.classList.add("show");
    navItems.forEach((item) => item.classList.add("show"));
  } else {
    menuBtn.classList.remove("close");
    menu.classList.remove("show");
    menuNav.classList.remove("show");
    menuBranding.classList.remove("show");
    navItems.forEach((item) => item.classList.remove("show"));
  }
  // Set Menu State
  showMenu = !showMenu;
}

// Visitors count

// const countVisitors = document.getElementById("count_visitors");

// var GetResponse = function () {
//   return Promise.resolve($.get("https://www.cloudflare.com/cdn-cgi/trace"));
// };

// async function UpdateVisitorsData() {
// Get IP from host
//   let responseText = await GetResponse();
//   let ipStr = responseText.match(/ip=(\d+.\d+.\d+.\d+)/gi)[0];
//   var ip = ipStr.split("=")[1];
//   console.log(ip);

//   // Read text file
//   fetch("/data/visitors.txt")
//     .then((response) => response.text())
//     .then((fileText) => {
//       let ipAddresses = fileText.split("\n");
//       console.log(ipAddresses);
//       if (!ipAddresses.includes(ip)) {
//       }
//     });
// }

// UpdateVisitorsData();

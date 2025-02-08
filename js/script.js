// for nav
document.getElementById("menu-icon").addEventListener("click", function() {
  document.getElementById("nav-links").classList.toggle("active");
});

// for dark mode

let darkmode = localStorage.getItem('darkmode');
const themeswitch = document.getElementById('theme-switch');

const enableDarkmode = () => {
  document.body.classList.add('darkmode');
  localStorage.setItem('darkmode', 'active');
};

const disableDarkmode = () => {
  document.body.classList.remove('darkmode');
  localStorage.setItem('darkmode', 'inactive');
};

if (darkmode === "active") {
  enableDarkmode();
} else {
  disableDarkmode();
}

themeswitch.addEventListener("click", () => {
  darkmode = localStorage.getItem('darkmode'); 
  darkmode !== "active" ? enableDarkmode() : disableDarkmode();
});

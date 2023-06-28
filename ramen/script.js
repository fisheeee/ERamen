const navbarNavvers = document.querySelector(".navbar-navvers");

document.querySelector("#three-stripes").onclick = () => {
  navbarNavvers.classList.toggle("active");
};

const stripes = document.querySelector("#three-stripes");

document.addEventListener("click", function (e) {
  if (!stripes.contains(e.target) && !navbarNavvers.contains(e.target)) {
    navbarNavvers.classList.remove("active");
  }
});

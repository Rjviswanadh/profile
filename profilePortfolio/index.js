const menuIcon = document.getElementById("menu-icon-item");
const hideMenu = document.getElementById("menu-icon-new");
menuIcon.addEventListener("click", () => {
  console.log("hello");
  hideMenu.classList.toggle("display-menu");
});

const menubutton = document.querySelector("header button");
const menuitems = document.querySelectorAll("nav");
// menuitems will be a Node List of the list items

menubutton.addEventListener("click", () => {
	menuitems.forEach((item) => item.classList.toggle("open"));
	menubutton.classList.toggle("close");
});

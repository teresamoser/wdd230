const mybtn = document.querySelector("header button");
const mynav = document.querySelectorAll("nav a");


mybtn.addEventListener("click", () => {
	mynav.forEach((item) => item.classList.toggle("open"));
	mybtn.classList.toggle("close");
});

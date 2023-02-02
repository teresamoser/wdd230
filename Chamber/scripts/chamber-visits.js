
// initialize display elements
const visitsDisplay = document.querySelector("#visits");

// get the stored value in localStorage
let numVisits = Number(window.localStorage.getItem("visits-ls"));
 
if (numVisits !== 0) {
	visitsDisplay.textContent = numVisits;
} else {
	visitsDisplay.textContent = `This is your first visit!`;
}

// increment the number of visits.
numVisits++;

// store the new number of visits value
localStorage.setItem("visits-ls", numVisits);


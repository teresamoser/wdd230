const url = "data/members.json"
const cards = document.querySelector('#cards');

async function getDirectoryData() {
  const response = await fetch(url);
  const data = await response.json();
  // console.table(data.members);
  displayDirectory(data.members);
}

getDirectoryData();

const displayDirectory = (members) => {
 
  members.forEach((members) => {

    let card = document.createElement('section', members);
    let icon = document.createElement('image', members.image);
    let name = document.createElement('h2', members.name); 
    let address = document.createElement('address', members.address);
    let phone = document.createElement('phone', members.phone);
    let web = document.createElement('website', members.website);
    let level = document.createElement('membershipevel', members.membershiplevel)
 
    name.textContent = `${members.name}`;

    icon.setAttribute('src', members.image);
    icon.setAttribute('alt', `membername ${members.name}`); 
    icon.setAttribute('loading', 'lazy');
    icon.setAttribute('width', '100');
    icon.setAttribute('height', '200');

    card.appendChild(icon);
    card.appendChild(name); 
    card.appendChild(address);
    card.appendChild(phone);
    card.appendChild(web);
    card.appendChild(level);

    cards.appendChild(card);
  });
}

const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");
const display = document.querySelector("article");

gridbutton.addEventListener("click", () => {
	display.displayDirectory.add("grid");
	display.displayDirectory.remove("list");
});

listbutton.addEventListener("click", displayDirectory1); 

function displayDirectory1() {
	display.cards.add("list");
	display.cards.remove("grid");
}

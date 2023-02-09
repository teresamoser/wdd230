const url = "wdd230/Chamber/data/members.json"
const cards = document.querySelector('#cards');

async function getDirectoryData() {
  const response = await fetch(url);
  const data = await response.json();
  console.table(data.members);
  displayDirectory(data.members); // note that we reference the prophets array of the JSON data object, not just the object
}

getDirectoryData();

const displayDirectory = (members) => {

  // card build code goes here
  members.forEach((members) => {

    // Create elements to add to the div.cards element
    let card = document.createElement('section');
    let image = document.createElement('image');
    let name = document.createElement('h2'); 
    let address = document.createElement('address');
    let phone = document.createElement('phone');
    let webSite = document.createElement('website');
    let membershipLevel = document.createElement('membershipLevel')

    // Build the h2 content out to show the prophet's full name
    name.textContent = `${members.name}`;

    // Build the image portrait by setting all the relevant attributes
    image.setAttribute('src', members.image);
    image.setAttribute('alt', `membername ${members.name}`); 
    image.setAttribute('loading', 'lazy');
    image.setAttribute('width', '100');
    image.setAttribute('height', '200');


    // Append the section(card) with the created elements
    card.appendChild(image);
    card.appendChild(name); 
    card.appendChild(address);
    card.appendChild(phone);
    card.appendChild(webSite);
    card.appendChild(membershipLevel);

    cards.appendChild(card);
  });
}

const url = "wdd230/Chamber/scripts/chamber-directory.js"
const cards = document.querySelector('#cards');

async function getDirectoryData() {
  const response = await fetch(url);
  const data = await response.json();
  // console.table(data.chamberMembers);
  displayDirectory(data.chamberMembers); // note that we reference the prophets array of the JSON data object, not just the object
}

getDirectoryData();

const displayDirectory = (chamberMembers) => {

  // card build code goes here
  chamberMembers.forEach((chamberMembers) => {

    // Create elements to add to the div.cards element
    let card = document.createElement('section');
    let image = document.createElement('image');
    let name = document.createElement('h2'); 
    let address = document.createElement('address');
    let phone = document.createElement('phone');
    let webSite = document.createElement('website');
    let membershipLevel = document.createElement('membershipLevel')

    // Build the h2 content out to show the prophet's full name
    name.textContent = `${chamberMembers.name}`;

    // Build the image portrait by setting all the relevant attributes
    image.setAttribute('src', chamberMembers.image);
    image.setAttribute('alt', `membername ${chamberMembers.name}`); 
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

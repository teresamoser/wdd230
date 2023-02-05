const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';
const cards = document.querySelector('#cards');
const displayProphets = (prophets) => {
    prophets.forEach((prophets) => {
      // Create elements to add to the div.cards element
      let card = document.createElement('section');
      let fullName = document.createElement('h2'); 
      let portrait = document.createElement('img');
  
      // Build the h2 content out to show the prophet's full name
      fullName.textContent = `${prophets.name} lastname`;

      // Build the image portrait by setting all the relevant attributes
      portrait.setAttribute('src', prophets.imageurl);
      portrait.setAttribute('alt', `Portait of ${prophets.name} lastname`); 
      portrait.setAttribute('loading', 'lazy');
      portrait.setAttribute('width', '340');
      portrait.setAttribute('height', '440');
  
      // Append the section(card) with the created elements
      card.appendChild(fullName); 
      card.appendChild(portrait);  
      card.appendChild(card);
    }); 
    // end of arrow function and forEach loop
  

async function getProphetsData(url) {
    const response = await fetch(url);
    const data = await response.json();
    // console.table(data.prophets);
    displayProphets(data.prophets); 
    }

getProphetsData();

}
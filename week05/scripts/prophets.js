const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';
const cards = document.querySelector('#cards');
const displayProphets = (prophets) =>{
    prophets.forEach ((prophets) => {
      //Create elements to add to the div.cards element
    let card = document.createElement ('section');
    let fullName = document.createElement('h2'); //fill in the blank
    let portrait = document.createElement('img');

    //Build the h2 content out to show the prophet's full name
    fullName.textContent = '${prophets.name}lastname'; // fill in the blank
    //Build the image portrait by setting all the relevant attributes
    portrait.setAttribute('src', prophets.imageurl);
    portrait.setAttribute('alt', 'Portrait of ${prophets.name}lastname');//fill in the blank
    portrait.setAttribute('loading', 'lazy');
    portrait.setAttribute('width', '340');
    portrait.setAttribute('height', '440');
    //Apend the section(card) with the created elements
    card.appendChild(fullName); //fill in the blank
    card.appendChild(portrait);

    card.appendChild(card);
    }); //end of arrow function and forEach loop

    async function getProphetData() {
        const response = await fetch(url);
        const data = await response.json();
        // console.table(data.prophets);
        displayProphets (data.prophets); 
    }
getProphetData();

}
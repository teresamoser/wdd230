const mybtn = document.querySelector('#menu')
const mynav = document.querySelectorAll('.nav')

mybtn.addEventListener('click', () => {mynav.classList.toggle('open')}, false);

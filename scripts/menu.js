const menuButton = document.querySelector('#menu');
const nav = document.querySelector('nav');

menuButton.addEventListener('click', () => {
	let openClass = 'open';
	menuButton.classList.toggle(openClass);
	nav.classList.toggle(openClass);
});
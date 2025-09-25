import '../css/style.css';
import tacoBg from '../img/taco-bg.jpg';
import loadHome from './home.js';
import loadMenu from './menu.js';
import loadAbout from './about.js';

document.body.style.backgroundImage = `url(${tacoBg})`;
const contentEl = document.querySelector('#content');
const navButtons = document.querySelectorAll('.header__button');
const homeButton = document.querySelector('#nav__home');
const menuButton = document.querySelector('#nav__menu');
const aboutButton = document.querySelector('#nav__about');

const buttonToFunc = new Map();
buttonToFunc.set(homeButton, loadHome);
buttonToFunc.set(menuButton, loadMenu);
buttonToFunc.set(aboutButton, loadAbout);

/** Removes disabled from all buttons and applies disabled to target button.
 *
 * @param {NodeListOf<Element>} buttons - list of all header/nav buttons
 * @param {Element} target - the clicked button
 */
function toggleDisabled(buttons, target) {
	buttons.forEach((button) => {
		if (target === button) {
			button.disabled = true;
		} else {
			button.disabled = false;
		}
	});
}

document.addEventListener('DOMContentLoaded', () => {
	// default home page to open on page load
	loadHome(contentEl);
	homeButton.disabled = true;

	navButtons.forEach((button) => {
		button.addEventListener('click', () => {
			if (!button.disabled) {
				toggleDisabled(navButtons, button);
				buttonToFunc.get(button)(contentEl);
			}
		});
	});
});

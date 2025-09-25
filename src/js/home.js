/** Builds HTML elements for Home tab and attaches them to target
 *
 * @param {HTMLElement} target - element that all newly created elements will be attached
 */
export default function loadHome(target) {
	target.innerHTML = '';

	const h2Text = 'The Dandiest Tacos in Town';
	const p1Text =
		"Step into a world where tacos aren't just food, they're a celebration. At Dan's Tacos, we serve up bold flavors, fresh ingredients, and a whole lot of personality. Whether you're craving a classic carne asada or feeling adventurous with our spicy pineapple pork, every taco is crafted with care and a dash of dandy flair.";
	const p2Text =
		"We're not just another taco joint; we're your new favorite hangout. Grab a seat, bring your appetite, and let your taste buds dance. Because here, tacos are more than a meal. They're a mood.";
	const p3Text1 = 'To place an order, call us at 555-555-5555 or ';
	const p3LinkText = 'order online';
	const p3Text2 = ' today!';

	const sec = document.createElement('section');
	sec.classList.add('home');

	const h2 = document.createElement('h2');
	h2.classList.add('home__hdg');
	h2.innerText = h2Text;

	const p1 = document.createElement('p');
	p1.classList.add('home__p');
	p1.innerText = p1Text;

	const p2 = document.createElement('p');
	p2.classList.add('home__p');
	p2.innerText = p2Text;

	const p3 = document.createElement('p');
	p3.classList.add('home__p');
	const p3TextNode1 = document.createTextNode(p3Text1);
	const p3Link = document.createElement('a');
	p3Link.innerText = p3LinkText;
	p3Link.href = '#';
	const p3TextNode2 = document.createTextNode(p3Text2);
	p3.appendChild(p3TextNode1);
	p3.appendChild(p3Link);
	p3.appendChild(p3TextNode2);

	p3Link.addEventListener('click', (e) => {
		e.preventDefault();
		alert(
			'Hey, thanks for your interest! Unfortunately this is not a real taco restaurant.'
		);
	});

	sec.appendChild(h2);
	sec.appendChild(p1);
	sec.appendChild(p2);
	sec.appendChild(p3);
	target.appendChild(sec);
}

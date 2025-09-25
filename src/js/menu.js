class Item {
	constructor(name, description, price) {
		this.name = name;
		this.description = description;
		this.price = price;
	}
}

function makeItem(name, description, price) {
	return new Item(name, description, price);
}

const tacoSpecials = [
	makeItem(
		'The Dandy Classic',
		'Grilled carne asada, fresh cilantro, diced onions, and lime',
		6.25
	),
	makeItem(
		'Pineapple Punk',
		'Spicy pork al pastor with grilled pineapple, pickled red onion, chipotle crema',
		6.25
	),
	makeItem(
		'Jacked Up',
		'Smoky jackfruit carnitas with avocado salsa and crunchy slaw (vegan)',
		6
	),
	makeItem(
		'Cluck Norris',
		'Crispy chicken, jalapeño ranch, shredded lettuce, queso fresco',
		6
	),
	makeItem('Shrimp Tease', 'Garlic-lime shrimp, mango salsa, spicy aioli', 7),
	makeItem(
		'Breakfast Bandito',
		'Chorizo, scrambled egg, potato hash, cheddar cheese (served all day)',
		6.25
	),
];

const burritosAndBowls = [
	makeItem(
		'Big Dandy Burrito',
		'Choice of protein, rice, beans, cheese, pico de gallo, crema',
		11.25
	),
	makeItem(
		'Low-Key Bowl',
		'Greens, grains, grilled veggies, choice of protein',
		10.75
	),
];

const sides = [
	makeItem(
		'Street Corn (Elote)',
		'Grilled corn with mayo, cotija, chili powder',
		4.5
	),
	makeItem(
		'Loaded Nachos',
		'Tortilla chips, cheese, beans, jalapeños, sour cream',
		7.5
	),
	makeItem('Chips & Guac', 'Fresh guacamole with house-made chips', 5.75),
	makeItem('Refried Beans', 'Creamy, slow-cooked pinto beans', 3.75),
	makeItem('Sweet Plantains', 'Caramelized ripe plantains', 4.75),
];

const drinks = [
	makeItem('Horchata', 'Sweet cinnamon rice milk', 3.75),
	makeItem('Tamarind Soda', 'Tangy and refreshing', 3.5),
	makeItem('Mexican Coke', 'Classic glass bottle', 4),
	makeItem('Local Craft Beer', 'Rotating selection', 7.5),
	makeItem(
		'Agua Fresca',
		'Rotating flavors (e.g., hibiscus, watermelon, cucumber-lime)',
		3.75
	),
];

function makeTable(items) {
	const table = document.createElement('table');

	const thead = document.createElement('thead');
	thead.classList.add('visually-hidden');
	const headerRow = document.createElement('tr');

	const h1 = document.createElement('th');
	const h2 = document.createElement('th');
	const h3 = document.createElement('th');

	h1.innerText = 'Name';
	h2.innerText = 'Description';
	h3.innerText = 'Price';

	headerRow.appendChild(h1);
	headerRow.appendChild(h2);
	headerRow.appendChild(h3);
	thead.appendChild(headerRow);
	table.appendChild(thead);

	const tbody = document.createElement('tbody');

	items.forEach((item) => {
		const row = document.createElement('tr');

		const nameCell = document.createElement('td');
		const descCell = document.createElement('td');
		const priceCell = document.createElement('td');

		nameCell.innerText = item.name;
		descCell.innerText = item.description;
		priceCell.innerText = `$${item.price}`;

		row.appendChild(nameCell);
		row.appendChild(descCell);
		row.appendChild(priceCell);

		tbody.appendChild(row);
	});

	table.appendChild(tbody);

	return table;
}

/** Builds HTML elements for Menu tab and attaches them to target
 *
 * @param {HTMLElement} target - element that all newly created elements will be attached
 */
export default function loadMenu(target) {
	target.innerHTML = '';

	const h2_1Text = 'Taco Specials';
	const p1Text =
		'These are the stars of the show. Bold, cheeky, and unforgettable.';
	const h2_2Text = 'Burritos & Bowls';
	const h2_3Text = 'Sides';
	const h2_4Text = 'Drinks';

	const sec = document.createElement('section');
	sec.classList.add('menu');

	const h2_1 = document.createElement('h2');
	const h2_2 = document.createElement('h2');
	const h2_3 = document.createElement('h2');
	const h2_4 = document.createElement('h2');
	h2_1.classList.add('menu__hdg');
	h2_2.classList.add('menu__hdg');
	h2_3.classList.add('menu__hdg');
	h2_4.classList.add('menu__hdg');

	const p1 = document.createElement('p');
	p1.classList.add('menu__p');

	h2_1.innerText = h2_1Text;
	h2_2.innerText = h2_2Text;
	h2_3.innerText = h2_3Text;
	h2_4.innerText = h2_4Text;

	p1.innerText = p1Text;

	const table1 = makeTable(tacoSpecials);
	const table2 = makeTable(burritosAndBowls);
	const table3 = makeTable(sides);
	const table4 = makeTable(drinks);

	sec.appendChild(h2_1);
	sec.appendChild(p1);
	sec.appendChild(table1);
	sec.appendChild(h2_2);
	sec.appendChild(table2);
	sec.appendChild(h2_3);
	sec.appendChild(table3);
	sec.appendChild(h2_4);
	sec.appendChild(table4);

	target.appendChild(sec);
}

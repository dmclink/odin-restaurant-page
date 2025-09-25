/** Builds HTML elements for About tab and attaches them to target
 *
 * @param {HTMLElement} target - element that all newly created elements will be attached
 */
export default function loadAbout(target) {
	target.innerHTML = '';

	const h1Text = 'Our Story';
	const p1Text =
		"Dan's Tacos began with a simple idea and a serious love for street food. Dan, our founder, taught himself to cook by experimenting with flavors and techniques that turned everyday ingredients into something unforgettable. His passion for tacos became the foundation of a restaurant that values creativity, quality, and community.";
	const p2Text =
		'We press our tortillas fresh each day, source ingredients locally whenever possible, and keep our recipes evolving to reflect the energy of our neighborhood. From smoky chipotle chicken to vegan jackfruit carnitas, every dish is crafted with intention and a touch of culinary curiosity.';
	const p3Text =
		"Dan's Tacos is more than a kitchen. It's a place where stories are shared, flavors are explored, and people come together over food that feels both familiar and exciting.";
}

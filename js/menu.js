"use strict";

let menu = document.getElementById('menu');
let mobileMenuButton = document.getElementById('mobile-menu-button');
let links = document.querySelectorAll('#menu li a');

if (document.documentElement.clientWidth < 767) {
	menu.classList.add('hidden');
}

const toggleMobileMenu = () => {
	if (menu.classList.contains('hidden')) {
		menu.classList.remove('hidden');
	} else {
		menu.classList.add('hidden');
	}
};

mobileMenuButton.addEventListener('click', toggleMobileMenu);

links.forEach(link => {
	link.addEventListener('click', () => {
		if (document.documentElement.clientWidth < 767) {
			menu.classList.add('hidden');
		}
	});
});
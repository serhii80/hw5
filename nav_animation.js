const navSlide = () => {
	const burger = document.querySelector('.burger');
	const nav = document.querySelector('.menu_elements');
	const navLinks = document.querySelectorAll('.menu_elements a');

	burger.addEventListener('click', () => {
		nav.classList.toggle('nav-active');
	navLinks.forEach((link, index) => {
		if (link.style.animation) {
			link.style.animation = ''
		} else {
			console.log(link);
			link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
		}
	});
	//burger animation
	burger.classList.toggle('toggle');
	});
	
}

navSlide();
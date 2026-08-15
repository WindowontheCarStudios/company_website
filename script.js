const revealItems = document.querySelectorAll('.featured-game, .game-card, .links-card, .about > *');

const observer = new IntersectionObserver((entries) => {
	for (const entry of entries) {
		if (entry.isIntersecting) {
			entry.target.classList.add('is-visible');
			observer.unobserve(entry.target);
		}
	}
}, { threshold: 0.12 });

for (const item of revealItems) {
	item.classList.add('reveal');
	observer.observe(item);
}

document.addEventListener('DOMContentLoaded', () => {
	const yearEl = document.getElementById('year');
	if (yearEl) yearEl.textContent = new Date().getFullYear();

	const navToggle = document.getElementById('navToggle');
	const siteNav = document.getElementById('siteNav');

	if (navToggle && siteNav) {
		navToggle.addEventListener('click', () => {
			siteNav.classList.toggle('open');
			navToggle.classList.toggle('active');
		});

		siteNav.querySelectorAll('a').forEach(a => {
			a.addEventListener('click', () => siteNav.classList.remove('open'));
		});
	}
});

"use strict";

document.addEventListener("DOMContentLoaded", () => {
	let curpath = location.pathname.match(/\/[^/]*/);
	let active_link = document.querySelector('nav a[href="' + curpath + '"]');

	if (active_link) active_link.className += " text-decoration-underline";
});

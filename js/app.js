// Loader Hide
setTimeout(function () {
	document.querySelector(".loader").style.display = "none";
  }, 200);

// ScrollReveall
window.sr = ScrollReveal();sr.reveal('.reveal');

// Nav
document.addEventListener("DOMContentLoaded", function() {
	document.getElementById("nav-content").style.width = "0";
	document.getElementById("close-nav").style.display = "none";

	document.querySelectorAll("#nav-content .nav a").forEach(function(navLink) {
		navLink.addEventListener("click", function() {
			closeNav();
		});
	});
});

function openNav() {
	if (window.innerWidth <= 768) {
		document.getElementById("nav-content").style.width = "100%";
	} else {
		document.getElementById("nav-content").style.width = "50%";
	}
	document.getElementById("close-nav").style.display = "block";
}

function closeNav() {
	document.getElementById("nav-content").style.width = "0";
	document.getElementById("close-nav").style.display = "none";
}


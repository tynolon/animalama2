// Initiating parallax scene
let scene = document.getElementById('parallax-scene');
let parallaxInstance = new Parallax(scene);


// Hamburger menu
let hamburger = document.querySelector('.hamburger');
let body = document.body;

hamburger.onclick = function() {
  	hamburger.classList.toggle('active');
  	body.classList.toggle('mobile-nav--opened');
}

// Modal open
if ( document.querySelector('.open-modal') ) {
	let openModal = document.querySelector('.open-modal');
	openModal.onclick = function() {
	  	body.classList.add('modal--opened');
	}
}

// Modal close
if ( document.querySelector('.modal-close') ) {
	let closeModal = document.querySelector('.modal-close');
	closeModal.onclick = function() {
	  	body.classList.remove('modal--opened');
	}
}

// Answers 
document.addEventListener('click', function (event) {
	this.querySelector('.answer-heading').closest('.answer-item').classList.toggle('active')
});
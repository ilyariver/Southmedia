const main = document.querySelector('.main-section');
const firstSection = document.querySelector('.section-start');
const secondSection = document.querySelector('.section-what-to-call');
const thirdSection = document.querySelector('.section-what-to-call');
const fourthSection = document.querySelector('.section-what-to-call');
const fifthSection = document.querySelector('.section-what-to-call');
const sixthSection = document.querySelector('.section-what-to-call');
const seventhSection = document.querySelector('.section-what-to-call');
// document.querySelector('html').style.overflow = 'hidden';

const zoom = e => {
	const direction = e.deltaY;


};

main.addEventListener('wheel', zoom);

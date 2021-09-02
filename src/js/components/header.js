// import helpers from '../helpers';

const headerMenuButton = document.querySelector('.js-header-btn');
const headerContact = document.querySelector('.js-header-contact');
const navigation = document.querySelector('.navigation');
const blockImage = document.querySelector('.js-block-image');
const blockImageTitle = document.querySelector('.section-start__title');
const blockImageText = document.querySelector('.section-start__text');
const smallWidth = 991;

const stateWidthWindow = () => {
	if (document.body.clientWidth > smallWidth) {
		navigation.after(headerContact);
	} else {
		navigation.append(headerContact);
	}
};

stateWidthWindow();

headerMenuButton.addEventListener('click', () => {
	document.body.classList.toggle('is-active');
});

window.onresize = () => {
	stateWidthWindow();
};

document.addEventListener('DOMContentLoaded', () => {
	blockImage.classList.add('show');

	setTimeout(() => {
		blockImageTitle.classList.add('show');
	}, 0);
	setTimeout(() => {
		blockImageText.classList.add('show');
	}, 300);

});

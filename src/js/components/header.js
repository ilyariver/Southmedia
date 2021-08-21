// import helpers from '../helpers';

const headerMenuButton = document.querySelector('.js-header-btn');
const headerContact = document.querySelector('.js-header-contact');
const navigation = document.querySelector('.navigation');
const smallWidth = 991;

stateWidthWindow();

headerMenuButton.addEventListener('click', () => {
	document.querySelector('.navigation').classList.toggle('is-active');
})

window.onresize = () => {
	stateWidthWindow();
}

function stateWidthWindow() {
	if (document.body.clientWidth > smallWidth) {
		navigation.after(headerContact);
	} else {
		navigation.append(headerContact);
	}
}



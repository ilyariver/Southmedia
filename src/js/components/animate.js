const whatToCallWrap = document.querySelector('.js-what-to-call-wrap');
const whatToCallInscription = document.querySelector('.js-what-to-call-inscription');
const parallaxWrap = document.querySelector('.js-parallax');
const wrapMiniImg = document.querySelectorAll('.js-wrap-mini-img');
const bigArrowIcon = document.querySelector('.js-wrap-mini-img-arrow');
const proverb = document.querySelectorAll('.js-proverb');
const cookingMethodSection = document.querySelector('.js-cooking-method-section');
const cookingMethod = document.querySelector('.js-cooking-method');
const cookingMethodRotated = document.querySelector('.js-cooking-method-rotated');
const slide = document.querySelectorAll('.js-slide');
const ticker = document.querySelector('.js-ticker-text');
const recipesWrap = document.querySelector('.js-section-recipes');
let firstUse = true;

parallaxWrap.addEventListener('scroll', function() {
	const currentHeightWindow = parallaxWrap.getBoundingClientRect().height;
	const inscriptionTopLength = Math.round(whatToCallWrap.getBoundingClientRect().top);
	const subtractObjectFromLength = () => Math.round(currentHeightWindow - whatToCallWrap.offsetHeight / 5);
	const cookingMethodTopLength = Math.round(cookingMethodSection.getBoundingClientRect().top);
	const subtractCookingMethodObjectFromLength = () => Math.round(currentHeightWindow - cookingMethodSection.offsetHeight / 5);
	const tickerTopLength = Math.round(ticker.getBoundingClientRect().top);
	const recipesHeight = recipesWrap.offsetHeight;


	if (inscriptionTopLength < subtractObjectFromLength() && firstUse) {
		setTimeout(() => {
			proverb.forEach(word => word.classList.add('show-text'));
		},0);

		setTimeout(() => {
			timeoutDisplayingPhotos(wrapMiniImg, 'show', 200);
		},300);

		setTimeout(() => {
			bigArrowIcon.classList.add('show-arrow');
		},1500);
		firstUse = false;
	}

	if (cookingMethodTopLength < subtractCookingMethodObjectFromLength()) {
		setTimeout(() => {
			timeoutDisplayingPhotos(slide, 'show-cooking', 200);
		},0);

		setTimeout(() => {
			cookingMethodRotated.classList.add('show-descriptor');
		},500);
	}

	if (tickerTopLength < currentHeightWindow + recipesHeight / 2) {
		const span = document.createElement('span');
		span.innerHTML = 'Блюда из гречки';
		ticker.appendChild(span);
	}

	if (tickerTopLength < -recipesHeight) {
		ticker.innerHTML = '';
	}

	ticker.style.transform = `translateX(-${tickerTopLength  / 2}px)`;

});

function timeoutDisplayingPhotos(whom, active, time) {
	for (let i = 0; i < whom.length; i++) {
		(function(index) {
			setTimeout(() => {
				whom[index].classList.add(active);
			}, 100 + (time * index));
		})(i)
	}
}

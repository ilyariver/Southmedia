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
const question = document.querySelector('.js-question');
const questions = document.querySelectorAll('.js-question');
let firstUse = true;

parallaxWrap.addEventListener('scroll', function() {
	const currentHeightWindow = parallaxWrap.getBoundingClientRect().height;
	const inscriptionTopLength = Math.round(whatToCallWrap.getBoundingClientRect().top);
	const cookingMethodTopLength = Math.round(cookingMethodSection.getBoundingClientRect().top);
	const tickerTopLength = Math.round(ticker.getBoundingClientRect().top);
	const recipesHeight = recipesWrap.offsetHeight;
	const questionTopLength = question.getBoundingClientRect().top;
	const questionBlockHeight = question.offsetHeight;

	const subtractObjectFromLength = () => Math.round(currentHeightWindow - whatToCallWrap.offsetHeight);
	const subtractCookingMethodObjectFromLength = () => Math.round(currentHeightWindow - cookingMethodSection.offsetHeight / 2);
	const middleBlockRelativeWindow = () => Math.round(currentHeightWindow - (currentHeightWindow / 2 + questionBlockHeight / 2));

	if (inscriptionTopLength < subtractObjectFromLength() && firstUse) {
		proverb.forEach(word => word.classList.add('show-text'));

		timeoutDisplayingPhotos(wrapMiniImg, 'show', 200);

		setTimeout(() => {
			bigArrowIcon.classList.add('show-arrow');
		},1000);
		firstUse = false;
	}

	if (cookingMethodTopLength < subtractCookingMethodObjectFromLength()) {
		timeoutDisplayingPhotos(slide, 'show-cooking', 500);

		setTimeout(() => {
			cookingMethodRotated.classList.add('show-descriptor');
		},1000);
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

	if (middleBlockRelativeWindow() > questionTopLength - 250) {
		// questions.forEach(question => {
		// 	if (question.classList.contains('active-qstn')) {
		//
		// 	}
		// });
		parallaxWrap.style.overflow = 'hidden';
	}
});

function timeoutDisplayingPhotos(whom, active, time) {
	for (let i = 0; i < whom.length; i++) {
		(function(index) {
			setTimeout(() => {
				whom[index].classList.add(active);
			}, 1 + (time * index));
		})(i)
	}
}

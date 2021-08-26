export const MySlider = (sliderWrap, sliderArguments = null) => {
	const slider = document.querySelector(sliderWrap);
	const sliderList = slider.children[0];
	const sliderTrack = sliderList.children[0];
	const slides = [...sliderTrack.children];
	const slideWidth = slides[0].offsetWidth;
	let slideIndex = 0;
	let posInit = 0;
	let posX1 = 0;
	let posX2 = 0;
	let posY1 = 0;
	let posY2 = 0;
	let posFinal = 0;
	let isSwipe = false;
	let isScroll = false;
	let allowSwipe = true;
	let transition = true;
	let nextTrf = 0;
	let prevTrf = 0;
	let lastTrf = slides.length * slideWidth;
	let posThreshold = slides[0].offsetWidth * 0.35;

	let trfRegExp = /([-0-9.]+(?=px))/;
	let swipeStartTime;
	let swipeEndTime;

	const getEvent = () => {
		return (event.type.search('touch') !== -1) ? event.touches[0] : event;
	};

	const slide = () => {
		if (transition) {
			sliderTrack.style.transition = 'transform 1s cubic-bezier(0.25, 0.74, 0.22, 1.1)';
		}
		sliderTrack.style.transform
			= sliderArguments.vertical ?
				`translateY(-${slideIndex * slideWidth}px)` :
				`translateX(-${slideIndex * slideWidth}px)`;
	};

	const swipeStart = () => {
		let evt = getEvent();

		if (slides) {

			swipeStartTime = Date.now();

			transition = true;

			nextTrf = (slideIndex + 1) * -slideWidth;
			prevTrf = (slideIndex - 1) * -slideWidth;

			posInit = posX1 = evt.clientX;
			posY1 = evt.clientY;

			sliderTrack.style.transition = '';

			document.addEventListener('touchmove', swipeAction);
			document.addEventListener('mousemove', swipeAction);
			document.addEventListener('touchend', swipeEnd);
			document.addEventListener('mouseup', swipeEnd);

			sliderList.classList.remove('grab');
			sliderList.classList.add('grabbing');
		}
	};

	const swipeAction = () => {
		const evt = getEvent();
		const style = sliderTrack.style.transform;
		const transform = +style.match(trfRegExp)[0];

		posX2 = posX1 - evt.clientX;
		posX1 = evt.clientX;

		posY2 = posY1 - evt.clientY;
		posY1 = evt.clientY;

		if (!isSwipe && !isScroll) {
			let posY = Math.abs(posY2);
			if (posY > 7 || posX2 === 0) {
				isScroll = true;
				allowSwipe = false;
			} else if (posY < 7) {
				isSwipe = true;
			}
		}

		if (isSwipe) {
			if (slideIndex === 0) {
				if (posInit < posX1) {
					setTransform(transform, 0);
					return;
				} else {
					allowSwipe = true;
				}
			}

			// запрет ухода вправо на последнем слайде
			if (slideIndex === slides.length) {
				if (posInit > posX1) {
					setTransform(transform, lastTrf);
					return;
				} else {
					allowSwipe = true;
				}
			}

			if (posInit > posX1 && transform < nextTrf || posInit < posX1 && transform > prevTrf) {
				reachEdge();
				return;
			}

			sliderTrack.style.transform =
				sliderArguments.vertical ?
					`translateY(${transform - posX2}px)` :
					`translateX(${transform - posX2}px)`;

		}

	};

	const swipeEnd = () => {
		posFinal = posInit - posX1;

		isScroll = false;
		isSwipe = false;

		document.removeEventListener('touchmove', swipeAction);
		document.removeEventListener('mousemove', swipeAction);
		document.removeEventListener('touchend', swipeEnd);
		document.removeEventListener('mouseup', swipeEnd);

		sliderList.classList.add('grab');
		sliderList.classList.remove('grabbing');

		if (allowSwipe) {
			swipeEndTime = Date.now();
			if (Math.abs(posFinal) > posThreshold || swipeEndTime - swipeStartTime < 300) {
				if (posInit < posX1) {
					slideIndex--;
				} else if (posInit > posX1) {
					slideIndex++;
				}
			}

			if (posInit !== posX1) {
				allowSwipe = false;
				slide();
			} else {
				allowSwipe = true;
			}

		} else {
			allowSwipe = true;
		}
	};

	const setTransform = (transform, comapreTransform) => {
		if (transform >= comapreTransform) {
			if (transform > comapreTransform) {
				sliderTrack.style.transform =
					sliderArguments.vertical ?
						`translateY(${comapreTransform}px)` :
						`translateX(${comapreTransform}px)`;

			}
		}
		allowSwipe = false;
	};

	const reachEdge = () => {
		transition = false;
		swipeEnd();
		allowSwipe = true;
	};

	sliderTrack.style.transform =
		sliderArguments.vertical ?
			`translateY(0)` :
			`translateX(0)`;
	sliderList.classList.add('grab');

	sliderTrack.addEventListener('transitionend', () => allowSwipe = true);
	slider.addEventListener('touchstart', swipeStart);
	slider.addEventListener('mousedown', swipeStart);
};



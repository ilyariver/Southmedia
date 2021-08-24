const tickerText = document.querySelector('.js-ticker-text');

window.onscroll = function(ev) {

	// if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
	// 	const span = document.createElement('span')
	// 	span.innerHTML = 'Блюда из гречки&nbsp;'
	// 	tickerText.appendChild(span)
	// }
	
	

	if (window.pageYOffset >= 500 && window.pageYOffset < 700) {
		const span = document.createElement('span')
		span.innerHTML = 'Блюда из гречки&nbsp;'
		tickerText.appendChild(span)
	}

	if (window.pageYOffset < 500) {
		tickerText.innerHTML = ''

		const span = document.createElement('span')
		span.innerHTML = 'Блюда из гречки&nbsp;'
		tickerText.appendChild(span)
	}

	tickerText.style.transform = `translateX(-${window.pageYOffset / 2}px)`
}

const tickerText = document.querySelector('.js-ticker-text');

window.onscroll = function(ev) {

	if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
		const span = document.createElement('span')
		span.innerHTML = 'Блюда из гречки&nbsp;'
		tickerText.appendChild(span)
	}

	tickerText.style.transform = `translateX(${window.pageYOffset / 2}%)`
	console.log(window.pageYOffset)
}

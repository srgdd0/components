const humb = document.querySelector('#humb')
const popup = document.querySelector('#popup')
const menu = document.querySelector('#menu').cloneNode(1)

humb.addEventListener('click', handler)

function handler(e) {
	e.preventDefault()
	popup.appendChild(menu)
	popup.classList.toggle('open')
}

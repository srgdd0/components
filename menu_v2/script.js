const hamb = document.querySelector('.hamb')
let menu = document.querySelector('.menu').cloneNode(1)
let popup = document.querySelector('.popup-menu')
popup.appendChild(menu)

hamb.addEventListener('click', handler)

function handler(e) {
	e.preventDefault()
	popup.appendChild(menu)
	popup.classList.toggle('open')
}

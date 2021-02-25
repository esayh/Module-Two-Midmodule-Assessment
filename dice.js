const diceArr = [
	{ dice: '&#9856', value: 1 },
	{ dice: '&#9857', value: 2 },
	{ dice: '&#9858', value: 3 },
	{ dice: '&#9859', value: 4 },
	{ dice: '&#9860', value: 5 },
	{ dice: '&#9861', value: 6 },
]
document.addEventListener('DOMContentLoaded', () => {
	const input = document.querySelector('input')
	const history = document.querySelector('#history')
	const btn = document.querySelector('button')
	const para = document.querySelector('#dice-para')
	const sum = document.querySelector('#sum-para')
	const ul = document.createElement('ul')
	document.body.appendChild(ul)

	btn.addEventListener('click', () => {
		getDice()
	})
	let clicks = 0
	function getDice() {
		let add = 0
		para.innerHTML = ''
		for (let i = 0; i < input.value; i++) {
			let randDice = Math.floor(Math.random() * diceArr.length)
			para.innerHTML += diceArr[randDice].dice
			add += diceArr[randDice].value
		}

		sum.textContent = `Sum = ${add}`

		clicks++
		if (clicks > 1) {
			const li = document.createElement('li')
			ul.appendChild(li)
			li.textContent = `${para.innerHTML} = ${add}`
		}
	}
})

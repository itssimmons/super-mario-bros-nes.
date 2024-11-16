import Mario from "./Components/Mario"

function main()
{
	const c = document.querySelector('#gameplay') as HTMLCanvasElement,
		ctx = c.getContext('2d')

	c.width = window.innerWidth
	c.height = window.innerHeight

	const m = new Mario()
	m.sayHello('Sandra 😀')
}

document.addEventListener('DOMContentLoaded', main)
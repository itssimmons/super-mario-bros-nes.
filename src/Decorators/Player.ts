export default function Player(constructor: any)
{
	return class extends constructor {
		sayHello(n: string) {
			console.log('hola ' + n)
		}
	}
}

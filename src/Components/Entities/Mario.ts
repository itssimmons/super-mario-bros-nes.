import Player from "~/Decorators/Player";

@Player
class Mario
{

	constructor()
	{
		// ...
	}

}

interface Mario
{
	sayHello(n: string): void
}


export default Mario

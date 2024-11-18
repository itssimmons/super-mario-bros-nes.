import { FontWeight } from 'Declarations/Engine/core';
import ENGINE from './Engine';

class Game
{	
    private readonly targetFPS: number = 60;
    private readonly interval: number = 1000 / this.targetFPS;

	private fps: number = 0;
	private fpsCounter: number = 0
	private fpsTimer: number = 0

	private then: number = performance.now();
	private delta: number = 0;

	private loop( timestamp: number = performance.now() )
	{
		requestAnimationFrame( this.loop.bind( this ) );

		this.delta = timestamp - this.then;

		if ( this.delta > this.interval )
		{
			this.then = timestamp - ( this.delta % this.interval );

			this.update();
			this.render();

			// Monitoring FPS...
			this.fpsCounter++;

			if ( timestamp - this.fpsTimer >= 1000 ) {
				this.fps = this.fpsCounter;
				this.fpsCounter = 0;
				this.fpsTimer = timestamp;
			}
		}
	}

	private update()
	{
		// console.log( this.fps )
		// ...
	}

	private render()
	{
		ENGINE.Clear();

		const font = new ENGINE.Font(
			`${this.fps} fps`,
			{
				size: 12,
				color: 0xfff,
				family: 'monospace',
				weight: FontWeight.Heavy,
			}
		);

		font.coordinates.x = ENGINE.Dimensions.width - 48;
		font.coordinates.y = 5;

		font.draw();

		const box = new ENGINE.Box( 50, 50, { color: 0xfff } );

		box.coordinates.x = ENGINE.Dimensions.width / 2;
		box.coordinates.y = ENGINE.Dimensions.height / 2;

		box.rotation.x -= 0.5;

		box.draw();
	}

	constructor()
	{
		// ...
	}

	public start()
	{
		requestAnimationFrame( this.loop.bind ( this ) );
	}
}

export default Game;

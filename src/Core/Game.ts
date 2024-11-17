import { FontWeight } from '~/Declarations/Engine/core';
import ENGINE from './Engine';

class Game
{
	private readonly targetFPS = 60;
	private readonly frameDuration = 1000 / this.targetFPS;
	
	private lastTime = performance.now();
    private fps = 0;
    private fpsInterval = 0;
    private frames = 0;

	private loop( timestamp: number = 0 )
	{
		const deltaTime = timestamp - this.lastTime;

		if ( deltaTime >= this.frameDuration )
		{
			this.lastTime = timestamp - ( deltaTime % this.frameDuration );

			this.update();
			this.render();

			this.frames++;
			this.fpsInterval += deltaTime;
			if (this.fpsInterval >= 1000)
			{
				this.fps = this.frames;
				this.frames = 0;
				this.fpsInterval = 0;
			}
		}

		requestAnimationFrame( this.loop.bind( this ) );
	}

	private update()
	{
		// Game state here...
	}

	private render()
	{
		// Game renders here...
		ENGINE.Clear();

		ENGINE.Font(
			`${this.fps} fps`,
			{
				size: 12,
				color: 0xfff,
				family: 'monospace',
				coords: { x: ENGINE.Dimensions.width - 48, y: 5 },
				weight: FontWeight.Heavy,
			}
		);
	}



	constructor()
	{
		// ...
	}

	public start( )
	{
		requestAnimationFrame( this.loop.bind ( this ) );
	}
}

export default Game;

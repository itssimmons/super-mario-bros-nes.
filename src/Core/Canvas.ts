import "~/Stylesheets/UI/canvas.css"

class Canvas
{
	private c: HTMLCanvasElement;
	private ctx: CanvasRenderingContext2D;

	constructor( width: number, height: number )
	{
		this.c = document.querySelector( '#game' ) as HTMLCanvasElement;
		this.c.width = width;
		this.c.height = height;

		this.ctx = this.c.getContext( '2d' ) as CanvasRenderingContext2D;
	}

	public getContext()
	{
		return this.ctx;
	}
}

export default Canvas

import ColorTool from "~Tools/Color.tool";
import Canvas from "./Canvas";
import { FontWeight } from "~/Declarations/Engine/core";

namespace ENGINE
{
	const ge = new Canvas( 820, 480 );
	const ctx = ge.getContext()
	const canvas = ctx.canvas


	export function Clear()
	{
		ctx.clearRect( 0, 0, this.canvas.width, this.canvas.height )

	}
}

class X
{

	constructor( context: CanvasRenderingContext2D )
	{

		this.Dimensions =
		{
			height: this.canvas.height,
			width: this.canvas.width
		}
	}


	public Clear()
	{
	}

	public Geometry( width: number, height: number )
	{
		return []
	}

	public Mesh( )
	{
		return ;
	}

	public Box( width, height )
	{
		this.ctx.beginPath();
		this.ctx.rect(x, y, width, height);
		this.ctx.fillStyle = "color";
		this.ctx.fill();
		this.ctx.closePath();

		return 
	}

	public Texture( )
	{
		return ;
	}

	public Font(
		text: string,
		{
			size,
			family,
			coords = { x: 0, y: 0 },
			color = 0xfff,
			weight = FontWeight.Normal,
			align = 'start',
			kerning = 'none',
			rendering = 'auto',
			baseline = 'top',
			variants = 'normal',
			stretch = 'normal',
			stroke = false
		}: FontOptions
	)
	{
		this.ctx.font = `${weight} ${size}px ${family}`
		this.ctx.fontKerning = kerning
		this.ctx.fontStretch = stretch
		this.ctx.fontVariantCaps = variants

		this.ctx.textRendering = rendering
		this.ctx.textBaseline = baseline
		this.ctx.textAlign = align

		if ( !stroke )
		{
			this.ctx.fillStyle = ColorTool.toHex( color )
			this.ctx.fillText( text, coords.x, coords.y )
		}
		else
		{
			this.ctx.strokeStyle = ColorTool.toHex( color )
			this.ctx.strokeText( text, coords.x, coords.y )
		}
	}

}

export default ENGINE
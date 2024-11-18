import { FontWeight } from "Declarations/Engine/core";
import type { Engine } from "Declarations/Engine/index";
import ColorTool from "~Tools/Color.tool";
import Canvas from "./Canvas";

namespace ENGINE
{
	const ge = new Canvas( 820, 480 );
	const ctx = ge.getContext()
	const canvas = ctx.canvas

	export const Dimensions =
	{
		height: canvas.height,
		width: canvas.width
	} as const

	export function Clear()
	{
		ctx.clearRect( 0, 0, Dimensions.width, Dimensions.height )
	}

	export class Axis3
	{
		private _x: number = 0
		private _y: number = 0
		private _z: number = 0
		public onChangeCallback: VoidFunction | null

		constructor( x: number = 0, y: number = 0, z: number = 0 )
		{
			this._z = x;
			this._y = y;
			this._z = z;
			this.onChangeCallback = null
		}

		public get x() { return this._x }

		public set x( value: number )
		{
			this._x = value
			this.onChangeCallback?.()
		}

		public get y() { return this._y }

		public set y( value: number )
		{
			this._y = value
			this.onChangeCallback?.()
		}

		public get z() { return this._z }

		public set z( value: number )
		{
			this._z = value
			this.onChangeCallback?.()
		}
	}

	export class Font
	{
		private text: string = String();
		private color: number = 0xfff;
		private stroke: boolean = false;
		private weight!: Engine.FontOptions['weight'];
		private size!: Engine.FontOptions['size'];
		private family!: Engine.FontOptions['family'];
		private kerning!: NonNullable<Engine.FontOptions['kerning']>;
		private stretch!: NonNullable<Engine.FontOptions['stretch']>;
		private variants!: NonNullable<Engine.FontOptions['variants']>;
		private rendering!: NonNullable<Engine.FontOptions['rendering']>;
		private baseline!: NonNullable<Engine.FontOptions['baseline']>;
		private align!: NonNullable<Engine.FontOptions['align']>;
		
		public draw()
		{
			ctx.save()

			ctx.font = `${this.weight} ${this.size}px ${this.family}`
			ctx.fontKerning = this.kerning
			ctx.fontStretch = this.stretch
			ctx.fontVariantCaps = this.variants
			ctx.textRendering = this.rendering
			ctx.textBaseline = this.baseline
			ctx.textAlign = this.align

			if ( !this.stroke )
			{
				ctx.fillStyle = ColorTool.toHex( this.color )
				ctx.fillText( this.text, this.coordinates.x, this.coordinates.y )
			}
			else
			{
				ctx.strokeStyle = ColorTool.toHex( this.color )
				ctx.strokeText( this.text, this.coordinates.x, this.coordinates.y )
			}

			ctx.restore()
		}

		public coordinates!: Axis3

		constructor(
			text: string,
			{
				size,
				family,
				color = 0xfff,
				weight = FontWeight.Normal,
				align = 'start',
				kerning = 'none',
				rendering = 'auto',
				baseline = 'top',
				variants = 'normal',
				stretch = 'normal',
				stroke = false
			}: Engine.FontOptions
		)
		{
			this.coordinates = new Axis3()

			this.text = text;
			this.color = color;
			this.stroke = stroke;

			this.size = size;
			this.family = family;
			this.weight = weight;
			this.align = align;
			this.kerning = kerning;
			this.rendering = rendering;
			this.baseline = baseline;
			this.variants = variants;
			this.stretch = stretch;
		}
	}

	export class Box
	{
		private width: number = 0;
		private height: number = 0;
		private color: number = 0x000;
		private stroke: boolean = false;

		public coordinates!: Axis3;
		public rotation!: Axis3;

		constructor(
			width: number,
			height: number,
			{
				stroke = false,
				color = 0x000
			}: Engine.BoxOptions
		)
		{
			this.coordinates = new Axis3()
			this.rotation = new Axis3()

			this.width = width;
			this.height = height;
			this.color = color
			this.stroke = stroke


		}

		public draw()
		{
			ctx.save();

			ctx.translate( this.coordinates.x, this.coordinates.y );
			ctx.rotate( ( this.rotation.x * Math.PI ) / 100 )

			this.rotation.onChangeCallback = () =>
				{
					ctx.rotate( ( this.rotation.x *  Math.PI ) / 100 )
				}

			if ( !this.stroke )
			{
				ctx.fillStyle = ColorTool.toHex( this.color );
				ctx.fillRect(
					-this.width / 2,
					-this.height / 2,
					this.width,
					this.height
				);
			}
			else
			{
				ctx.strokeStyle = ColorTool.toHex( this.color );
				ctx.strokeRect(
					-this.width / 2,
					-this.height / 2,
					this.width,
					this.height
				);
			}

			ctx.restore();
		}

		public rotate( speed: number )
		{
			this.rotation.x += speed
		}
	}
}

export default ENGINE

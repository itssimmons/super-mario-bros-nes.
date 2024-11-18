export namespace Engine
{
	interface FontOptions
	{
		size: number
		family: string
		color?: Hex
		weight?: NumericFontWeight
		align?: CanvasTextAlign
		baseline?: CanvasTextBaseline,
		rendering?: CanvasTextRendering,
		stretch?: CanvasFontStretch,
		variants?: CanvasFontVariantCaps
		kerning?: CanvasFontKerning
		stroke?: boolean,
	}
	
	interface BoxOptions
	{
		color?: Hex
		stroke?: boolean,
	}
}
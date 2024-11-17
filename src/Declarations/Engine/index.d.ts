interface FontOptions
{
	size: number
	family: string
	coords: Coordinates
	color?: Hex
	weight?: NumericFontWeight
	align?: CanvasTextAlign
	baseline?: CanvasTextBaseline,
	rendering?: CanvasTextRendering,
	stretch?: CanvasFontStretch,
	variants?: CanvasFontVariantCaps
	stroke?: boolean,
	kerning?: CanvasFontKerning
}
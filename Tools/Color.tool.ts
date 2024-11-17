class ColorTool
{
	constructor()
	{
		// ...
	}

	public static toHex( hex: number )
	{
		return '#' + hex.toString( 16 ).toUpperCase();
	}
	
}

export default ColorTool
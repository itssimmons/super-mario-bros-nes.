class System
{
	public static createFooter()
	{
		const footerEl = document.createElement('footer')

		footerEl.innerHTML = /*html */`
		<div>
			<img />
			<p>UNMUTE</p>
		</div>
		<div>
			<img />
			<p>FULL SCREEN</p>
		</div>
		`
	}
}
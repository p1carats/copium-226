let setTexture = (button, texture) => button.setTexture(texture);

export function buttonEvents(button, spriteDefault, spriteOver, actionOnClick, soundClick) {
	button.on('pointerdown', () => {
		soundClick.play(),
		actionOnClick()
	})
		.on('pointerover', () => setTexture(button, spriteOver))
		.on('pointerout', () => setTexture(button, spriteDefault));
}
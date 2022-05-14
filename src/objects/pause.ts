// pause button and trigger
let pauseButton: Phaser.GameObjects.Sprite = this.add.sprite(50, 50, Assets.PauseButton).setOrigin(0).setInteractive();
pauseButton.on('pointerover', () => { pauseButton.setTexture(Assets.PauseButtonHover) });
pauseButton.on('pointerout', () => { pauseButton.setTexture(Assets.PauseButton) });
pauseButton.on('pointerdown', () => {
	clickedSound.play();
	roomMusic.pause();
	this.scene.launch('PauseMenu', { sceneFrom: this.scene.key }).bringToTop();
	this.scene.sendToBack();
	this.scene.pause();
});
export default class PauseMenu extends Phaser.Scene {

	constructor() {
		super('PauseMenu');
	}

	preload() {
		// preload
	}

	create() {
		let clickedSound = this.sound.add('click');
		// temporary textures and emplacements
		let resumeButton = this.add.sprite(850, 540, 'playButton').setInteractive();
		let quitButton = this.add.sprite(280, 540, 'playButton').setOrigin(0).setInteractive();

		// resume game
		resumeButton.on('pointerdown', () => {
			clickedSound.play(),
			this.scene.resume('TemplateDialogue')
		});

		// quit game
		quitButton.on('pointerdown', () => {
			clickedSound.play(),
			this.scene.stop('TemplateDialogue'),
			this.scene.start('TitleScreen')
		});
	}
}
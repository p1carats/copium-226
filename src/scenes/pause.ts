export default class PauseMenu extends Phaser.Scene {

	constructor() {
		super('PauseMenu');
	}

	preload() {
		// preload
	}

	create() {
		let clickedSound = this.sound.add('click');

		// resume game
		const resumeButton = this.add.sprite(850, 540, 'playButton').setInteractive();
		resumeButton.on('pointerdown', () => {
			clickedSound.play(),
			this.scene.resume('TemplateDialogue'),
			this.scene.stop
		});

		// quit game
		const quitButton = this.add.sprite(280, 540, 'playButton').setOrigin(0).setInteractive();
		quitButton.on('pointerdown', () => {
			clickedSound.play(),
			this.scene.stop('TemplateDialogue'),
			this.scene.start('TitleScreen')
		});
	}
}
import {Textures} from "../assets";

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
		resumeButton.setVisible(true);
		resumeButton.on('pointerdown', () => {
			clickedSound.play();
			this.scene.run('TemplateDialogue');
			this.scene.sleep();
		});

		// quit game
		const quitButton = this.add.sprite(280, 540, 'playButton').setOrigin(0).setInteractive();
		quitButton.setVisible(true);
		quitButton.on('pointerdown', () => {
			clickedSound.play();
			this.scene.stop('TemplateDialogue');
			this.scene.start('TitleScreen');
		});
	}
}
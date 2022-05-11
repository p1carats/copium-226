import { Textures } from "../assets";
import dialogBox from "../objects/dialogBox";

export default class TemplateDialogue extends Phaser.Scene {

	constructor() {
		super('TemplateDialogue');
	}

	preload() {
	}

	create() {
		this.cameras.main.fadeIn(2000, 0, 0, 0);

		// background
		// let background = this.add.tileSprite(this.scale.width/2, this.scale.height/2, this.scale.width, this.scale.height, Textures.Village);
		let background = this.add.sprite(920, 470, 'bedroombg').setScale(2, 2);
		background.setPipeline('Light2D');

		// light effects
		this.lights.addLight(900, 280, 400, 0xffffff, 1);
		this.lights.enable().setAmbientColor(0x555555);

		// music (room theme, looped) and click sound
		let clickedSound = this.sound.add('click');
		let roomMusic = this.sound.add('room_theme');
		roomMusic.play('', { loop: true });

		// dialogbox
		dialogBox(this, Textures.GeorgeRight, 'This is Elon Musk');

		// pause button and trigger
		let pauseButton = this.add.sprite(0, 0, 'pauseButton').setOrigin(0).setInteractive();
		pauseButton.on('pointerover', () => { pauseButton.setTexture('pauseButtonHover') });
		pauseButton.on('pointerout', () => { pauseButton.setTexture('pauseButton') });
		pauseButton.on('pointerdown', () => {
			clickedSound.play(),
			pauseButton.setVisible(false),
			roomMusic.pause(),
			this.scene.launch('PauseMenu'),
			this.scene.pause()
		});
	}
}
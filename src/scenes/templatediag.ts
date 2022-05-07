import { createDialogBox } from "../lib/animations";
import timer from "../lib/timer";
import PauseMenu from "./pause";

export default class TemplateDialogue extends Phaser.Scene {

	constructor() {
		super('TemplateDialogue');
	}

	preload() {
		// preload
	}

	create() {
		this.cameras.main.fadeIn(2000, 0, 0, 0);

		// background
		let background = this.add.sprite(920, 470, 'bedroombg').setScale(2, 2);
		background.setPipeline('Light2D');

		// light effects
		this.lights.addLight(900, 280, 400, 0xffffff, 1);
		this.lights.enable().setAmbientColor(0x555555);

		// pause button (settings texture, this is temporary)
		let pauseButton = this.add.sprite(70, 70, 'settingsButton').setInteractive();

		// content
		let dialogBox = this.add.sprite(-500, 800, 'dialogBox').setAlpha(0.9);
		let perso = this.add.sprite(-730, 538, 'boss');

		// music (room theme, looped) and click sound
		let clickedSound = this.sound.add('click');
		let roomMusic = this.sound.add('room_theme');
		roomMusic.play('', { loop: true });

		// dialogbox
		let callback = () => createDialogBox(this, dialogBox, perso, ['', '', '']);
		timer(this, 3000, callback, false, 0);

		// pause trigger
		pauseButton.on('pointerover', () => { pauseButton.setTexture('settingsButtonHover') });
		pauseButton.on('pointerout', () => { pauseButton.setTexture('settingsButton') });
		pauseButton.on('pointerdown', () => {
			clickedSound.play(),
			roomMusic.pause(),
			this.scene.launch('PauseMenu').setActive,
			// button is not visible for now (but clickable), i'm working on it!
			this.scene.pause()
		});
	}
}
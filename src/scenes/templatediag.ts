import { createDialogBox } from "../lib/animations";
import timer from "../lib/timer";

export default class TemplateDialogue extends Phaser.Scene {

	constructor() {
		super('TemplateDialogue');
	}

	preload() {
		// allows us to specify images, audio, or other assets to load before starting the scene
		this.load.image('background', 'assets/background/scenes/bedroom.jpg');
		this.load.image('dialogBox', 'assets/dialogbox.png');
		this.load.image('boss', 'assets/characters/Boss_Green_Horizon.png');
		this.load.audio('room_theme', 'assets/sounds/room.ogg');
	}

	create() {
		this.cameras.main.fadeIn(1000, 0, 0, 0);

		// background
		this.add.sprite(920, 470, 'background').setScale(2, 2);

		// content
		let dialogBox = this.add.sprite(-500, 800, 'dialogBox').setAlpha(0.9);
		let perso = this.add.sprite(-730, 538, 'boss');

		// music (room theme, looped)
		let roomMusic = this.sound.add('room_theme');
		// roomMusic.setLoop(true);
		roomMusic.play();

		let callback = () => createDialogBox(this, dialogBox, perso, ['', '', '']);

		timer(this, 3000, callback, false, 0);

	}
}
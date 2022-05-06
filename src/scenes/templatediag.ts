import {createDialogBox, fadeIn} from "../lib/animations";
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
	}

	create() {

		let background = this.add.image(920, 470, 'background').setScale(2, 2).setAlpha(0);
		let dialogBox = this.add.image(-500, 800, 'dialogBox');
		dialogBox.alpha = 0.6;
		let perso = this.add.image(-730, 538, 'boss');

		let callback = () => createDialogBox(this, dialogBox, perso, ['', '', '']);

		fadeIn(this, background, 3500);

		timer(this, 3000, callback, false, 0);

	}
}
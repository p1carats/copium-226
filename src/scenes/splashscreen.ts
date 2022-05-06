import {blink, fadeOut} from "../lib/animations";
import timer from "../lib/timer";

export default class SplashScreen extends Phaser.Scene {

	constructor() {
		super('SplashScreen');
	}

	preload() {
		this.load.bitmapFont('monogram', 'assets/fonts/monogram-bitmap.json');
		this.load.image('logo', 'assets/logo.png');
		this.load.audio('startingAudio', 'assets/sounds/start.ogg');
	}

	create() {
		let startingAudio = this.sound.add('startingAudio');
		// let text = this.add.bitmapText(100, 100, 'monogram', 'Please click to start...', 40);
		let text = this.add.text(780, 750, 'Please click to start...', { font: '30px monogram', color: 'white' });
		let logo = this.add.image(900, 500, 'logo');
		startingAudio.play();

		blink(this, text, 1500);

		this.input.on('pointerdown', () => {

			fadeOut(this, [text, logo], 1500);
			// changing scene with phaser timer
			timer(this, 1500, () => this.scene.start('TitleScreen'), false, 0);
		});
	}
}
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

		this.tweens.add({
			targets: text,
			alpha: 1,
			duration: 1500,
			yoyo: true,
			loop: -1
		});

		this.input.on('pointerdown', () => {
			// fade in effect
			this.tweens.add({
				targets: [logo, text],
				alpha: 0,
				duration: 1500,
				repeat: -1
			});
			// changing scene with phaser timer
			this.time.addEvent({
				delay: 1500,
				callback: () => this.scene.start('TitleScreen'),
				callbackScope: this,
				loop: false
			});
		});
	}
}
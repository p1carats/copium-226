import { assetsLoader } from '../assets';

export default class SplashScreen extends Phaser.Scene {

	constructor() {
		super('SplashScreen');
	}

	preload() {

		let progressBar = this.add.graphics().fillStyle(0x85edd0, 0.8).fillRect(250, 270, 320, 50);
		let progressBox = this.add.graphics();

		let loadingText = this.add.text(this.scale.width/2, this.scale.height/2-50, 'Loading...', { font: '30px monogram', color: '#ffffff' }).setOrigin(0.5, 0.5);
		
		let percentText = this.add.text(
			this.scale.width/2,
			(this.scale.height/2)-5,
			'0%',
			{
				font: '30px monogram',
				color: '#ffffff'
			}
		);
		percentText.setOrigin(0.5, 0.5);
		
		this.load.on('progress', (value:integer) => {
			percentText.setText((value*100).toFixed(0) + '%');
			progressBar.clear();
			progressBar.fillStyle(0x85edd0, 1);
			progressBar.fillRect((this.scale.width/2)-150, (this.scale.height/2)-15, value*300, 30);
		});

		this.load.on('complete', () => {
			progressBar.destroy();
			progressBox.destroy();
			loadingText.destroy();
			percentText.destroy();
		});

		assetsLoader(this);
	}

	create() {
		this.cameras.main.fadeIn(1000, 0, 0, 0);

		let logo = this.add.image(this.scale.width/2, this.scale.height/2, 'logo');
		let text = this.add.text(845, 800, 'Please click to start...', { font: '30px monogram', color: 'white' });
		this.tweens.add({
			targets: text,
			alpha: 0,
			duration: 1000,
			yoyo: true,
			loop: -1
		});

		this.input.on('pointerdown', () => {
			this.sound.add('startingAudio').play();
			this.cameras.main.fadeOut(1000, 0, 0, 0);
			this.cameras.main.once('camerafadeoutcomplete', () => {
				this.time.delayedCall(1000, () => {
					this.scene.start('TitleScreen');
				});
			});
		}, this);
	}
}
import { assetsLoader, Assets } from '../assets';

export default class SplashScreen extends Phaser.Scene {

	constructor() {
		super({ key: 'SplashScreen' });
	}

	preload() {
		let progressBar: Phaser.GameObjects.Graphics = this.add.graphics().fillStyle(0x85edd0, 0.8).fillRect(250, 270, 320, 50);
		let loadingText: Phaser.GameObjects.Text = this.add.text(this.scale.width/2, this.scale.height/2-50, 'Loading...', { font: '42px monogramextended', color: 'white' }).setOrigin(0.5, 0.5);
		let percentText: Phaser.GameObjects.Text = this.add.text(this.scale.width/2, (this.scale.height/2)-5, '0%', { font: '30px monogramextended', color: 'black' }).setOrigin(0.5);
		
		this.load.on('progress', (value:integer) => {
			percentText.setText((value*100).toFixed(0) + '%');
			progressBar.clear();
			progressBar.fillStyle(0x85edd0, 1);
			progressBar.fillRect((this.scale.width/2)-150, (this.scale.height/2)-15, value*300, 30);
		});

		this.load.on('complete', () => {
			progressBar.destroy();
			loadingText.destroy();
			percentText.destroy();
		});

		assetsLoader(this);
	}

	create() {
		this.cameras.main.fadeIn(1000, 0, 0, 0);

		let clickedSound: Phaser.Sound.BaseSound = this.sound.add(Assets.StartSound);
		let logo: Phaser.GameObjects.Image = this.add.image(this.scale.width/2, this.scale.height/2, Assets.Logo);
		let text: Phaser.GameObjects.Text = this.add.text(this.scale.width/2, (this.scale.height/4)*3, 'Please click to start...', { font: '42px monogramextended', color: 'white' }).setOrigin(0.5, 0.5);
		this.tweens.add({
			targets: text,
			alpha: 0,
			duration: 1000,
			yoyo: true,
			loop: -1
		});

		this.input.on('pointerdown', () => {
			clickedSound.play();
			this.cameras.main.fadeOut(1000, 0, 0, 0);
			this.cameras.main.once('camerafadeoutcomplete', () => {
				this.time.delayedCall(1000, () => {
					this.scene.start('TitleScreen');
					this.scene.stop();
				});
			});
		});
	}
}
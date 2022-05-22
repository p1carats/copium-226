import { Assets } from "../assets";

export default class PauseScene extends Phaser.Scene {

	constructor() {
		super({ key: 'PauseScene' });
	}

	preload() {
		// preload
	}

	create(data) {
		let pauseInSound: Phaser.Sound.BaseSound = this.sound.add(Assets.PauseInSound);
		let pauseOutSound: Phaser.Sound.BaseSound = this.sound.add(Assets.PauseOutSound);
		let gameScene = this.scene.get('GameScene');

		this.scene.bringToTop();

		// pause menu elements
		let title = this.add.text(this.scale.width/2, this.scale.height/3, 'Pause', { font: '108px monogramextended', color: 'white' }).setOrigin(0.5).setAlpha(0);
		let resume = this.add.text(this.scale.width/2, (this.scale.height/2), 'Reprendre', { font: '52px monogramextended', color: 'white' }).setOrigin(0.5).setAlpha(0);
		let options = this.add.text(this.scale.width/2, (this.scale.height/2)+50, 'Options', { font: '52px monogramextended', color: 'white' }).setOrigin(0.5).setAlpha(0);
		let quit = this.add.text(this.scale.width/2, (this.scale.height/2)+100, 'Quitter', { font: '52px monogramextended', color: 'white' }).setOrigin(0.5).setAlpha(0);

		// pause button
		let pauseButton = this.add.sprite(30, 30, Assets.PauseButton).setOrigin(0).setInteractive();
		pauseButton.on('pointerover', () => { pauseButton.setTexture(Assets.PauseButtonHover) });
		pauseButton.on('pointerout', () => { pauseButton.setTexture(Assets.PauseButton) });
		pauseButton.on('pointerdown', () => {
			pauseButton.setAlpha(0).disableInteractive();
			pauseInSound.play();
			gameScene.scene.pause();
			// pause menu elements
			title.setAlpha(1).setInteractive();
			resume.setAlpha(1).setInteractive();
			options.setAlpha(1).setInteractive();
			quit.setAlpha(1).setInteractive();
		});

		// resume game
		resume.on('pointerdown', () => {
			pauseButton.setAlpha(1).setInteractive();
			pauseOutSound.play();
			gameScene.scene.wake();
			// pause menu elements
			title.setAlpha(0).removeInteractive();
			resume.setAlpha(0).removeInteractive();
			options.setAlpha(0).removeInteractive();
			quit.setAlpha(0).removeInteractive();
		});

		// option menu
		options.on('pointerdown', () => {
			this.input.enabled = false;
			pauseOutSound.play();
			this.cameras.main.fadeOut(1000, 0, 0, 0);
			this.cameras.main.once('camerafadeoutcomplete', () => {
				this.time.delayedCall(2000, () => {
					this.scene.start('SettingsScene', { sceneFrom: this.scene.key });
				});
			});
		});

		// quit game
		quit.on('pointerdown', () => {
			this.input.enabled = false;
			pauseOutSound.play();
			this.cameras.main.fadeOut(1000, 0, 0, 0);
			this.cameras.main.once('camerafadeoutcomplete', () => {
				this.time.delayedCall(2000, () => {
					// pause menu elements
					title.setAlpha(0).removeInteractive();
					resume.setAlpha(0).removeInteractive();
					options.setAlpha(0).removeInteractive();
					quit.setAlpha(0).removeInteractive();
					this.scene.start('TitleScreen');
					gameScene.scene.stop();
					this.scene.stop();
				});
			});
		});
	}
}
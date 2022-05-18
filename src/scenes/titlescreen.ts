import { Assets } from "../assets";
import animation from "../objects/animation";

export default class TitleScreen extends Phaser.Scene {

	constructor() {
		super({ key: 'TitleScreen' });
	}

	preload() {
		// preload
	}

	create() {

		// fade in scene
		this.cameras.main.fadeIn(1000, 0, 0, 0);

		// background effect
		animation(this, 'titlescreenAnim', [
			{ key: Assets.TitleScreen1 },
			{ key: Assets.TitleScreen2 },
			{ key: Assets.TitleScreen3 },
			{ key: Assets.TitleScreen4 },
			{ key: Assets.TitleScreen5 },
			{ key: Assets.TitleScreen6 },
		])

		// menu music (looped) and click sound
		let menuMusic: Phaser.Sound.BaseSound = this.sound.add(Assets.MainTheme);
		let click: Phaser.Sound.BaseSound = this.sound.add(Assets.ClickSound);
		menuMusic.play('', { loop: true });

		// layout (background and title)
		let background: Phaser.GameObjects.Sprite = this.add.sprite(0, 0, Assets.TitleScreen1).setOrigin(0).play('titlescreenAnim');
		let title: Phaser.GameObjects.Image = this.add.image(this.scale.width/2, this.scale.height/4, Assets.Title).setAlpha(0);

		// buttons
		let playButton: Phaser.GameObjects.Sprite = this.add.sprite(850, 540, Assets.PlayButton).setAlpha(0);
		let settingsButton: Phaser.GameObjects.Sprite = this.add.sprite(1100, 500, Assets.SettingsButton).setAlpha(0);
		let aboutButton: Phaser.GameObjects.Sprite = this.add.sprite(1100, 580, Assets.AboutButton).setAlpha(0);

		// fade in effect
		this.time.delayedCall(2500, () => {
			this.tweens.add({
				targets: [title, playButton, settingsButton, aboutButton],
				alpha: 1,
				duration: 2000,
				repeat: 0
			});
			playButton.setInteractive();
			settingsButton.setInteractive();
			aboutButton.setInteractive();
		});

		// play button actions
		playButton.on('pointerover', () => { playButton.setTexture(Assets.PlayButtonHover) });
		playButton.on('pointerout', () => { playButton.setTexture(Assets.PlayButton) });
		playButton.on('pointerdown', () => {
			click.play(),
			this.tweens.add({
				targets: menuMusic,
				volume: 0,
				ease: 'Linear',
				duration: 1500
			});
			this.cameras.main.fadeOut(1000, 0, 0, 0);
			this.cameras.main.once('camerafadeoutcomplete', () => {
				this.time.delayedCall(2000, () => {
					this.scene.start('TemplateDialogue');
				});
			});
		});

		// settings button actions
		settingsButton.on('pointerover', () => { settingsButton.setTexture(Assets.SettingsButtonHover) });
		settingsButton.on('pointerout', () => { settingsButton.setTexture(Assets.SettingsButton) });
		settingsButton.on('pointerdown', () => {
			click.play(),
			this.tweens.add({
				targets: menuMusic,
				volume: 0,
				ease: 'Linear',
				duration: 1500
			});
			this.cameras.main.fadeOut(1000, 0, 0, 0);
			this.cameras.main.once('camerafadeoutcomplete', () => {
				this.time.delayedCall(1000, () => {
					this.scene.start('SettingsScene', { sceneFrom: this.scene.key });
				});
			});
		});

		aboutButton.on('pointerover', () => { aboutButton.setTexture(Assets.AboutButtonHover) });
		aboutButton.on('pointerout', () => { aboutButton.setTexture(Assets.AboutButton) });
		aboutButton.on('pointerdown', () => {
			click.play();
		});
	}
}
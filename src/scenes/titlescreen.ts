import { Textures } from "../assets";

export default class TitleScreen extends Phaser.Scene {

	constructor() {
		super('TitleScreen');
	}

	preload() {
		// preload
	}

	// called once all the assets for the scene have been loaded
	create() {
		// fade in scene
		this.cameras.main.fadeIn(1000, 0, 0, 0);

		// background effect
		this.anims.create({
			key: 'titlescreenAnim',
			frames: [
				{ key: Textures.TitleScreen1 },
				{ key: Textures.TitleScreen2 },
				{ key: Textures.TitleScreen3 },
				{ key: Textures.TitleScreen4 },
				{ key: Textures.TitleScreen5 },
				{ key: Textures.TitleScreen6 },
			],
			frameRate: 2,
			repeat: -1
		});

		// menu music (looped) and click sound
		let menuMusic = this.sound.add('main_theme');
		let clickedSound = this.sound.add('click');
		menuMusic.play('', { loop: true });

		// layout (background and title)
		this.add.sprite(960, 540, Textures.TitleScreen1).play('titlescreenAnim');
		let title: Phaser.GameObjects.Image = this.add.image(this.scale.width/2, this.scale.height/4, Textures.Title).setAlpha(0);

		// buttons
		let playButton: Phaser.GameObjects.Sprite = this.add.sprite(850, 540, Textures.PlayButton).setAlpha(0);
		let settingsButton: Phaser.GameObjects.Sprite = this.add.sprite(1100, 500, Textures.SettingsButton).setAlpha(0);
		let aboutButton: Phaser.GameObjects.Sprite = this.add.sprite(1100, 580, Textures.AboutButton).setAlpha(0);

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
		playButton.on('pointerover', () => { playButton.setTexture(Textures.PlayButtonHover) });
		playButton.on('pointerout', () => { playButton.setTexture(Textures.PlayButton) });
		playButton.on('pointerdown', () => {
			clickedSound.play(),
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
		settingsButton.on('pointerover', () => { settingsButton.setTexture(Textures.SettingsButtonHover) });
		settingsButton.on('pointerout', () => { settingsButton.setTexture(Textures.SettingsButton) });
		settingsButton.on('pointerdown', () => {
			clickedSound.play(),
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

		aboutButton.on('pointerover', () => { aboutButton.setTexture(Textures.AboutButtonHover) });
		aboutButton.on('pointerout', () => { aboutButton.setTexture(Textures.AboutButton) });
		settingsButton.on('pointerdown', () => {
			// to-do
		});
	}
}
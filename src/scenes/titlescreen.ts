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
				{ key: 'titlescreen1' },
				{ key: 'titlescreen2' },
				{ key: 'titlescreen3' },
				{ key: 'titlescreen4' },
				{ key: 'titlescreen5' },
				{ key: 'titlescreen6' },
			],
			frameRate: 2,
			repeat: -1
		});

		// menu music (looped) and click sound
		let menuMusic = this.sound.add('main_theme');
		let clickedSound = this.sound.add('click');
		menuMusic.play('', { loop: true });

		// layout (background and title)	
		this.add.sprite(960, 540, 'titlescreen1').play('titlescreenAnim');
		const title = this.add.sprite(this.scale.width/2, this.scale.height/4, 'title').setAlpha(0);

		// buttons
		const playButton = this.add.sprite(850, 540, 'playButton').setAlpha(0);
		const settingsButton = this.add.sprite(1100, 500, 'settingsButton').setAlpha(0);
		const aboutButton = this.add.sprite(1100, 580, 'aboutButton').setAlpha(0);

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

		// about pop-up
		let backgroundMenu = this.add.sprite(900, 540, 'bgMenu').setAlpha(0.4).setVisible(false);
		let exitButton = this.add.sprite(1615, 240, 'exitButton').setScale(0.2, 0.2).setVisible(false);

		// play button actions
		playButton.on('pointerover', () => { playButton.setTexture('playButtonHover') });
		playButton.on('pointerout', () => { playButton.setTexture('playButton') });
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
		settingsButton.on('pointerover', () => { settingsButton.setTexture('settingsButtonHover') });
		settingsButton.on('pointerout', () => { settingsButton.setTexture('settingsButton') });
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
					this.scene.start('SettingsScene');
				});
			});
		});

		aboutButton.on('pointerover', () => { aboutButton.setTexture('aboutButtonHover') });
		aboutButton.on('pointerout', () => { aboutButton.setTexture('aboutButton') });
		settingsButton.on('pointerdown', () => {
			// to-do
		});
	}
}
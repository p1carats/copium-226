import { Assets } from "../assets";

export default class MiniGameScene extends Phaser.Scene {

	constructor() {
		super({ key: 'MiniGameScene' });
	}

	preload() {
		// preload
	}

	create() {
		this.cameras.main.fadeIn(1000, 0, 0, 0);
		
		// click sound and settings theme
		let click: Phaser.Sound.BaseSound = this.sound.add(Assets.ClickSound);
		let theme: Phaser.Sound.BaseSound = this.sound.add(Assets.PowerPlantTheme);
		theme.play('', {
			loop: true
		});

		// background
		let background: Phaser.GameObjects.Sprite = this.add.sprite(0, 0, Assets.ControlRoomScene).setOrigin(0);

		// drawings (tmp)
		let bg1 = this.add.rectangle(600, 150, 720, 360, 0xffffff, 1).setOrigin(0);
		let bg2 = this.add.rectangle(150, 290, 350, 200, 0xffffff, 1).setOrigin(0);

		// pause button and trigger
		let pauseButton: Phaser.GameObjects.Sprite = this.add.sprite(50, 50, Assets.PauseButton).setOrigin(0).setInteractive();
		pauseButton.on('pointerover', () => { pauseButton.setTexture(Assets.PauseButtonHover) });
		pauseButton.on('pointerout', () => { pauseButton.setTexture(Assets.PauseButton) });
		pauseButton.on('pointerdown', () => {
			click.play();
			theme.pause();
			this.scene.launch('PauseMenu', { sceneFrom: this.scene.key }).bringToTop();
			this.scene.sendToBack();
			this.scene.pause();
		});
	}
}
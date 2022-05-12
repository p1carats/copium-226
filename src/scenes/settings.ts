import { Textures } from "../assets";

export default class SettingsScene extends Phaser.Scene {

	constructor() {
		super({ key: 'SettingsScene' });
	}

	preload() {
		// preload
	}

	create(data) {
		this.cameras.main.fadeIn(1000, 0, 0, 0);
		
		// click sound and settings theme
		let clickedSound: Phaser.Sound.BaseSound = this.sound.add('click');
		let settingsTheme: Phaser.Sound.BaseSound = this.sound.add('menu_theme');
		settingsTheme.play('', {
			loop: true,
			seek: 35
		});

		// background
		let background = this.add.rectangle(0, 0, this.scale.width, this.scale.height, 0x000000, 1).setOrigin(0);

		// title
		let title: Phaser.GameObjects.Text = this.add.text(this.scale.width/2, this.scale.height/3, 'Réglages', { font: '108px monogramextended', color: 'white' }).setOrigin(0.5).setInteractive();

		// mute/demute global sound
		let isMuted: boolean = !this.sound.mute;
		let soundcontrol: Phaser.GameObjects.Sprite = this.add.sprite(this.scale.width/2, this.scale.height/2, isMuted ? Textures.MuteButton : Textures.DeMuteButton).setOrigin(0.5).setInteractive();
		soundcontrol.on('pointerover', () => { soundcontrol.setTexture(isMuted ? Textures.MuteButtonHover : Textures.DeMuteButtonHover) });
		soundcontrol.on('pointerout', () => { soundcontrol.setTexture(isMuted ? Textures.MuteButton : Textures.DeMuteButton) });
		soundcontrol.on('pointerdown', () => {
			isMuted = !isMuted;
			soundcontrol.setTexture(isMuted ? Textures.MuteButtonHover : Textures.DeMuteButtonHover);
			this.sound.mute = !isMuted;
			clickedSound.play();
		});

		// return to menu
		let text: Phaser.GameObjects.Text = this.add.text(this.scale.width/2, (this.scale.height/3)*2, 'Retour', { font: '72px monogramextended', color: 'white' }).setOrigin(0.5).setInteractive();
		text.on('pointerdown', () => {
			clickedSound.play();
			this.tweens.add({
				targets: settingsTheme,
				volume: 0,
				ease: 'Linear',
				duration: 1500
			});
			this.cameras.main.fadeOut(1000, 0, 0, 0);
			this.cameras.main.once('camerafadeoutcomplete', () => {
				this.time.delayedCall(2000, () => {
					this.scene.start(data.sceneFrom);
				});
			});
		});
	}
}
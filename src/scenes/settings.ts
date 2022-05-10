export default class SettingsScene extends Phaser.Scene {

	constructor() {
		super('SettingsScene');
	}

	preload() {
		// preload
	}

	create() {
		this.cameras.main.fadeIn(1000, 0, 0, 0);
		
		// click sound and settings theme
		let clickedSound = this.sound.add('click');
		let settingsTheme = this.sound.add('menu_theme');
		settingsTheme.play('', {
			loop: true,
			seek: 35
		});

		let text = this.add.text(845, 480, 'Retour au menu principal', { font: '72px monogram', color: 'white' }).setInteractive();

		// return to menu
		text.on('pointerdown', () => {
			clickedSound.play(),
			this.tweens.add({
				targets: settingsTheme,
				volume: 0,
				ease: 'Linear',
				duration: 1500
			});
			this.cameras.main.fadeOut(1000, 0, 0, 0);
			this.cameras.main.once('camerafadeoutcomplete', () => {
				this.time.delayedCall(2000, () => {
					this.scene.start('TitleScreen');
				});
			});
		});
	}
}
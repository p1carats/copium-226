import { Assets } from "../assets";

export default class CreditsScene extends Phaser.Scene {

	constructor() {
		super({ key: 'CreditsScene' });
	}

	preload() {
		// preload
	}

	create(data) {
		this.cameras.main.fadeIn(1000, 0, 0, 0);

		// click sound and settings theme
		let click: Phaser.Sound.BaseSound = this.sound.add(Assets.ClickSound);
		let theme: Phaser.Sound.BaseSound = this.sound.add(Assets.CreditsTheme);
		theme.play('', { loop: true, seek: 5 });

		// background
		let background = this.add.rectangle(0, 0, this.scale.width, this.scale.height, 0x000000, 1).setOrigin(0);

		// title
		let title: Phaser.GameObjects.Text = this.add.text(this.scale.width/2, this.scale.height/4 - 200, 'Crédits :', { font: '108px monogramextended', color: 'white' }).setOrigin(0.5).setInteractive();
		let text: Phaser.GameObjects.Text = this.add.text(this.scale.width/2, this.scale.height/3+100, 'Crée par\nCyril  Cuvelier (Code)\nMatéo Danton (Textures)\nNoé Barlet (Code)\nRomain Altmayer (Script)\nSimon Losson (Code/Traduction)\nÉléves de CIR 2 à l\'ISEN Lille\nMerci d\'avoir joué !', { font: '72px monogramextended', color: '#FFFFFFFF' }).setOrigin(0.5).setInteractive();

		// quit
		let quit: Phaser.GameObjects.Text = this.add.text((this.scale.width/4)*2, (this.scale.height/3)+600, 'Quitter', { font: '72px monogramextended', color: 'white' }).setOrigin(0.5).setInteractive();
		quit.on('pointerdown', () => {
			this.input.enabled = false;
			click.play();
			this.cameras.main.fadeOut(1000, 0, 0, 0);
			this.cameras.main.once('camerafadeoutcomplete', () => {
				this.time.delayedCall(2000, () => {
					theme.stop();
					this.scene.start('TitleScreen');
				});
			});
		});
	}
}
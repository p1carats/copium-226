import { Assets } from "../assets";

export default class EndGameScene extends Phaser.Scene {

	constructor() {
		super({ key: 'EndGameScene' });
	}

	preload() {
		// preload
	}

	create(data) {
		this.cameras.main.fadeIn(1000, 0, 0, 0);
		
		// click sound and settings theme
		let click: Phaser.Sound.BaseSound = this.sound.add(Assets.ClickSound);

		// background
		let background = this.add.rectangle(0, 0, this.scale.width, this.scale.height, 0x000000, 1).setOrigin(0);

		// text
		// colors : #ff0000 (rouge) #00bc2d (vert)
		let title: Phaser.GameObjects.Text = this.add.text(this.scale.width/2, this.scale.height/3, 'Bad End N°7', { font: '108px monogramextended', color: '#ff0000' }).setOrigin(0.5).setInteractive();
		let text: Phaser.GameObjects.Text = this.add.text(this.scale.width/2, this.scale.height/3+100, 'Que s\'est-il passé ?', { font: '72px monogramextended', color: '#ff0000' }).setOrigin(0.5).setInteractive();

		// return to menu
		let quit: Phaser.GameObjects.Text = this.add.text(this.scale.width/4, (this.scale.height/3)*2, 'Quitter', { font: '56px monogramextended', color: 'white' }).setOrigin(0.5).setInteractive();
		quit.on('pointerdown', () => {
			this.input.enabled = false;
			click.play();
			this.cameras.main.fadeOut(1000, 0, 0, 0);
			this.cameras.main.once('camerafadeoutcomplete', () => {
				this.time.delayedCall(2000, () => {
					this.scene.start('TitleScreen');
				});
			});
		});

		// play 
		let play: Phaser.GameObjects.Text = this.add.text((this.scale.width/4)*2, (this.scale.height/3)*2, 'Rejouer', { font: '72px monogramextended', color: 'white' }).setOrigin(0.5).setInteractive();
		play.on('pointerdown', () => {
			this.input.enabled = false;
			click.play();
			this.cameras.main.fadeOut(1000, 0, 0, 0);
			this.cameras.main.once('camerafadeoutcomplete', () => {
				this.time.delayedCall(2000, () => {
					this.scene.start('TemplateDialogue');
				});
			});
		});

		// credits 
		let credits: Phaser.GameObjects.Text = this.add.text((this.scale.width/4)*3, (this.scale.height/3)*2, 'Crédits', { font: '72px monogramextended', color: 'white' }).setOrigin(0.5).setInteractive();
		credits.on('pointerdown', () => {
			this.input.enabled = false;
			click.play();
			this.cameras.main.fadeOut(1000, 0, 0, 0);
			this.cameras.main.once('camerafadeoutcomplete', () => {
				this.time.delayedCall(2000, () => {
					this.scene.start('CreditsScene');
				});
			});
		});
	}
}
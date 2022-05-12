export default class PauseMenu extends Phaser.Scene {

	constructor() {
		super({ key: 'PauseMenu' });
	}

	preload() {
		// preload
	}

	create() {
		let clickedSound: Phaser.Sound.BaseSound = this.sound.add('click');

		// title
		let title: Phaser.GameObjects.Text = this.add.text(this.scale.width/2, this.scale.height/3, 'Pause', { font: '108px monogramextended', color: 'white' }).setOrigin(0.5).setInteractive();

		// resume game
		let resume: Phaser.GameObjects.Text = this.add.text(this.scale.width/2, (this.scale.height/2), 'Reprendre', { font: '52px monogramextended', color: 'white' }).setOrigin(0.5).setInteractive();
		resume.on('pointerdown', () => {
			let otherscene = this.scene.get('TemplateDialogue').sound.resumeAll;
			clickedSound.play();
			this.scene.wake('TemplateDialogue');
			this.scene.stop();
		});

		// option menu
		let options: Phaser.GameObjects.Text = this.add.text(this.scale.width/2, (this.scale.height/2)+50, 'Options', { font: '52px monogramextended', color: 'white' }).setOrigin(0.5).setInteractive();
		options.on('pointerdown', () => {
			clickedSound.play();
			this.cameras.main.fadeOut(1000, 0, 0, 0);
			this.cameras.main.once('camerafadeoutcomplete', () => {
				this.time.delayedCall(2000, () => {
					this.scene.start('SettingsScene', { sceneFrom: this.scene.key });
					this.scene.stop();
				});
			});
		});

		// quit game
		let quit: Phaser.GameObjects.Text = this.add.text(this.scale.width/2, (this.scale.height/2)+100, 'Quitter', { font: '52px monogramextended', color: 'white' }).setOrigin(0.5).setInteractive();
		quit.on('pointerdown', () => {
			clickedSound.play();
			this.cameras.main.fadeOut(1000, 0, 0, 0);
			this.cameras.main.once('camerafadeoutcomplete', () => {
				this.time.delayedCall(2000, () => {
					this.scene.start('TitleScreen');
					this.scene.stop();
				});
			});
		});
	}
}
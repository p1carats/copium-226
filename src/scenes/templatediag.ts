export default class TemplateDialogue extends Phaser.Scene {

	constructor() {
		super('TemplateDialogue');
	}

	preload() {
		// allows us to specify images, audio, or other assets to load before starting the scene
		this.load.image('background', 'assets/background/scenes/bedroom.jpg');
		this.load.image('dialogBox', 'assets/dialogbox.png');
		this.load.image('boss', 'assets/characters/Boss_Green_Horizon.png');
	}

	create() {
		function move(...sprites) {
			for (let sprite of sprites)
			sprite.setX(sprite.x + 8);
		}

		let slider = () => {
			let dialogBox = this.add.image(-500, 800, 'dialogBox');
			dialogBox.alpha = 0.4;
			let perso = this.add.image(-700, 545, 'boss');
			let callback = () => move(perso, dialogBox);
			let timer = this.time.addEvent({
				delay: 2,
				repeat: 130,
				callbackScope: this,
				callback: callback
			});
		}

		let background = this.add.image(920, 470, 'background').setScale(2, 2).setAlpha(0);

		this.tweens.add({
			targets: background,
			alpha: 1,
			duration: 3500,
			repeat: 0
		});

		this.time.addEvent({
			delay: 3500,
			callbackScope: this,
			callback: slider
		});
	}
}
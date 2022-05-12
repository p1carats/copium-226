import { Textures } from "../assets";

let getBuiltInText = function (scene, wrapWidth, fixedWidth, fixedHeight) {
	return scene.add.text(0, 0, '', {
		fontSize: '52px',
		fontFamily : 'monogram',
		wordWrap: {
			width: wrapWidth
		},
		maxLines: 4
	}).setFixedSize(fixedWidth, fixedHeight);
}

function createTextBox(scene, x, y, config) {
	let wrapWidth = Phaser.Utils.Objects.GetValue(config, 'wrapWidth', 0);
	let fixedWidth = Phaser.Utils.Objects.GetValue(config, 'fixedWidth', 0);
	let fixedHeight = Phaser.Utils.Objects.GetValue(config, 'fixedHeight', 0);
	let backgroundTexture = scene.add.image(0, 0, Textures.DialogBox).setAlpha(0.9);
	let textBox = scene.rexUI.add.textBox({
		x: x,
		y: y,
		background: backgroundTexture,
		text: getBuiltInText(scene, wrapWidth, fixedWidth, fixedHeight),
		action: scene.add.image(0, 0, Textures.LineBreak).setScale(0.5, 0.5).setVisible(false),
		space: {
			left: 35,
			right: 50,
			top: 50,
			bottom: 40,
			text: 10,
		}
	}).setOrigin(0).setScale(0.75, 0.75).setInteractive().layout();
	
	textBox.on('pointerdown', function() {
		let icon = this.getElement('action').setVisible(false);
		this.resetChildVisibleState(icon);
		if (this.isTyping) {
			this.stop(true);
		} else {
			this.typeNextPage();
		}
	}, textBox)
	
	textBox.on('pageend', function() {
		if (this.isLastPage) {
			return;
		}
		let icon = this.getElement('action').setVisible(true);
		this.resetChildVisibleState(icon);
		icon.y -= 30;
		let tween = scene.tweens.add({
			targets: icon,
			y: '+=30', // '+=100'
			ease: 'Bounce', // 'Cubic', 'Elastic', 'Bounce', 'Back'
			duration: 500,
			repeat: 0, // -1: infinity
			yoyo: false
		});
	}, textBox);
	// textBox.on('type', function () {});
	return textBox;
}

export default function dialogBox(game, texture, text) {
	let perso = game.add.sprite(300, 650, texture);
	createTextBox(game, 100, 800, {
		wrapWidth: 800,
		fixedWidth: 900,
		fixedHeight: 225,
	}).start(text, 50);
}
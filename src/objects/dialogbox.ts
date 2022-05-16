import { Assets } from "../assets";
import * as Phaser from "phaser";

let getBuiltInText = function (scene, wrapWidth, fixedWidth, fixedHeight) {
	return scene.add.text(0, 0, '', {
		fontSize: '52px',
		fontFamily : 'monogramextended',
		wordWrap: {
			width: wrapWidth
		},
		maxLines: 4
	}).setFixedSize(fixedWidth, fixedHeight);
}

function createTextBox(scene, perso, x, y, config) {
	let wrapWidth = Phaser.Utils.Objects.GetValue(config, 'wrapWidth', 0);
	let fixedWidth = Phaser.Utils.Objects.GetValue(config, 'fixedWidth', 0);
	let fixedHeight = Phaser.Utils.Objects.GetValue(config, 'fixedHeight', 0);
	let backgroundTexture = scene.add.image(0, 0, Assets.DialogBox).setAlpha(0.9);
	let textBox = scene.rexUI.add.textBox({
		x: x,
		y: y,
		background: backgroundTexture,
		text: getBuiltInText(scene, wrapWidth, fixedWidth, fixedHeight),
		action: scene.add.image(0, 0, Assets.LineBreak).setScale(0.5).setVisible(false),
		space: {
			left: 35,
			right: 50,
			top: 50,
			bottom: 40,
			text: 10,
		}
	}).setOrigin(0).setScale(0.75).setInteractive().layout();

	textBox.on('pointerdown', function() {
		let icon = this.getElement('action').setVisible(false);
		this.resetChildVisibleState(icon);
		if (this.isTyping) {
			this.stop(true);
		} else {
			this.typeNextPage();
		}
	});

	textBox.on('pageend', function() {
		if (this.isLastPage) {
			return;
		} else {
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
		}
	}, textBox);

	textBox.on('complete', function (){
		textBox.off('pointerdown');
		textBox.off('pageend');
		scene.time.delayedCall(2000, () => {
			textBox.destroy();
			if (perso !== null) perso.destroy();
			scene.emitter.emit('nextDialog');
		});
	});
	return textBox;
}

// sens : 0 right / 1 left
export default function dialogBox(game, texture, text, sens) {
	let position, perso;
	if (sens === 0) {
		position = [300, 650, 100, 800];
	} else {
		position = [700, 650, 100, 800];
	}

	if (texture !== null) {
		perso = game.add.sprite(position[0], position[1], texture);
	} else {
		perso = null
	}
	return createTextBox(game, perso, position[2], position[3], {
		wrapWidth: 800,
		fixedWidth: 900,
		fixedHeight: 225,
	}).start(text, 50);
}
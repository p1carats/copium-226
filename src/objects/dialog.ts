import { Assets } from "../assets";

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

function createTextBox(scene, perso, config) {
	let wrapWidth = Phaser.Utils.Objects.GetValue(config, 'wrapWidth', 0);
	let fixedWidth = Phaser.Utils.Objects.GetValue(config, 'fixedWidth', 0);
	let fixedHeight = Phaser.Utils.Objects.GetValue(config, 'fixedHeight', 0);
	let backgroundTexture = scene.add.image(0, 0, Assets.DialogBox).setAlpha(0.9);
	let textBox = scene.rexUI.add.textBox({
		x: 100,
		y: 800,
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

	textBox.on('complete', function (){
		textBox.off('pointerdown');
		textBox.off('pageend');
		textBox.on('pointerdown', function() {
			let icon = this.getElement('action').setVisible(false);
			textBox.destroy();
			if (perso !== null) {
				perso.destroy();
			}
			scene.emitter.emit('next');
		});
	});
	return textBox;
}

export default function dialogBox(game, text) {
	let character;
	let regex: RegExp = /\[.*\]/;
	if(regex.test(text)) {
		regex = /[^\]]*/;
		character = regex.exec(text)[0].normalize('NFD').replace('[', '').replace(/\p{Diacritic}/gu, '').trim();
		character === 'M. Vermeil' ? character = 'Craig' : '';
		switch (character) {
			case 'George':
				character = Assets.George;
				break;
			case 'Benoit':
				character = Assets.Benoit;
				break;
			case 'Gerard':
				character = Assets.Gerard;
				break;
			case 'Amber':
				character = Assets.Amber;
				break;
			case 'Craig':
				character = Assets.Craig;
				break;
			case 'Marion':
				character = Assets.Marion;
				break;
			case 'Marc':
				character = Assets.Marc;
				break;
			case '???':
				character = Assets.Unknown;
				break;
			default:
				character = null;
				break;
		}
		character = game.add.sprite(300, 650, character);
	} else {
		character = null;
	}

	return createTextBox(game, character, {
		wrapWidth: 800,
		fixedWidth: 900,
		fixedHeight: 225,
	}).start(text, 50);
}
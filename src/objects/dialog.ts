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

let createLabel = function (scene, text, backgroundColor) {
	return scene.rexUI.add.label({
		background: scene.rexUI.add.roundRectangle(0, 0, 50, 40, 0, backgroundColor),
		text: scene.add.text(0, 0, text, {
			fontSize: '40px',
			fontFamily: 'monogramextended'
		}),
		space: {
			left: 10,
			right: 10,
			top: 10,
			bottom: 10
		}
	});
}

function createTextBox(game, character, choicesArray, config) {
	// annoying config
	let wrapWidth = Phaser.Utils.Objects.GetValue(config, 'wrapWidth', 0);
	let fixedWidth = Phaser.Utils.Objects.GetValue(config, 'fixedWidth', 0);
	let fixedHeight = Phaser.Utils.Objects.GetValue(config, 'fixedHeight', 0);
	// true config
	let backgroundTexture = game.add.image(0, 0, Assets.DialogBox);
	let choices = [];
	if (typeof choicesArray !== 'undefined') {
		choicesArray.forEach(elem => choices.push(createLabel(game, elem.text, 0x2F312E)));
	}

	let textBox = game.rexUI.add.textBox({
		x: 100,
		y: 800,
		background: backgroundTexture,
		text: getBuiltInText(game, wrapWidth, fixedWidth, fixedHeight),
		action: game.add.image(0, 0, Assets.LineBreak).setScale(0.5).setVisible(false),
		space: {
			left: 35,
			right: 50,
			top: 50,
			bottom: 40,
			text: 10,
		}
	}).setOrigin(0).setScale(0.75).setAlpha(0.95).setInteractive().layout();

	let dialog;
	if (typeof choicesArray !== 'undefined') {
		dialog = game.rexUI.add.dialog({
			x: 1200,
			y: 800,
			choices: choices,
			space: {
				left: 35,
				right: 50,
				top: 50,
				bottom: 40,
				text: 10,
			},
			expand: {
				// content is a pure text object
				content: false,
			}
		}).setAlpha(0).layout();

		dialog.on('button.over', function (button, groupName, index) {
			button.getElement('background').setStrokeStyle(1, 0xffffff);
		});
	
		dialog.on('button.out', function (button, groupName, index) {
			button.getElement('background').setStrokeStyle();
		});
	
		dialog.on('button.click', function (button, groupName, index) {
			game.story.ChooseChoiceIndex(index);
			choices.forEach(elem => elem.destroy());
			if (character !== null) {
				character.destroy();
			}
			textBox.destroy();
			dialog.destroy();
			game.emitter.emit('next');
		});
	}

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
		let tween = game.tweens.add({
			targets: icon,
			y: '+=30', // '+=100'
			ease: 'Bounce', // 'Cubic', 'Elastic', 'Bounce', 'Back'
			duration: 500,
			repeat: 0, // -1: infinity
			yoyo: false
		});
	}, textBox);

	textBox.on('complete', function () {
		textBox.off('pointerdown');
		textBox.off('pageend');
		textBox.on('pointerdown', function() {
			let icon = this.getElement('action').setVisible(false);
			if (typeof choicesArray !== 'undefined') {
				dialog.setAlpha(1);
			} else {
				if (character !== null) {
					character.destroy();
				}
				textBox.destroy();
				game.emitter.emit('next');
			}
		});
	});

	return textBox;
}

export default function dialogBox(game, text, choices?) {
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

	return createTextBox(game, character, choices, {
		wrapWidth: 800,
		fixedWidth: 900,
		fixedHeight: 225,
	}).start(text, 60);
}
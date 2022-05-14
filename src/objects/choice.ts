import { Assets } from "../assets";

let getBuiltInText = function (scene, wrapWidth, fixedWidth, fixedHeight, text) {
	return scene.add.text(0, 0, text, {
		fontSize: '52px',
		fontFamily: 'monogramextended',
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

function createChoiceBox(game, text, x, y, choicesArray) {
	let backgroundTexture = game.add.image(0, 0, Assets.DialogBox).setAlpha(0.9);
	let choices = [];
	choicesArray.forEach(elem => choices.push(createLabel(game, elem, 0x2F312E)))
	let dialog = game.rexUI.add.dialog({
		x: x,
		y: y,
		background: backgroundTexture,
		description: getBuiltInText(game, 800, 900, 150, text),
		choices: choices,
		space: {
			content: 60,
			choice: 20,
			left: 40,
			right: 40,
			top: 25,
			bottom: 25,
		},
		expand: {
			// content is a pure text object
			content: false,
		}
	}).layout().popUp(1000);

	game.print = game.add.text(0, 0, '');
	dialog.on('button.click', function (button, groupName, index) {
		console.log("Le bouton " + index + " a été choisi !");
	});
	dialog.on('button.over', function (button, groupName, index) {
		button.getElement('background').setStrokeStyle(1, 0xffffff);
	});
	dialog.on('button.out', function (button, groupName, index) {
		button.getElement('background').setStrokeStyle();
	});
}

export default function choiceBox(game, texture, text, sens, choicesArray) {
	let position;
	if (sens === 0){
		position = [300, 650, 1000, 800];
	} else {
		position = [1600, 650, 1000, 800];
	}
	game.add.sprite(position[0], position[1], texture);
	createChoiceBox(game, text, position[2], position[3], choicesArray);
}
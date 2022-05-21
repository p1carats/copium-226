import { Assets } from "../assets";

let getBuiltInText = function (scene, wrapWidth, fixedWidth, fixedHeight, text) {
	return scene.add.text(0, 0, text, {
		fontSize: '40px',
		fontFamily: 'monogramextended',
		wordWrap: {
			width: wrapWidth
		},
		maxLines: 6
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
	choicesArray.forEach(elem => choices.push(createLabel(game, elem.text, 0x2F312E)))
	let dialog = game.rexUI.add.dialog({
		x: x,
		y: y,
		background: backgroundTexture,
		description: getBuiltInText(game, 800, 900, 225, text),
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
	}).layout().popUp(1000);

	dialog.alpha = 0.9;

	dialog.on('button.click', function (button, groupName, index) {
		game.story.ChooseChoiceIndex(index);
		game.emitter.emit('next');
		dialog.destroy();
		choices.forEach(elem => elem.destroy() );
		console.log("Le bouton " + index + " a été choisi !");
	});
	dialog.on('button.over', function (button, groupName, index) {
		button.getElement('background').setStrokeStyle(1, 0xffffff);
	});
	dialog.on('button.out', function (button, groupName, index) {
		button.getElement('background').setStrokeStyle();
	});
}

export default function choiceBox(game, perso, text, choicesArray) {
	let position = [100, 650, 1000, 800];

	if (perso !== null){
		game.add.sprite(position[0], position[1], perso);
	}
	createChoiceBox(game, text, position[2], position[3], choicesArray);
}
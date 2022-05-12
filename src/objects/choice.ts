function createChoiceBox(game) {
	let dialog = game.rexUI.add.dialog({
		x: 400,
		y: 300,
		background: game.rexUI.add.roundRectangle(0, 0, 100, 100, 20, 0x3e2723),
		title: game.rexUI.add.label({
			background: game.rexUI.add.roundRectangle(0, 0, 100, 40, 20, 0x1b0000),
			space: {
				left: 15,
				right: 15,
				top: 10,
				bottom: 10
			}
		}),
		choices: [
			createLabel(game, '3', 0x6a4f4b),
			createLabel(game, '4', 0x6a4f4b),
			createLabel(game, '5', 0x6a4f4b),
			createLabel(game, '6', 0x6a4f4b)
		],
		space: {
			title: 25,
			content: 25,
			choice: 15,
			//
			left: 25,
			right: 25,
			top: 25,
			bottom: 25,
		},
		expand: {
			// content is a pure text object
			content: false,
		}
	}).layout().popUp(1000);
	//.drawBounds(this.add.graphics(), 0xff0000)

	game.print = game.add.text(0, 0, '');
	dialog.on('button.click', function (button, groupName, index) {
		this.print.text += index + ': ' + button.text + '\n';
	});
	dialog.on('button.over', function (button, groupName, index) {
		button.getElement('background').setStrokeStyle(1, 0xffffff);
	});
	dialog.on('button.out', function (button, groupName, index) {
		button.getElement('background').setStrokeStyle();
	});
}

let createLabel = function (scene, text, backgroundColor) {
	return scene.rexUI.add.label({
		background: scene.rexUI.add.roundRectangle(0, 0, 100, 40, 20, backgroundColor),
		text: scene.add.text(0, 0, text, {
			fontSize: '24px'
		}),
		space: {
			left: 10,
			right: 10,
			top: 10,
			bottom: 10
		}
	});
}

export default function choiceBox(game) {
	createChoiceBox(game);
}
import { Assets } from "../assets";
import animation from "./animation";

// time for clicking, time between two buttons, number of buttons, score for win
const TUTO = [2000, 3000, 6, 3];
const EASY = [2000, 2750, 10, 5];
const MEDIUM = [1500, 2500, 15, 10];
const HARD = [1000, 2000, 20, 17];

// Easier to implement
const DIFFICULTY_ARRAY = [TUTO, EASY, MEDIUM, HARD];

function fixMe(game, score, difficulty, sounds, texture) {
	let choice = Math.floor(Math.random() * game.buttonsArray.length);
	// check if the sprite is pressed
	if (game.buttonsArray[choice].texture.key.indexOf('_pressed') === -1 && game.buttonsArray[choice].texture.key.indexOf('stick') === -1) {
		game.buttonsArray[choice].setTexture(game.buttonsArray[choice].texture.key + '_pressed');
		if (game.buttonsArray[choice].texture.key.search('red') !== -1) {
			sounds[0].play();
		} else {
			sounds[1].play();
		}
		// set the texture to the normal position after 2s if it's not clicked
		game.time.delayedCall(difficulty[0], () => {
			if (game.buttonsArray[choice].texture.key.search('_pressed') !== -1) {
				sounds[3].play();
				texture.setTexture(Assets.SmallScreenError);
				game.time.delayedCall(200, () => {
					texture.setTexture(Assets.SmallScreen);
				});
				game.buttonsArray[choice].setTexture(game.buttonsArray[choice].texture.key.replace('_pressed', ''));
				score--;
			}
		});
	} else if (game.buttonsArray[choice].texture.key.indexOf('stick') !== -1) { // or if it's a stick
		let sprite = 'stick' + (Math.floor(Math.random() * 3) + 1);
		game.buttonsArray[choice].setTexture(sprite);
		sounds[2].play();
		// set the texture to the normal position after 2s if it's not clicked
		game.time.delayedCall(difficulty[0], () => {
			if (game.buttonsArray[choice].texture.key.search(/[1-3]/) !== -1) {
				sounds[3].play();
				texture.setTexture(Assets.SmallScreenError);
				game.time.delayedCall(200, () => {
					texture.setTexture(Assets.SmallScreen);
				});
				game.buttonsArray[choice].setTexture(game.buttonsArray[choice].texture.key.replace(/[1-3]/, '0'));
				score--;
			}
		});
	}

	game.time.delayedCall(difficulty[1], () => {
		game.emitter.emit('nextButton');
	});
}

export default function startMiniGame(game, difficulty) {

	// All textures
	let red_button: Phaser.GameObjects.Sprite = game.add.sprite(450, 700, Assets.RedButton).setOrigin(0).setInteractive();
	let green_button_down: Phaser.GameObjects.Sprite = game.add.sprite(950, 750, Assets.GreenButtonDown).setOrigin(0).setInteractive();
	let green_button_right: Phaser.GameObjects.Sprite = game.add.sprite(1100, 700, Assets.GreenButtonRight).setOrigin(0).setInteractive();
	let green_button_up: Phaser.GameObjects.Sprite = game.add.sprite(950, 650, Assets.GreenButtonUp).setOrigin(0).setInteractive();
	let green_button_left: Phaser.GameObjects.Sprite = game.add.sprite(800, 700, Assets.GreenButtonLeft).setOrigin(0).setInteractive();
	let stick: Phaser.GameObjects.Sprite = game.add.sprite(1450, 700, Assets.Stick0).setOrigin(0).setInteractive();
	game.buttonsArray = [red_button, green_button_down, green_button_left, green_button_up, green_button_right, stick];

	// background effect
	animation(game, 'eolAnim', [
		{ key: Assets.ControlRoomEol1 },
		{ key: Assets.ControlRoomEol2 },
		{ key: Assets.ControlRoomEol3 },
		{ key: Assets.ControlRoomEol4 },
		{ key: Assets.ControlRoomEol5 },
		{ key: Assets.ControlRoomEol6 },
		{ key: Assets.ControlRoomEol7 },
		{ key: Assets.ControlRoomEol8 },
	]);

	animation(game, 'coalAnim', [
		{ key: Assets.ControlRoomCoal1 },
		{ key: Assets.ControlRoomCoal2 },
		{ key: Assets.ControlRoomCoal3 },
		{ key: Assets.ControlRoomCoal4 },
		{ key: Assets.ControlRoomCoal5 },
		{ key: Assets.ControlRoomCoal6 },
		{ key: Assets.ControlRoomCoal7 },
		{ key: Assets.ControlRoomCoal8 },
	]);

	animation(game, 'hydroelectricAnim', [
		{ key: Assets.ControlRoomHydroelectricDam1 },
		{ key: Assets.ControlRoomHydroelectricDam2 },
		{ key: Assets.ControlRoomHydroelectricDam3 },
		{ key: Assets.ControlRoomHydroelectricDam4 },
		{ key: Assets.ControlRoomHydroelectricDam5 },
		{ key: Assets.ControlRoomHydroelectricDam6 },
		{ key: Assets.ControlRoomHydroelectricDam7 },
		{ key: Assets.ControlRoomHydroelectricDam8 },
	]);

	let bigScreen;

	switch (game.script.variablesState['company']) {
		case 0:
			bigScreen = game.add.sprite(600, 150, Assets.ControlRoomCoal1).setOrigin(0).play('eolAnim');
			return;
		case 1:
			// Green Horizon
			bigScreen = game.add.sprite(600, 150, Assets.ControlRoomCoal1).setOrigin(0).play('hydroelectricAnim');
			return;
		case 2:
			bigScreen = game.add.sprite(600, 150, Assets.ControlRoomCoal1).setOrigin(0).play('coalAnim');
			return;
	}

	let texture = game.add.sprite(150, 290, Assets.SmallScreen).setOrigin(0);

	let difficultySettings = DIFFICULTY_ARRAY[difficulty];
	let score: number = 0;
	let number_of_issue: number = difficultySettings[2];
	let redClick: Phaser.Sound.BaseSound = game.sound.add(Assets.RedButtonSound);
	let arrowClick: Phaser.Sound.BaseSound = game.sound.add(Assets.ArrowsSound);
	let stickClick: Phaser.Sound.BaseSound = game.sound.add(Assets.StickSound);
	let failure: Phaser.Sound.BaseSound = game.sound.add(Assets.FailureSound);
	// easier to implement
	let sounds = [redClick, arrowClick, stickClick, failure];


	// let's start after 2s !
	game.time.delayedCall(2000, () => {
		fixMe(game, score, difficultySettings, sounds, texture);

	})

	// manage click on button
	game.buttonsArray.forEach(button => button.on('pointerdown', () => {
		if (button.texture.key.indexOf('_pressed') !== -1) {
			if (button.texture.key.indexOf('green') !== -1) {
				arrowClick.play();
			} else {
				redClick.play();
			}
			let texture = button.texture.key.replace('_pressed', '');
			button.setTexture(texture);
			score++;
		} else if (button.texture.key.search(/[1-3]/) !== -1) {
			stickClick.play();
			// shitty line use for decrease the number on the stick's sprite
			let texture = button.texture.key.replace(/[1-3]/, String(button.texture.key[button.texture.key.search(/[1-3]/)] - 1));
			button.setTexture(texture);
			if (button.texture.key[button.texture.key.search(/[1-3]/)] === 0) {
				score++;
			}
		} else {
			failure.play();
			texture.setTexture(Assets.SmallScreenError);
			game.time.delayedCall(200, () => {
				texture.setTexture(Assets.SmallScreen);
			});
			score--;
		}
	}));

	game.emitter.on('nextButton', () => {
		if (number_of_issue > 0) {
			fixMe(game, score, difficultySettings, sounds, texture);
			number_of_issue--;
		} else {
			let resultat = score >= difficultySettings[3] ? 1 : 0;
			let quota = score === difficultySettings[3] ? 1 : 0;
			game.emitter.emit('end_minigame', difficulty, resultat, quota);
			game.buttonsArray.forEach(e => e.destroy());
			texture.destroy();
			bigScreen.destroy();

		}
	});
}
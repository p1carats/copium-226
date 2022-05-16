import dialogBox from "../objects/dialogbox";
import {Assets} from "../assets";

// Time for clicking, Time between two buttons, Number of buttons, Score for win
const TUTO = [2000, 3000, 6, 3];
const EASY = [2000, 2750, 10, 5];
const MEDIUM = [1500, 2500, 15, 10];
const HARD = [1000, 2000, 20, 17];

// Easier to implement
const DIFFICULTY_ARRAY = [TUTO, EASY, MEDIUM, HARD];


function fixMe(game, score, difficulty, sounds){
	let choice = Math.floor(Math.random() * game.buttonsArray.length);
	// Check if the texture is pressed
	if (game.buttonsArray[choice].texture.key.indexOf('_pressed') === -1 && game.buttonsArray[choice].texture.key.indexOf('stick') === -1){
		game.buttonsArray[choice].setTexture(game.buttonsArray[choice].texture.key + '_pressed');
		if (game.buttonsArray[choice].texture.key.search('red') !== -1){
			sounds[0].play();
		}else{
			sounds[1].play();
		}
		// Set the texture to the normal position after 2s if it's not clicked
		game.time.delayedCall(difficulty[0], () => {
			if (game.buttonsArray[choice].texture.key.search('_pressed') !== -1) {
				sounds[3].play();
				game.buttonsArray[choice].setTexture(game.buttonsArray[choice].texture.key.replace('_pressed', ''));
				score--;
			}
		});
	}else if (game.buttonsArray[choice].texture.key.indexOf('stick') !== -1){ // or if it's a stick
		let sprite = 'stick' + (Math.floor(Math.random() * 3) + 1);
		game.buttonsArray[choice].setTexture(sprite);
		sounds[2].play();
		// Set the texture to the normal position after 2s if it's not clicked
		game.time.delayedCall(difficulty[0], () => {
			if (game.buttonsArray[choice].texture.key.search(/[1-3]/) !== -1) {
				sounds[3].play();
				game.buttonsArray[choice].setTexture(game.buttonsArray[choice].texture.key.replace(/[1-3]/, '0'));
				score--;
			}
		});
	}

	game.time.delayedCall(difficulty[1], () => {
		game.emitter.emit('nextButton');
	});
}

export default function startMiniGame(game, difficulty, texture){
	let difficultySettings = DIFFICULTY_ARRAY[difficulty];
	dialogBox(game, null, 'Bienvenue dans la salle de contrôle. L\'objectif ici est de tenir le temps imparti en ayant tous les boutons en position pressés. Si un bouton est relevé, vous devez simplement cliquer dessus. Attention à ne pas être trop lent ...', 0);
	let score = 0;
	let endGame = false;
	let number_of_issue = difficultySettings[2];
	let redClick: Phaser.Sound.BaseSound = game.sound.add(Assets.RedButtonSound);
	let arrowClick: Phaser.Sound.BaseSound = game.sound.add(Assets.ArrowsSound);
	let stickClick: Phaser.Sound.BaseSound = game.sound.add(Assets.StickSound);
	let failure: Phaser.Sound.BaseSound = game.sound.add(Assets.FailureSound);
	// Easier to implement
	let sounds = [redClick, arrowClick, stickClick, failure];


	// Manage click on button
	game.buttonsArray.forEach(button => button.on('pointerdown', () => {
		if (button.texture.key.indexOf('_pressed') !== -1) {
			if (button.texture.key.indexOf('green') !== -1) {
				arrowClick.play();
			}else {
				redClick.play();
			}
			let texture = button.texture.key.replace('_pressed', '');
			button.setTexture(texture);
			score++;
		}else if (button.texture.key.search(/[1-3]/) !== -1){
			stickClick.play();
			// Shitty line use for decrease the number on the stick's sprite
			let texture = button.texture.key.replace(/[1-3]/, String(button.texture.key[button.texture.key.search(/[1-3]/)] - 1));
			button.setTexture(texture);
			if (button.texture.key[button.texture.key.search(/[1-3]/)] === 0) score++;
		}else{
			failure.play();
			texture.setTexture(Assets.SmallScreenError);
			game.time.delayedCall(200, () => {
				texture.setTexture(Assets.SmallScreen);
			});
			score--;
		}
	}));

	game.emitter.on('nextDialog', () => {
		if (!endGame){
			// On commence !
			fixMe(game, score, difficultySettings, sounds);
		}else{
			let resultat = score >= difficultySettings[3] ? 1 : 0;
			console.log('Fin du mini-jeu : ', resultat);
		}
	});

	game.emitter.on('nextButton', () => {
		if (number_of_issue > 0){
			fixMe(game, score, difficultySettings, sounds);
			number_of_issue--;
		}else{
			endGame = true;
			dialogBox(game, null, 'Bravo, vous avez un score de ' + score, 0);
		}
	})
}
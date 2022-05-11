import { Textures } from '../assets';

export function blink(game, targets, time) {
	game.tweens.add({
		targets: targets,
		alpha: 0,
		duration: time,
		yoyo: true,
		loop: -1
	});
}

export function fadeIn(game, targets, time) {
	game.tweens.add({
		targets: targets,
		alpha: 1,
		duration: time,
		repeat: 0
	});
}

export function fadeOut(game, targets, time) {
	game.tweens.add({
		targets: targets,
		alpha: 0,
		duration: time,
		repeat: -1
	});
}


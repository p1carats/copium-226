import timer from "./timer";

export function blink(game:any, targets:any, time:number) {
	game.tweens.add({
		targets: targets,
		alpha: 0,
		duration: time,
		yoyo: true,
		loop: -1
	});
};

export function fadeIn(game:any, targets:any, time:number) {
	game.tweens.add({
		targets: targets,
		alpha: 1,
		duration: time,
		repeat: 0
	});
};

export function fadeOut(game:any, targets:any, time:number) {
	game.tweens.add({
		targets: targets,
		alpha: 0,
		duration: time,
		repeat: -1
	});
};

export function createDialogBox(game:any, boxSprite:any, characterSprite:any, dialogArray:any) {
	let move:any, slider:any;
	move = (...sprites:any) => {
		for (let sprite of sprites) {
			sprite.setX(sprite.x + 8);
		}
	}
	slider = (boxSprite:any, characterSprite:any) => {
		let callback = () => move(characterSprite, boxSprite);
		timer(game, 2, callback, false, 130)
	}
	slider(boxSprite, characterSprite);
};
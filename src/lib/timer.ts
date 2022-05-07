export default function timer(game, delay, callback, loop, repeat) {
	game.time.addEvent({
		delay: delay,
		callback: callback,
		callbackScope: game,
		loop: loop,
		repeat: repeat
	});
}
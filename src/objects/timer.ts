export default function timer(game:any, delay:number, callback:any, loop:any, repeat:any) {
	game.time.addEvent({
		delay: delay,
		callback: callback,
		callbackScope: game,
		loop: loop,
		repeat: repeat
	});
};
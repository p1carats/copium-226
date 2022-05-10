import FSM from 'phaser3-rex-plugins/plugins/fsm';

// A = dialog
// B = choice
// C = minigame

var states = new FSM({
	start: 'A',
	states: {
		A: {
			next: () => {
				// condition, if minigame then C else go B if choice
				return 'B';
			},
			enter: () => {
				// when entering dialog phase
			},
			exit: () => {
				// when exiting dialog phase
			}
		},
		// ...
	},
	init: function() {},
	extend: {
		// ...
	},
	enable: true,
	eventEmitter: undefined
});
import * as Phaser from 'phaser';

import TemplateDialogue from './scenes/templatediag';
import SplashScreen from './scenes/splashscreen';
import TitleScreen from './scenes/titlescreen';

let config = {
	scale: {
		mode: Phaser.Scale.FIT,
		autoCenter: Phaser.Scale.CENTER_BOTH,
		parent: 'copium-226',
		width: 1920,
		height: 1080
	},
	type: Phaser.AUTO,
	pixelArt: true,
	scene: [SplashScreen, TitleScreen]
};

export default new Phaser.Game(config);
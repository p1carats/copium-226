import * as Phaser from 'phaser';

import SplashScreen from './scenes/preload';
import TitleScreen from './scenes/titlescreen';
import SettingsScene from './scenes/settings';
import TemplateDialogue from './scenes/templatediag';

const config: Phaser.Types.Core.GameConfig = {
	type: Phaser.AUTO,
	scale: { 
		mode: Phaser.Scale.FIT,
		autoCenter: Phaser.Scale.CENTER_BOTH,
		parent: 'copium-226',
		width: 1920,
		height: 1080
	},
	pixelArt: true,
	scene: [SplashScreen, TitleScreen, SettingsScene, TemplateDialogue]
};

export default new Phaser.Game(config);
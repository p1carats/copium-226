import * as Phaser from 'phaser';

import WebFontLoaderPlugin from 'phaser3-rex-plugins/plugins/webfontloader-plugin';
import UIPlugin from 'phaser3-rex-plugins/templates/ui/ui-plugin';

import SplashScreen from './scenes/preload';
import TitleScreen from './scenes/titlescreen';
import SettingsScene from './scenes/settings';
import PauseScene from './scenes/pause';
import GameScene from './scenes/templatediag';
import EndGameScene from './scenes/endgame';
import CreditsScene from './scenes/credits';

const config: Phaser.Types.Core.GameConfig = {
	type: Phaser.WEBGL,
		scale: {
		mode: Phaser.Scale.FIT,
		autoCenter: Phaser.Scale.CENTER_BOTH,
		width: 1920, // window.innerWidth
		height: 1080 // window.innerHeight
	},
	pixelArt: true,
	scene: [
		SplashScreen,
		TitleScreen,
		SettingsScene,
		PauseScene,
		GameScene,
		EndGameScene,
		CreditsScene
	],
	plugins: {
		global: [{
			key: 'rexWebFontLoader',
			plugin: WebFontLoaderPlugin,
			start: true
		}],
		scene: [{
			key: 'rexUI',
			plugin: UIPlugin,
			mapping: 'rexUI'
		}]
	},
};

export default new Phaser.Game(config);
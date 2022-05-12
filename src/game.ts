import * as Phaser from 'phaser';

import WebFontLoaderPlugin from 'phaser3-rex-plugins/plugins/webfontloader-plugin';
import FSMPlugin from 'phaser3-rex-plugins/plugins/fsm-plugin';
import UIPlugin from 'phaser3-rex-plugins/templates/ui/ui-plugin';
import KawaseBlurPipelinePlugin from 'phaser3-rex-plugins/plugins/kawaseblurpipeline-plugin';

import SplashScreen from './scenes/preload';
import TitleScreen from './scenes/titlescreen';
import SettingsScene from './scenes/settings';
import PauseMenu from './scenes/pause';
import TemplateDialogue from './scenes/templatediag';

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
		PauseMenu,
		TemplateDialogue
	],
	plugins: {
		global: [{
			key: 'rexWebFontLoader',
			plugin: WebFontLoaderPlugin,
			start: true
		},
		{
			key: 'rexFSM',
			plugin: FSMPlugin,
			start: true
		},
		{
			key: 'rexKawaseBlurPipeline',
			plugin: KawaseBlurPipelinePlugin,
			start: true
		}],
		scene: [{
			key: 'rexUI',
			plugin: UIPlugin,
			mapping: 'rexUI'
		}]
	},
	seed: [(Date.now()*Math.random()).toString()]
};

export default new Phaser.Game(config);
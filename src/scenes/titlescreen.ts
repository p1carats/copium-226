import TemplateDialogue from './templatediag';
import { buttonEvents } from '../lib/events';

export default class TitleScreen extends Phaser.Scene {

	constructor() {
		super('TitleScreen');
	}

	// allows us to specify images, audio, and other assets to load before starting the scene
	preload() {
		// load all images
		this.load.image('titlescreen1', 'assets/background/title/titlescreen1.png');
		this.load.image('titlescreen2', 'assets/background/title/titlescreen2.png');
		this.load.image('titlescreen3', 'assets/background/title/titlescreen3.png');
		this.load.image('titlescreen4', 'assets/background/title/titlescreen4.png');
		this.load.image('titlescreen5', 'assets/background/title/titlescreen5.png');
		this.load.image('titlescreen6', 'assets/background/title/titlescreen6.png');
		this.load.image('bgMenu', 'assets/background/bgmenu.png');
		this.load.image('title', 'assets/title.png')
		this.load.image('exitButton', 'assets/buttons/exit.png');
		this.load.image('exitButtonHover', 'assets/buttons/exit_hover.png');
		this.load.image('playButton', 'assets/buttons/play.png');
		this.load.image('playButtonHover', 'assets/buttons/play_hover.png');
		this.load.image('settingsButton', 'assets/buttons/settings.png');
		this.load.image('settingsButtonHover', 'assets/buttons/settings_hover.png');
		this.load.image('aboutButton', 'assets/buttons/about.png');
		this.load.image('aboutButtonHover', 'assets/buttons/about_hover.png');
		// load all sounds
		this.load.audio('main_theme', 'assets/sounds/main_theme.mp3');
		this.load.audio('click', 'assets/sounds/click.ogg');
	}

	// called once all the assets for the scene have been loaded
	create() {
		// menu : 0 for settings and 1 for help/about
		function showOverMenu(menu) {
			buttonEvents(exitButton, 'exitButton', 'exitButtonHover', hideOverMenu, clickedSound);
			backgroundMenu.setVisible(true);
			exitButton.setVisible(true);
			exitButton.setInteractive();
			playButton.setVisible(false);
			settingsButton.setVisible(false);
			aboutButton.setVisible(false);
		}
		function hideOverMenu() {
			backgroundMenu.setVisible(false);
			exitButton.setVisible(false);
			playButton.setVisible(true);
			settingsButton.setVisible(true);
			aboutButton.setVisible(true	);
		}

		// background effect
		this.anims.create({
			key: 'titlescreenAnim',
			frames: [
				{ key: 'titlescreen1' },
				{ key: 'titlescreen2' },
				{ key: 'titlescreen3' },
				{ key: 'titlescreen4' },
				{	key: 'titlescreen5' },
				{ key: 'titlescreen6' },
			],
			frameRate: 2,
			repeat: -1
		});

		// menu music (looped) and click sound
		let menuMusic = this.sound.add('main_theme');
		let clickedSound = this.sound.add('click');
		//menuMusic.setLoop(true);
		menuMusic.play();

		// display
		this.add.sprite(960, 540, 'titlescreen1').play('titlescreenAnim');
		this.add.sprite(950, 300, 'title');

		// charging next scene
		this.scene.add('TemplateDialogue', TemplateDialogue);

		// buttons
		let playButton = this.add.sprite(850, 540, 'playButton').setInteractive();
		let settingsButton = this.add.sprite(1100, 500, 'settingsButton').setInteractive();
		let aboutButton = this.add.sprite(1100, 580, 'aboutButton').setInteractive();

		// settings/about pop-up
		let backgroundMenu = this.add.sprite(900, 540, 'bgMenu').setAlpha(0.4).setVisible(false);
		let exitButton = this.add.sprite(1615, 240, 'exitButton').setScale(0.2, 0.2).setVisible(false);

		// assign buttons actions
		buttonEvents(playButton, 'playButton', 'playButtonHover', () => {
			menuMusic.stop(),
			this.scene.start('TemplateDialogue'),
			clickedSound
		}, clickedSound);
		buttonEvents(settingsButton, 'settingsButton', 'settingsButtonHover', showOverMenu, clickedSound);
		buttonEvents(aboutButton, 'aboutButton', 'aboutButtonHover', showOverMenu, clickedSound);
	}
}
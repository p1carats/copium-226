// allows us to specify images, audio, or other assets to load before starting the game
export function assetsLoader(game:any) {
	// font
	game.load.rexWebFont({
		custom: {
			families: ['monogramextended'],
			urls: ['assets/fonts/fonts.css']
		}
	});
	// load all textures/sprites images
	game.load.image('logo', 'assets/logo.png');
	game.load.image('title', 'assets/title.png');
	game.load.image('titlescreen1', 'assets/background/title/titlescreen1.png');
	game.load.image('titlescreen2', 'assets/background/title/titlescreen2.png');
	game.load.image('titlescreen3', 'assets/background/title/titlescreen3.png');
	game.load.image('titlescreen4', 'assets/background/title/titlescreen4.png');
	game.load.image('titlescreen5', 'assets/background/title/titlescreen5.png');
	game.load.image('titlescreen6', 'assets/background/title/titlescreen6.png');
	// buttons
	game.load.image('exitButton', 'assets/buttons/exit.png');
	game.load.image('exitButtonHover', 'assets/buttons/exit_hover.png');
	game.load.image('playButton', 'assets/buttons/play.png');
	game.load.image('playButtonHover', 'assets/buttons/play_hover.png');
	game.load.image('settingsButton', 'assets/buttons/settings.png');
	game.load.image('settingsButtonHover', 'assets/buttons/settings_hover.png');
	game.load.image('pauseButton', 'assets/buttons/pause.png');
	game.load.image('pauseButtonHover', 'assets/buttons/pause_hover.png');
	game.load.image('aboutButton', 'assets/buttons/about.png');
	game.load.image('aboutButtonHover', 'assets/buttons/about_hover.png');
	game.load.image('muteButton', 'assets/buttons/mute.png');
	game.load.image('muteButtonHover', 'assets/buttons/mute_hover.png');
	game.load.image('demuteButton', 'assets/buttons/demute.png');
	game.load.image('demuteButtonHover', 'assets/buttons/demute_hover.png');
	// utils
	game.load.image('dialogBox', 'assets/dialogbox.png');
	game.load.image('lineBreak', 'assets/buttons/line_break.png');
	// scenes
	game.load.image('bedroombg', 'assets/background/scenes/bedroom.png');
	// characters
	game.load.image('georgeLeft', 'assets/characters/george_left.png');
	game.load.image('georgeRight', 'assets/characters/george_right.png');
	// load all sounds
	game.load.audio('startingAudio', 'assets/sounds/start.ogg');
	game.load.audio('click', 'assets/sounds/click.ogg');
	// load all songs
	game.load.audio('main_theme', 'assets/sounds/theme.ogg');
	game.load.audio('menu_theme', 'assets/sounds/menu.ogg');
	game.load.audio('room_theme', 'assets/sounds/room.ogg');
}

export enum Textures {
	Logo = 'logo',
	Title = 'title',
	Click = 'click',
	TitleScreen1 = 'titlescreen1',
	TitleScreen2 = 'titlescreen2',
	TitleScreen3 = 'titlescreen3',
	TitleScreen4 = 'titlescreen4',
	TitleScreen5 = 'titlescreen5',
	TitleScreen6 = 'titlescreen6',
	ExitButton = 'exitButton',
	ExitButtonHover = 'exitButtonHover',
	PlayButton = 'playButton',
	PlayButtonHover = 'playButtonHover',
	SettingsButton = 'settingsButton',
	SettingsButtonHover = 'settingsButtonHover',
	PauseButton = 'pauseButton',
	PauseButtonHover = 'pauseButtonHover',
	AboutButton = 'aboutButton',
	AboutButtonHover = 'aboutButtonHover',
	MuteButton = 'muteButton',
	MuteButtonHover = 'muteButtonHover',
	DeMuteButton = 'demuteButton',
	DeMuteButtonHover = 'demuteButtonHover',
	DialogBox = 'dialogBox',
	LineBreak = 'lineBreak',
	GeorgeLeft = 'georgeLeft',
	GeorgeRight = 'georgeRight'
}
// allows us to specify images, audio, or other assets to load before starting the game
export function assetsLoader(game) {
	// font
	game.load.rexWebFont({
		custom: {
			families: ['monogramextended'],
			urls: ['assets/fonts/fonts.css']
		}
	});
	// main title
	game.load.image('logo', 'assets/logo.png');
	game.load.image('title', 'assets/title.png');
	game.load.image('titlescreen1', 'assets/background/title/titlescreen1.png');
	game.load.image('titlescreen2', 'assets/background/title/titlescreen2.png');
	game.load.image('titlescreen3', 'assets/background/title/titlescreen3.png');
	game.load.image('titlescreen4', 'assets/background/title/titlescreen4.png');
	game.load.image('titlescreen5', 'assets/background/title/titlescreen5.png');
	game.load.image('titlescreen6', 'assets/background/title/titlescreen6.png');
	// buttons
	game.load.image('exit', 'assets/buttons/exit.png');
	game.load.image('exit_hover', 'assets/buttons/exit_hover.png');
	game.load.image('play', 'assets/buttons/play.png');
	game.load.image('play_hover', 'assets/buttons/play_hover.png');
	game.load.image('settings', 'assets/buttons/settings.png');
	game.load.image('settings_hover', 'assets/buttons/settings_hover.png');
	game.load.image('pause', 'assets/buttons/pause.png');
	game.load.image('pause_hover', 'assets/buttons/pause_hover.png');
	game.load.image('about', 'assets/buttons/about.png');
	game.load.image('about_hover', 'assets/buttons/about_hover.png');
	game.load.image('mute', 'assets/buttons/mute.png');
	game.load.image('mute_hover', 'assets/buttons/mute_hover.png');
	game.load.image('demute', 'assets/buttons/demute.png');
	game.load.image('demute_hover', 'assets/buttons/demute_hover.png');
	game.load.image('french', 'assets/buttons/french.png');
	game.load.image('french_hover', 'assets/buttons/french_hover.png');
	game.load.image('english', 'assets/buttons/english.png');
	game.load.image('english_hover', 'assets/buttons/english_hover.png')
	// utils
	game.load.image('dialogBox', 'assets/dialogbox.png');
	game.load.image('lineBreak', 'assets/buttons/line_break.png');
	// scenes
	game.load.image('bedroom', 'assets/scenes/bedroom.png');
	game.load.image('village_0', 'assets/scenes/village_0.png');
	game.load.image('village_1', 'assets/scenes/village_1.png');
	game.load.image('village_2_gh', 'assets/scenes/village_2_gh.png');
	//game.load.image('village_3_gh', 'assets/scenes/village_3_gh.png');
	game.load.image('village_2_cc', 'assets/scenes/village_2_cc.png');
	//game.load.image('village_3_cc', 'assets/scenes/village_3_cc.png');
	//game.load.image('office_gh', 'assets/scenes/office_gh.png');
	//game.load.image('office_cc', 'assets/scenes/office_cc.png');
	//game.load.image('coffee', 'assets/scenes/coffee.png');
	game.load.image('controlroom', 'assets/scenes/controlroom.png');
	// characters
	game.load.image('georgeLeft', 'assets/characters/george_left.png');
	game.load.image('georgeRight', 'assets/characters/george_right.png');
	// load all sounds
	game.load.audio('start', 'assets/sounds/start.ogg');
	game.load.audio('click', 'assets/sounds/click.ogg');
	game.load.audio('alarm', 'assets/sounds/alarm.ogg');
	// load all songs
	game.load.audio('theme', 'assets/sounds/music/theme.ogg');
	game.load.audio('menu', 'assets/sounds/music/menu.ogg');
	game.load.audio('room', 'assets/sounds/music/room.ogg');
	game.load.audio('village', 'assets/sounds/music/village.ogg');
	game.load.audio('corpo', 'assets/sounds/music/corpo.ogg');
	game.load.audio('power_plant', 'assets/sounds/music/power_plant.ogg');
}

export enum Assets {
	Logo = 'logo',
	Title = 'title',
	Click = 'click',
	TitleScreen1 = 'titlescreen1',
	TitleScreen2 = 'titlescreen2',
	TitleScreen3 = 'titlescreen3',
	TitleScreen4 = 'titlescreen4',
	TitleScreen5 = 'titlescreen5',
	TitleScreen6 = 'titlescreen6',
	// buttons
	ExitButton = 'exit',
	ExitButtonHover = 'exit_hover',
	PlayButton = 'play',
	PlayButtonHover = 'play_hover',
	SettingsButton = 'settings',
	SettingsButtonHover = 'settings_hover',
	PauseButton = 'pause',
	PauseButtonHover = 'pause_hover',
	AboutButton = 'about',
	AboutButtonHover = 'about_hover',
	MuteButton = 'mute',
	MuteButtonHover = 'mute_hover',
	DeMuteButton = 'demute',
	DeMuteButtonHover = 'demute_hover',
	FrenchButton = 'french',
	FrenchButtonHover = 'french_hover',
	EnglishButton = 'english',
	EnglishButtonHover = 'english_hover',
	// utils
	DialogBox = 'dialogBox',
	LineBreak = 'lineBreak',
	// characters
	GeorgeLeft = 'georgeLeft',
	GeorgeRight = 'georgeRight',
	// scenes
	BedroomScene = 'bedroom',
	ControlRoomScene = 'controlroom',
	// sounds
	StartSound = 'start',
	ClickSound = 'click',
	AlarmSound = 'click',
	// musics
	MainTheme = 'theme',
	MenuTheme = 'menu',
	RoomTheme = 'room',
	VillageTheme = 'village',
	CorpoTheme = 'corpo',
	PowerPlantTheme = 'power_plant'
}
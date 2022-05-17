import { Assets } from "../assets";
import startMiniGame from "../objects/minigame";
import pause from "../objects/pause";
import animation from "../objects/animation";

export default class MiniGameScene extends Phaser.Scene {
	private difficulty: any;
	private emitter: Phaser.Events.EventEmitter;
	private buttonsArray: Phaser.GameObjects.Sprite[];

	constructor() {
		super({ key: 'MiniGameScene' });
	}

	preload() {
		// preload
	}

	init(data) {
		this.difficulty = data.difficulty;
		console.log(this.difficulty);
	}

	create() {
		this.emitter = new Phaser.Events.EventEmitter();
		this.cameras.main.fadeIn(1000, 0, 0, 0);

		// click sound and settings theme
		let click: Phaser.Sound.BaseSound = this.sound.add(Assets.ClickSound);
		let theme: Phaser.Sound.BaseSound = this.sound.add(Assets.PowerPlantTheme);
		theme.play('', {
			loop: true
		});

		// background
		let background: Phaser.GameObjects.Sprite = this.add.sprite(0, 0, Assets.ControlRoomScene).setOrigin(0);

		// setting up buttons
		let red_button: Phaser.GameObjects.Sprite = this.add.sprite(450, 700, Assets.RedButton).setOrigin(0).setInteractive();
		let green_button_down: Phaser.GameObjects.Sprite = this.add.sprite(950, 750, Assets.GreenButtonDown).setOrigin(0).setInteractive();
		let green_button_right: Phaser.GameObjects.Sprite = this.add.sprite(1100, 700, Assets.GreenButtonRight).setOrigin(0).setInteractive();
		let green_button_up: Phaser.GameObjects.Sprite = this.add.sprite(950, 650, Assets.GreenButtonUp).setOrigin(0).setInteractive();
		let green_button_left: Phaser.GameObjects.Sprite = this.add.sprite(800, 700, Assets.GreenButtonLeft).setOrigin(0).setInteractive();
		let stick: Phaser.GameObjects.Sprite = this.add.sprite(1450, 700, Assets.Stick0).setOrigin(0).setInteractive();
		this.buttonsArray = [red_button, green_button_down, green_button_left, green_button_up, green_button_right, stick];

		// background effect
		animation(this, 'eolAnim', [
			{ key: Assets.ControlRoomEol1 },
			{ key: Assets.ControlRoomEol2 },
			{ key: Assets.ControlRoomEol3 },
			{ key: Assets.ControlRoomEol4 },
			{ key: Assets.ControlRoomEol5 },
			{ key: Assets.ControlRoomEol6 },
			{ key: Assets.ControlRoomEol7 },
			{ key: Assets.ControlRoomEol8 },
		]);

		animation(this, 'coalAnim', [
			{ key: Assets.ControlRoomCoal1 },
			{ key: Assets.ControlRoomCoal2 },
			{ key: Assets.ControlRoomCoal3 },
			{ key: Assets.ControlRoomCoal4 },
			{ key: Assets.ControlRoomCoal5 },
			{ key: Assets.ControlRoomCoal6 },
			{ key: Assets.ControlRoomCoal7 },
			{ key: Assets.ControlRoomCoal8 },
		]);

		animation(this, 'hydroelectricAnim', [
			{ key: Assets.ControlRoomHydroelectricDam1 },
			{ key: Assets.ControlRoomHydroelectricDam2 },
			{ key: Assets.ControlRoomHydroelectricDam3 },
			{ key: Assets.ControlRoomHydroelectricDam4 },
			{ key: Assets.ControlRoomHydroelectricDam5 },
			{ key: Assets.ControlRoomHydroelectricDam6 },
			{ key: Assets.ControlRoomHydroelectricDam7 },
			{ key: Assets.ControlRoomHydroelectricDam8 },
		])


		// drawings
		// Variable !
		this.add.sprite(600, 150, Assets.ControlRoomCoal1).setOrigin(0).play('coalAnim');
		let smallScreen = this.add.sprite(150, 290, Assets.SmallScreen).setOrigin(0);

		// 0 : tuto | 1 : easy | 2 : medium | 3 : hard
		startMiniGame(this, this.difficulty, smallScreen);

		// pause button and trigger
		pause(this, theme);
	}

}

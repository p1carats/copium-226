import { Assets } from '../assets';
import { loadStory } from "../utils";

import startMiniGame from "../objects/minigame";
import dialogBox from "../objects/dialog";

export default class GameScene extends Phaser.Scene {
	private story;
	private emitter: Phaser.Events.EventEmitter;
	private background: Phaser.GameObjects.Sprite;
	private bg2: Phaser.GameObjects.TileSprite;
	private theme: Phaser.Sound.BaseSound;
	private text: string;

	constructor() {
		super({ key: 'GameScene' });
	}

	create() {
		this.emitter = new Phaser.Events.EventEmitter();

		this.emitter.on('next', () => {
			this.text = this.story.Continue();
			this.text = this.text.trim();
			if (this.story.canContinue) {
				// if there are tags, we need to call the good event
				if (this.story.currentTags.length !== 0) {
					let regex = /[a-zA-Z]+/;
					let event = this.story.currentTags[0];
					let swevent = regex.exec(event)[0].trim();
					switch (swevent) {
						case 'location':
							let location: String = event.substr(event.indexOf('=')+1).trim();
							this.emitter.emit('location', location, this.text);
							return;
						case 'sound':
							let sound: String = event.substr(event.indexOf('=')+1).trim();
							this.emitter.emit('sound', sound, this.text);
							return;
						case 'sound':
							let duration: String = event.substr(event.indexOf('=')+1).trim();
							this.emitter.emit('duration', duration, this.text);
							return;
						case 'minigame':
							let level: Number = parseInt(event.substr(event.indexOf('=')+1).trim());
							this.emitter.emit('minigame', level);
							return;
					}
				} else {
					this.emitter.emit('dialog', this.text);
				}
			} else {
				console.log(this.story.currentTags);
				if (this.story.currentTags.length !== 0){
					let title = this.story.currentTags[1];
					let subtitle = this.story.currentTags[2];
					let color = title.indexOf('Good') === -1 ? '#ff0000' : '#00ff00';
					this.scene.start('EndGameScene', {title: title, subtitle: subtitle, color: color});
					this.scene.stop();
				}
				this.emitter.emit('choices', this.text);
			}
		});

		this.emitter.on('dialog', text => {
			dialogBox(this, text);
		});

		this.emitter.on('choices', text => {
			dialogBox(this, text, this.story.currentChoices);
		});

		this.emitter.on('location', (location, text) => {
			this.change_location(location);
			this.time.delayedCall(2000, () => {
				this.emitter.emit('dialog', text);
			});
		});

		this.emitter.on('timeskip', (duration, text) => {
			console.log(duration);
			this.time.delayedCall(2000, () => {
				this.emitter.emit('dialog', text);
			});
		});

		this.emitter.on('sound', (sound, text) => {
			this.play_sound(sound); // TMP
			this.time.delayedCall(5000, () => {
				this.emitter.emit('dialog', text);
			});
		});

		this.emitter.on('minigame', level => {
			startMiniGame(this, level);
		});

		this.emitter.on('end_minigame', (level, result, quota) => {
			console.log('end_minigame lv :', level, result, quota);
			let inkVariables = ['isMiniGame1Won', 'isMiniGame2Won', 'isMiniGame3Won', 'isMiniGame4Won'];
			// if it's a prefect during the first day with your new boss
			if (level === 2) {
				this.story.variablesState.$('isQuotaRespected', Boolean(quota));
			}
			this.story.variablesState.$(inkVariables[level], Boolean(result));
			this.emitter.emit('dialog', this.text);
		});

		// dialog
		this.story = loadStory(this);

		// starting dialog
		this.emitter.emit('next');

		// pause menu and trigger
		this.scene.launch('PauseScene').bringToTop();
	}

	update() {
		try {
			this.bg2.tilePositionX += 1.2;
		} catch(TypeError) {
			//
		}
	}

	change_location(location: String) {
		// stop existing music
		this.tweens.add({
			targets: this.theme,
			volume: 0,
			ease: 'Linear',
			duration: 1500
		});
		// fade-out camera (black screen)
		this.cameras.main.fadeOut(750, 0, 0, 0);
		this.cameras.main.once('camerafadeoutcomplete', () => {
			this.time.delayedCall(500, () => {
				try {
					this.background.destroy();
				} catch(TypeError) {
					//
				}
				// change background and start music if neccessary
				if (location == 'room') {
					this.background = this.add.sprite(0, 0, Assets.RoomTheme).setOrigin(0);
					this.theme = this.sound.add(Assets.RoomTheme);
					this.theme.play('', { loop: true });
				} else if (location == 'coffee') {
					this.background = this.add.sprite(0, 0, Assets.CoffeeScene).setOrigin(0);
					this.theme = this.sound.add(Assets.CoffeeTheme);
					this.theme.play('', { loop: true });
				} else if (location.startsWith('village')) {
					switch (location) {
						case 'village_0':
							this.bg2 = this.add.tileSprite(0, 0, this.scale.width, this.scale.height, Assets.village0Scene).setOrigin(0);
							break;
						case 'village_1':
							this.bg2 = this.add.tileSprite(0, 0, this.scale.width, this.scale.height, Assets.village1Scene).setOrigin(0);
							break;
						case 'village_2_gh':
							this.bg2 = this.add.tileSprite(0, 0, this.scale.width, this.scale.height, Assets.village2_GreenHorizonScene).setOrigin(0);
							break;
						case 'village_2_cd':
							this.bg2 = this.add.tileSprite(0, 0, this.scale.width, this.scale.height, Assets.village2_CosmicDriveScene).setOrigin(0);
							break;
						case 'village_3_gh':
							this.bg2 = this.add.tileSprite(0, 0, this.scale.width, this.scale.height, Assets.village3_GreenHorizonScene).setOrigin(0);
							break;
						case 'village_3_cd':
							this.bg2 = this.add.tileSprite(0, 0, this.scale.width, this.scale.height, Assets.village3_CosmicDriveScene).setOrigin(0);
							break;
					}
					this.theme = this.sound.add(Assets.VillageTheme);
					this.theme.play('', { loop: true });
				} else if (location == 'control_room') {
					this.background = this.add.sprite(0, 0, Assets.ControlRoomScene).setOrigin(0);
					this.theme = this.sound.add(Assets.PowerPlantTheme);
					this.theme.play('', { loop: true });
				} else if (location.startsWith('office')) {
					switch (location) {
						case 'office_gh':
							this.background = this.add.sprite(0, 0, Assets.GreenHorizonOfficeScene).setOrigin(0);
							break;
						case 'office_cd':
							this.background = this.add.sprite(0, 0, Assets.CosmicDriveOfficeScene).setOrigin(0);
							break;
						case 'office_craig':
							this.background = this.add.sprite(0, 0, Assets.CraigOfficeScene).setOrigin(0);
							break;
						case 'office_amber':
							this.background = this.add.sprite(0, 0, Assets.AmberOfficeScene).setOrigin(0);
							break;
					}
					this.theme = this.sound.add(Assets.CorpoTheme);
					this.theme.play('', { loop: true });
				} else {
					this.background = this.add.sprite(0, 0, Assets.VoidScene).setOrigin(0);
				}
				this.cameras.main.fadeIn(750, 0, 0, 0);
			});
		});
	}

	play_sound(sound: String) {
		let ss;
		if (sound == 'clock') {
			ss = this.sound.add(Assets.ClockSound);
		} else if (sound == 'alarm') {
			ss = this.sound.add(Assets.AlarmSound);
		}
		ss.play();
		this.time.delayedCall(3000, () => {
			this.tweens.add({
				targets: ss,
				volume: 0,
				ease: 'Linear',
				duration: 1500
			});
		});
	}

	timeskip(duration: string) {
		this.cameras.main.fadeOut(750, 0, 0, 0);
		this.cameras.main.once('camerafadeoutcomplete', () => {
			this.time.delayedCall(500, () => {
				this.cameras.main.fadeIn(750, 0, 0, 0);
			});
		});
	}
}
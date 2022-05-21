import { Assets } from '../assets';
import { loadStory } from "../utils";

import startMiniGame from "../objects/minigame";
import dialogBox from '../objects/dialog';
import choiceBox from "../objects/choice";

export default class GameScene extends Phaser.Scene {
	private story;
	private emitter: Phaser.Events.EventEmitter;
	private background: Phaser.GameObjects.Sprite;
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
					let event = this.story.currentTags[0];
					switch (event) {
						case 'change_location':
							this.emitter.emit('change_location', this.text);
							return;
						case 'play_sound':
							this.emitter.emit('play_sound', this.text);
							return;
						case 'timeskip':
							this.emitter.emit('timeskip', this.text);
							return;
						case 'start_minigame':
							return;
					}
				} else {
					this.emitter.emit('dialog', this.text);
				}
			} else {
				this.emitter.emit('choices', this.text);
			}
		});

		this.emitter.on('dialog', text => {
			dialogBox(this, text);
		});

		this.emitter.on('change_location', text => {
			this.time.delayedCall(2000, () => {
				this.emitter.emit('dialog', text);
			});
		});

		this.emitter.on('play_sound', text => {
			this.time.delayedCall(5000, () => {
				this.emitter.emit('dialog', text);
			});
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

		this.emitter.on('choices', text => {
			console.log(text);
			console.log(this.story.currentChoices);
			choiceBox(this, text, this.story.currentChoices);
		});

		// default (void) background
		this.background = this.add.sprite(0, 0, Assets.VoidScene).setOrigin(0);

		// dialog
		this.story = loadStory(this);

		// change background from ink file
		this.story.BindExternalFunction('change_location', (location:string) => {
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
					// change background and start music if neccessary
					if (location == 'room') {
						this.background.setTexture(Assets.RoomTheme);
						this.theme = this.sound.add(Assets.RoomTheme);
						this.theme.play('', { loop: true });
					} else if (location == 'coffee') {
						this.background.setTexture(Assets.CoffeeScene);
						this.theme = this.sound.add(Assets.CoffeeTheme);
						this.theme.play('', { loop: true });
					} else if (location.startsWith('village')) {
						switch (location) {
							case 'village_0':
								this.background.setTexture(Assets.village0Scene);
								break;
							case 'village_1':
								this.background.setTexture(Assets.village1Scene);
								break;
							case 'village_2_gh':
								this.background.setTexture(Assets.village2_GreenHorizonScene);
								break;
							case 'village_2_cd':
								this.background.setTexture(Assets.village2_CosmicDriveScene);
								break;
							case 'village_3_gh':
								this.background.setTexture(Assets.village3_GreenHorizonScene);
								break;
							case 'village_3_cd':
								this.background.setTexture(Assets.village3_CosmicDriveScene);
								break;
							default:
								this.background.setTexture(Assets.village3_CosmicDriveScene);
								break;
						}
						this.theme = this.sound.add(Assets.VillageTheme);
						this.theme.play('', { loop: true });
					} else if (location == 'control_room') {
						this.background.setTexture(Assets.ControlRoomScene);
						this.theme = this.sound.add(Assets.PowerPlantTheme);
						this.theme.play('', { loop: true });
					} else {
						this.background.setTexture(Assets.VoidScene);
					}
					this.cameras.main.fadeIn(750, 0, 0, 0);
				});
			});
		}, false);

		this.story.BindExternalFunction('play_sound', (sound:string) => {
			let ss = this.sound.add(Assets.ClockSound);
			ss.play();
			this.time.delayedCall(3000, () => {
				this.tweens.add({
					targets: ss,
					volume: 0,
					ease: 'Linear',
					duration: 1500
				});
			})
		}, false);

		this.story.BindExternalFunction('timeskip', (level:integer) => {
			console.log('wouhou');
		}, false);

		this.story.BindExternalFunction('start_minigame', (level:integer) => {
			startMiniGame(this, level);
		}, false);

		// starting dialog
		this.emitter.emit('next');

		// pause menu and trigger (WIP)
		// this.scene.launch('PauseScene');
	}
}
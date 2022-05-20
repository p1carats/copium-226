import { Assets } from '../assets';
import { loadStory } from "../utils";
import dialogBox from '../objects/dialogbox';
import pause from "../objects/pause";

import getcharactertexture from "../objects/getcharactertexture";
import getbackgroundtexture from "../objects/getbackgroundtexture";

export default class TemplateDialogue extends Phaser.Scene {
	private story;
	private emitter: Phaser.Events.EventEmitter;
	private background: Phaser.GameObjects.Sprite;
	private theme: Phaser.Sound.BaseSound;
	// private choix: any[];

	constructor() {
		super({ key: 'TemplateDialogue' });
	}

	create() {
		this.emitter = new Phaser.Events.EventEmitter();

		this.emitter.on('next', () => {
			let text = this.story.Continue();
			if (this.story.canContinue){
				// If there are tags, we need to call the good event
				if (this.story.currentTags.length !== 0){
					let event = this.story.currentTags[0];
					switch (event) {
						case 'change_location':
							this.emitter.emit('change_location', text);
							return;
						case 'start_minigame':
							this.emitter.emit('start_minigame');
							return;
					}
				}else{
					this.emitter.emit('nextDialog', text);
				}
			}else{
				this.emitter.emit('choices');
			}
		});

		this.emitter.on('nextDialog', text => {
			dialogBox(this, getcharactertexture(text), text);
		});

		this.emitter.on('change_location', text => {
			console.log("Changing location...");
			this.time.delayedCall(2500, () => {
				this.emitter.emit('nextDialog', text);
			})
		});

		this.emitter.on('start_minigame', () => {
			console.log('start_minigame');
		});

		this.emitter.on('choices', choiceList => {
			console.log(choiceList);
		});

		// default (void) background
		this.background = this.add.sprite(0, 0, Assets.VoidScene).setOrigin(0);
		//this.theme = this.sound.add(Assets.RoomTheme);
		//this.theme.play('', { loop: true });

		// light effects (to-do)
		// this.background.setPipeline('Light2D');
		// this.lights.addLight(856, 346, 300, 0xffffff, 1);
		// this.lights.enable().setAmbientColor(0x555555);

		// music (room theme, looped) and click sound
		let clickedSound: Phaser.Sound.BaseSound = this.sound.add(Assets.ClickSound);

		// dialog
		this.story = loadStory(this);
		let choiceList;

		// change background from ink file
		this.story.BindExternalFunction('change_location', (location:string) => {
			// stop existing music
			this.tweens.add({
				targets: this.theme,
				volume: 0,
				ease: 'Linear',
				duration: 1000
			});
			// fade-out camera (black screen)
			this.cameras.main.fadeOut(750, 0, 0, 0);
			this.cameras.main.once('camerafadeoutcomplete', () => {
				this.time.delayedCall(1000, () => {
					getbackgroundtexture(this, location);
					// start music if neccessary
					if (location === 'room') {
						this.theme = this.sound.add(Assets.RoomTheme);
						this.theme.play('', { loop: true });
					} else if (location === 'coffee') {
						this.theme = this.sound.add(Assets.CoffeeTheme);
						this.theme.play('', { loop: true });
					} else if (location.search('village') !== -1) {
						this.theme = this.sound.add(Assets.RoomTheme);
						this.theme.play('', { loop: true });
					} else if (location === 'control_room') {
						this.theme = this.sound.add(Assets.PowerPlantTheme);
						this.theme.play('', { loop: true });
					}
					this.cameras.main.fadeIn(750, 0, 0, 0);
				});
			});
		}, false);

		this.story.BindExternalFunction('start_minigame', (level:integer) => {
			console.log(level);
		}, false);

		// starting dialog
		//this.story.Continue();
		this.emitter.emit('next');

		// pause button and trigger
		pause(this);
	}
}
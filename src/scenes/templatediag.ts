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
			console.log(location);
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
					if (location = 'room') {
						this.theme = this.sound.add(Assets.RoomTheme);
						this.theme.play('', { loop: true });
					} else if (location = 'coffee') {
						this.theme = this.sound.add(Assets.CoffeeTheme);
						this.theme.play('', { loop: true });
					} else if (location = 'village_0' || 'village_1' || 'village_2_gh' || 'village_2_cd' || 'village_3_gh' || 'village_3_cd') {
						this.theme = this.sound.add(Assets.RoomTheme);
						console.log(this.theme);
						this.theme.play('', { loop: true });
					} else if (location = 'control_room') {
						this.theme = this.sound.add(Assets.PowerPlantTheme);
						this.theme.play('', { loop: true });
					}
					this.cameras.main.fadeIn(750, 0, 0, 0);
				});
			});
		});

		// starting dialog
		dialogBox(this, null, this.story.Continue());
		this.emitter.on('nextDialog', () => {
			if (this.story.canContinue) {
				let text = this.story.Continue();
				dialogBox(this, getcharactertexture(text), text);
			} else {
				choiceList = this.story.currentChoices;
				this.emitter.emit('choices', choiceList);
			}
		});

		this.emitter.on('choices', choiceList => {
			console.log(choiceList);
		});

		/*
		let dialogArray = ['Test 1, eheh ça marche !', 'Non mais frère ??', 'Oui ?', 'Ok mec.'];
		let persoArray = [ Assets.George, Assets.Benoit, Assets.George, Assets.Benoit ];
		let index = 0;
		this.choix = [];
		this.emitter.on('nextDialog', () => {
			if (index < 4) {
				dialogBox(this, persoArray[index], dialogArray[index], index % 2 === 0 ? 1 : 0);
				index++;
			}
		}, this);
		//this.emitter.on('choice', script, this);
		this.emitter.emit('nextDialog');
		*/

		// pause button and trigger
		pause(this);
	}
}
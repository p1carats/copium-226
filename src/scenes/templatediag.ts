import {Assets} from '../assets';
import {loadStory} from "../utils";
import dialogBox from '../objects/dialogbox';
import pause from "../objects/pause";

import getcharactertexture from "../objects/getcharactertexture";
import getbackgroundtexture from "../objects/getbackgroundtexture";
import getthemesong from "../objects/getthemesong";

export default class TemplateDialogue extends Phaser.Scene {
	/*
	private choix: any[];
	 */
	private emitter: Phaser.Events.EventEmitter;
	private theme: Phaser.Sound.BaseSound;
	private background: Phaser.GameObjects.Sprite;

	constructor() {
		super({ key: 'TemplateDialogue' });
	}

	create() {
		this.emitter = new Phaser.Events.EventEmitter();

		// fade-in
		this.cameras.main.fadeIn(2000, 0, 0, 0);

		// default background and theme
		this.background = this.add.sprite(0, 0, Assets.RoomScene).setOrigin(0);
		this.theme = this.sound.add(Assets.RoomTheme);
		this.theme.play('', { loop: true });

		// light effects (to-do)
		// this.background.setPipeline('Light2D');
		// this.lights.addLight(856, 346, 300, 0xffffff, 1);
		// this.lights.enable().setAmbientColor(0x555555);

		// music (room theme, looped) and click sound
		let clickedSound: Phaser.Sound.BaseSound = this.sound.add(Assets.ClickSound);

		// dialog
		let story = loadStory(this);
		let choiceList;
		let background = 'room';
		// Starting dialogs
		dialogBox(this, null, story.Continue(), 0);
		this.emitter.on('nextDialog', () => {
			let location = story.variablesState['location'];
			if (location != background) {
				this.tweens.add({
					targets: this.theme,
					volume: 0,
					ease: 'Linear',
					duration: 1500
				});
				this.cameras.main.fadeOut(1000, 0, 0, 0);
				this.cameras.main.once('camerafadeoutcomplete', () => {
					this.time.delayedCall(1000, () => {
						this.cameras.main.fadeIn(1000, 0, 0, 0);
						getbackgroundtexture(this, location);
						getthemesong(this, location);
						background = location;
						this.theme.play('', { loop: true });
						if (story.canContinue) {
							let text = story.Continue();
							dialogBox(this, getcharactertexture(text), text, 0);
						} else {
							choiceList = story.currentChoices;
							this.emitter.emit('choices', choiceList);
						}
					});
				});
			} else {
				background = location;
				if (story.canContinue) {
					let text = story.Continue();
					dialogBox(this, getcharactertexture(text), text, 0);
				} else {
					choiceList = story.currentChoices;
					this.emitter.emit('choices', choiceList);
				}
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
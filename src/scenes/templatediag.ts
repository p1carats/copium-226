import { Assets } from '../assets';
import { loadStory } from "../utils";
import dialogBox from '../objects/dialogbox';
import pause from "../objects/pause";

export default class TemplateDialogue extends Phaser.Scene {
	/*
	private choix: any[];
	 */
	private emitter: Phaser.Events.EventEmitter;
	private theme: Phaser.Sound.BaseSound;

	constructor() {
		super({ key: 'TemplateDialogue' });
	}

	create() {
		// fade-in
		this.cameras.main.fadeIn(2000, 0, 0, 0);

		// background
		let background: Phaser.GameObjects.Sprite = this.add.sprite(0, 0, Assets.RoomScene).setOrigin(0).setPipeline('Light2D');

		// light effects
		this.lights.addLight(856, 346, 300, 0xffffff, 1);
		this.lights.enable().setAmbientColor(0x555555);

		// music (room theme, looped) and click sound
		let clickedSound: Phaser.Sound.BaseSound = this.sound.add(Assets.ClickSound);
		this.theme = this.sound.add(Assets.RoomTheme);
		this.theme.play('', { loop: true });

		// dialog
		let story = loadStory(this);
		//console.log(story.ContinueMaximally());
		let text = '';
		let choiceList;
		while (story.canContinue) {
			let paragraphText = story.Continue();
				text += paragraphText;
				// if this is the last line, render the text & the choices
				if (!story.canContinue) {
					// update the main paragraph text ?
					// update the list of possible choices
					choiceList = story.currentChoices;
				}
    }
		dialogBox(this, null, text, 0);
		console.log(choiceList);

		/*
		let dialogArray = ['Test 1, eheh ça marche !', 'Non mais frère ??', 'Oui ?', 'Ok mec.'];
		let persoArray = [ Assets.George, Assets.Benoit, Assets.George, Assets.Benoit ];
		let index = 0;
		this.choix = [];
		this.emitter = new Phaser.Events.EventEmitter();
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
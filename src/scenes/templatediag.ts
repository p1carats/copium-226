import { Assets } from '../assets';
import dialogBox from '../objects/dialogBox';
import choiceBox from '../objects/choice';

// import * as data from '../../assets/story_part1.json';

export default class TemplateDialogue extends Phaser.Scene {
	private choix: any[];
	private emitter: Phaser.Events.EventEmitter;

	constructor() {
		super({ key: 'TemplateDialogue' });
	}

	preload() {
		// preload
	}

	create() {

		let dialogArray = [
			'Puceau moi ? Sérieusement ^^ haha on me l avait pas sortie celle la depuis loooongtemps demande a mes potes si je suis puceau tu vas voir les réponses que tu vas te prendre XD rien que la semaine passee j ai niquer dont chuuuuut ferme la puceau de merde car toi tu m as tout tout l air d un bon puceau de merde car souvent vous etes frustrer de ne pas baiseR ses agreable de se faire un missionnaire ou un amazone avec une meuf hein ? tu peux pas répondre car tu ne sais pas ce que c ou alors tu le sais mais tu as du taper dans ta barre de recherche « missionnaire sexe » ou « amazone sexe » pour comprendre ce que c etait mdddrrr !! cest grave quoiquil en soit....pour revenir a moi, je pense que je suis le mec le moins puceau de ma bande de 11 meilleurs amis pas psk j ai eu le plus de rapport intime mais psk j ai eu les plus jolie femme que mes amis ses pas moi qui le dit, ses eux qui commente sous mes photos insta « trop belle la fille que tu as coucher avec hier en boite notamment! » donc après si tu veux :)',
			'Non mais frère tu t\'es vu ??',
			'Oui et ?',
			'Ok mec.'
		];

		let persoArray = [
			Textures.GeorgeLeft,
			Textures.GeorgeRight,
			Textures.GeorgeLeft,
			Textures.GeorgeRight
		];

		let index = 0;


		this.choix = [];
		this.emitter = new Phaser.Events.EventEmitter();

		this.emitter.on('nextDialog', () => {
			if (index < 4){
				dialogBox(this, persoArray[index], dialogArray[index], index % 2 === 0 ? 1 : 0);
				index++;
			}
		}, this);

		this.emitter.on('choice', script, this);

		this.cameras.main.fadeIn(2000, 0, 0, 0);

		// background
		let background: Phaser.GameObjects.Sprite = this.add.sprite(0, 0, Assets.BedroomScene).setOrigin(0).setPipeline('Light2D');

		// light effects
		this.lights.addLight(856, 346, 300, 0xffffff, 1);
		this.lights.enable().setAmbientColor(0x555555);

		// music (room theme, looped) and click sound
		let clickedSound: Phaser.Sound.BaseSound = this.sound.add(Assets.ClickSound);
		let roomMusic: Phaser.Sound.BaseSound = this.sound.add(Assets.RoomTheme);
		roomMusic.play('', { loop: true });

<<<<<<< HEAD
		// create dialogbox
		let content: string = 'Puceau moi ? Sérieusement ^^ haha on me l avait pas sortie celle la depuis loooongtemps demande a mes potes si je suis puceau tu vas voir les réponses que tu vas te prendre XD rien que la semaine passee j ai niquer dont chuuuuut ferme la puceau de merde car toi tu m as tout tout l air d un bon puceau de merde car souvent vous etes frustrer de ne pas baiseR ses agreable de se faire un missionnaire ou un amazone avec une meuf hein ? tu peux pas répondre car tu ne sais pas ce que c ou alors tu le sais mais tu as du taper dans ta barre de recherche « missionnaire sexe » ou « amazone sexe » pour comprendre ce que c etait mdddrrr !! cest grave quoiquil en soit....pour revenir a moi, je pense que je suis le mec le moins puceau de ma bande de 11 meilleurs amis pas psk j ai eu le plus de rapport intime mais psk j ai eu les plus jolie femme que mes amis ses pas moi qui le dit, ses eux qui commente sous mes photos insta « trop belle la fille que tu as coucher avec hier en boite notamment! » donc après si tu veux :)';
		dialogBox(this, Assets.GeorgeRight, content, 0);
		dialogBox(this, Assets.GeorgeLeft, content, 0);

		// choicebox
		// choiceBox(this, Assets.GeorgeRight, 'Qui est une pute ?', 0, ['Simon', 'Noé', 'Matéo', 'Romain', 'Cyril']);
=======
		this.emitter.emit('nextDialog');

		// dialogbox

		// choicebox
		//choiceBox(this, Textures.GeorgeRight, 'Qui est une pute ?', 0, ['Simon', 'Noé', 'Matéo', 'Romain', 'Cyril']);
>>>>>>> 7e009d8736f0973e4ddf2486eeef38eda334e342

		// pause button and trigger
		let pauseButton: Phaser.GameObjects.Sprite = this.add.sprite(50, 50, Assets.PauseButton).setOrigin(0).setInteractive();
		pauseButton.on('pointerover', () => { pauseButton.setTexture(Assets.PauseButtonHover) });
		pauseButton.on('pointerout', () => { pauseButton.setTexture(Assets.PauseButton) });
		pauseButton.on('pointerdown', () => {
			clickedSound.play();
			roomMusic.pause();
			this.scene.launch('PauseMenu', { sceneFrom: this.scene.key }).bringToTop();
			this.scene.sendToBack();
			this.scene.pause();
		});
	}
}
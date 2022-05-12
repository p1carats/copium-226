import {Textures} from "../assets";

export default function pauseMenu(game){

    let clickedSound = game.sound.add(Textures.Click);
    let pauseButton = game.add.sprite(20, 20, 'pauseButton').setOrigin(0).setInteractive();

    pauseButton.on('pointerover', () => { pauseButton.setTexture('pauseButtonHover') });
    pauseButton.on('pointerout', () => { pauseButton.setTexture('pauseButton') });
    pauseButton.on('pointerdown', () => {
        clickedSound.play();
        /*game.cameras.main.setPostPipeline(KawaseBlurPostFx, {
            blur: 4,
            quality: 3
        }),*/
        game.scene.run('PauseMenu');
        game.scene.sleep();
    });
}
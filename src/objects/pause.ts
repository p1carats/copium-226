import Phaser from "phaser";
import {Assets} from "../assets";

export default function pause(game, sound) {
    let pauseSound: Phaser.Sound.BaseSound = game.sound.add(Assets.PauseInSound);
    let pauseButton: Phaser.GameObjects.Sprite = game.add.sprite(50, 50, Assets.PauseButton).setOrigin(0).setInteractive();
    pauseButton.on('pointerover', () => { pauseButton.setTexture(Assets.PauseButtonHover) });
    pauseButton.on('pointerout', () => { pauseButton.setTexture(Assets.PauseButton) });
    pauseButton.on('pointerdown', () => {
        if (sound !== null){
            sound.pause();
        }
        pauseSound.play();
        game.scene.launch('PauseMenu', { sceneFrom: game.scene.key }).bringToTop();
        game.scene.sendToBack();
        game.scene.pause();
    });
}
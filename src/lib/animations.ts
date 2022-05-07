import timer from "./timer";

export function blink(game, targets, time) {
    game.tweens.add({
        targets: targets,
        alpha: 0,
        duration: time,
        yoyo: true,
        loop: -1
    });
}

export function fadeIn(game, targets, time) {
    game.tweens.add({
        targets: targets,
        alpha: 1,
        duration: time,
        repeat: 0
    });
}

export function fadeOut(game, targets, time) {
    game.tweens.add({
        targets: targets,
        alpha: 0,
        duration: time,
        repeat: -1
    });
}

export function createDialogBox(game, boxSprite, characterSprite, dialogArray) {
    function move(...sprites) {
        for (let sprite of sprites)
            sprite.setX(sprite.x + 8);
    }

    let slider = (boxSprite, characterSprite) => {
        let callback = () => move(characterSprite, boxSprite);
        timer(game, 2, callback, false, 130)
    }

    slider(boxSprite, characterSprite);
}
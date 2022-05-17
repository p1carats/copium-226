import {Assets} from "../assets";

export default function animation(game, key, frame){
    game.anims.create({
        key: key,
        frames: frame,
        frameRate: 2,
        repeat: -1
    });
}
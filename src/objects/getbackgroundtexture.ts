import {Assets} from "../assets";

const backgrounds = [
    Assets.RoomScene,
    Assets.CoffeeScene,
    Assets.village0Scene,
    Assets.village1Scene,
    Assets.village2_GreenHorizonScene,
    Assets.village3_GreenHorizonScene,
    Assets.village2_CosmicDriveScene,
    Assets.village3_CosmicDriveScene,
    Assets.VoidScene
]

export default function getbackgroundtexture(game, background){
    switch (background) {
        case 'room':
            game.background.setTexture(backgrounds[0]);
            return;
        case 'coffee':
            game.background.setTexture(backgrounds[1]);
            return;
        case 'village_0':
            return backgrounds[2];
        case 'village_1':
            return backgrounds[3];
        case 'village_2_gh':
            return backgrounds[4];
        case 'village_3_gh':
            return backgrounds[5];
        case 'village_2_cd':
            return backgrounds[6];
        case 'village_3_cd':
            return backgrounds[7];
        case 'void':
            game.background.setTexture(backgrounds[8]);
            return;
        default:
            game.background.setTexture(backgrounds[8]);
            return;
    }
}
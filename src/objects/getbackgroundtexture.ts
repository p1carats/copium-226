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
    Assets.ControlRoomScene,
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
            game.background.setTexture(backgrounds[2]);
            return;
        case 'village_1':
            game.background.setTexture(backgrounds[3]);
            return;
        case 'village_2_gh':
            game.background.setTexture(backgrounds[4]);
            return;
        case 'village_3_gh':
            game.background.setTexture(backgrounds[5]);
            return;
        case 'village_2_cd':
            game.background.setTexture(backgrounds[6]);
            return;
        case 'village_3_cd':
            game.background.setTexture(backgrounds[7]);
            return;
        case  'control_room':
            game.background.setTexture(backgrounds[8]);
            return;
        case 'void':
            game.background.setTexture(backgrounds[9]);
            return;
        default:
            game.background.setTexture(backgrounds[9]);
            return;
    }
}
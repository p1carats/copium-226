import { Assets } from "../assets";

export default function getbackgroundtexture(game, background) {
	switch (background) {
		case 'room':
			game.background.setTexture(Assets.RoomTheme);
			return;
		case 'coffee':
			game.background.setTexture(Assets.CoffeeScene);
			return;
		case 'village_0':
			game.background.setTexture(Assets.village0Scene);
			return;
		case 'village_1':
			game.background.setTexture(Assets.village1Scene);
			return;
		case 'village_2_gh':
			game.background.setTexture(Assets.village2_GreenHorizonScene);
			return;
		case 'village_2_cd':
			game.background.setTexture(Assets.village2_CosmicDriveScene);
			return;
		case 'village_3_gh':
			game.background.setTexture(Assets.village3_GreenHorizonScene);
			return;
		case 'village_3_cd':
			game.background.setTexture(Assets.village3_CosmicDriveScene);
			return;
		case 'control_room':
			game.background.setTexture(Assets.ControlRoomScene);
			return;
		case 'void':
			game.background.setTexture(Assets.VoidScene);
			return;
		default:
			game.background.setTexture(Assets.VoidScene);
			return;
	}
}
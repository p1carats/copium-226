import { Assets } from "../assets";

export default function getthemesong(game, location) {
	switch (location) {
		case 'room':
			game.theme = game.sound.add(Assets.RoomTheme);
			return;
		case 'coffee':
			game.theme = game.sound.add(Assets.CoffeeTheme);
			return;
		case 'village_0':
			game.theme = game.sound.add(Assets.VillageTheme);
			return;
		case 'village_1':
			game.theme = game.sound.add(Assets.VillageTheme);
			return;
		case 'village_2_gh':
			game.theme = game.sound.add(Assets.VillageTheme);
			return;
		case 'village_3_gh':
			game.theme = game.sound.add(Assets.VillageTheme);
			return;
		case 'village_2_cd':
			game.theme = game.sound.add(Assets.VillageTheme);
			return;
		case 'village_3_cd':
			game.theme = game.sound.add(Assets.VillageTheme);
			return;
		case 'control_room':
			game.theme = game.sound.add(Assets.PowerPlantTheme);
			return;
		case 'void':
			game.theme = game.sound.add(Assets.MainTheme);
			return;
		default:
			game.theme = game.sound.add(Assets.MainTheme);
			return;
	}
}
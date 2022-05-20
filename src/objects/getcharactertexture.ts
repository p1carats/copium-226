import { Assets } from "../assets";

export default function getcharactertexture(perso) {
	switch (perso) {
		case 'George':
			return Assets.George;
		case 'Benoit':
			return Assets.Benoit;
		case 'Gerard':
			return Assets.Gerard;
		case 'Amber':
			return Assets.Amber;
		case 'M. Vermeil':
			return Assets.Craig;
		case 'Craig':
			return Assets.Craig;
		case 'Marion':
			return Assets.Marion;
		case 'Marc':
			return Assets.Marc;
		case '???':
			return Assets.Unknown;
		default:
			return null;
  }
}
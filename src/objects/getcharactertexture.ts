import { Assets } from "../assets";

export default function getcharactertexture(text) {
	let perso = text.substring(0, text.search(':'));
	// check if it's not a sentence
	perso = perso.length > 13 ? '' : perso;
	// replace accents
	perso = perso.normalize("NFD").replace(/\p{Diacritic}/gu, "");
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
		case '':
			return null;
		default:
			return Assets.Unknown;
  }
}
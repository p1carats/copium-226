import {Assets} from "../assets";

const characters = [Assets.George, Assets.Benoit, Assets.Gerard, Assets.Amber, Assets.Craig, Assets.Marion, Assets.Marc, Assets.Unknown];

export default function getcharactertexture(text){

    let perso = text.substring(0, text.search(':'));
    // Check is it's not a sentence
    perso = perso.length > 13 ? '' : perso;
    // remplace accents
    perso = perso.normalize("NFD").replace(/\p{Diacritic}/gu, "");
    switch (perso) {
        case 'George':
            return characters[0];
        case 'Benoit':
            return characters[1];
        case 'Gerard':
            return characters[2];
        case 'Amber':
            return characters[3];
        case 'M. Vermeil':
            return characters[4];
        case 'Craig':
            return characters[4];
        case 'Marion':
            return characters[5];
        case 'Marc':
            return characters[6];
        case '':
            return null;
        default:
            return characters[7];
    }
}
import ink from 'inkjs/dist/ink';
import { Assets } from './assets';

export const loadStory = () => {
  // load .json file generated by inklecate and create story object
  const story = new ink.Story(Assets.Story);
  return story;
};

export default function script(game) {
	console.log(game.choix);
}
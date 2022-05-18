let Story = require('inkjs').Story;

export default function script(game) {
    const json =game.cache.json.get("story");
    const story = new Story(json);
    //console.log(story.ContinueMaximally());
    //console.log();
    return story;
}
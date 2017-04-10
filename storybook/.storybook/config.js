import { configure, setAddon } from '@kadira/storybook';
import infoAddon from '@kadira/react-storybook-addon-info';
require('../node_modules/bootstrap/dist/css/bootstrap.css');

function loadStories() {
  require('../stories/ButtonTest');
  require('../stories/Modal');
}

setAddon(infoAddon);

configure(loadStories, module);

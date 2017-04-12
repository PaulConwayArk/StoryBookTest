import { configure, setAddon } from '@kadira/storybook';
import infoAddon from '@kadira/react-storybook-addon-info';
import knobs from '@kadira/storybook-addon-knobs';
import chaptersAddon from 'react-storybook-addon-chapters';
require('../node_modules/bootstrap/dist/css/bootstrap.css');
require('../node_modules/react-bootstrap-table/css/react-bootstrap-table.css');

function loadStories() {
  require('../stories/Modal_Stories');
  require('../stories/Bootstrap_Table_Stories');
}

setAddon(infoAddon);
setAddon(chaptersAddon);
// setAddon(knobs);

configure(loadStories, module);

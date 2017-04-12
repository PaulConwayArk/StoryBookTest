import { configure, setAddon } from '@kadira/storybook';
import infoAddon from '@kadira/react-storybook-addon-info';
import knobs from '@kadira/storybook-addon-knobs';
import chaptersAddon from 'react-storybook-addon-chapters';
require('../node_modules/bootstrap/dist/css/bootstrap.css');
require('../node_modules/react-bootstrap-table/css/react-bootstrap-table.css');

function loadStories() {
  require('../stories/React_Bootstrap');
  require('../stories/React_Bootstrap_Table');
}

setAddon(infoAddon);
setAddon(chaptersAddon);
// setAddon(knobs);

configure(loadStories, module);

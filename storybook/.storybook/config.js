import { configure, setAddon } from '@kadira/storybook';
import infoAddon from '@kadira/react-storybook-addon-info';
import knobs from '@kadira/storybook-addon-knobs';
import chaptersAddon from 'react-storybook-addon-chapters';
require('../node_modules/bootstrap/dist/css/bootstrap.css');
require('../node_modules/react-bootstrap-table/css/react-bootstrap-table.css');
require('../node_modules/font-awesome/css/font-awesome.css');
require('../node_modules/react-s-alert/dist/s-alert-default.css');
require('../node_modules/react-datepicker/dist/react-datepicker.css');
require('../styles/main.css');

function loadStories() {
  require('../stories/Playground');
  require('../stories/React_Bootstrap');
  require('../stories/React_Bootstrap_Table');
  require('../stories/React_Highcharts');
  require('../stories/NotificationPanel');
  require('../stories/FormControl');
  require('../stories/DatePicker');
}

setAddon(infoAddon);
setAddon(chaptersAddon);

configure(loadStories, module);

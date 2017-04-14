import React  from 'react';
import { storiesOf } from '@kadira/storybook';
import { withKnobs, text, select } from '@kadira/storybook-addon-knobs';
import ModalView from '../src/components/Modal.js';
import PanelView from '../src/components/Panel.js';
import {btnOptions,
        btnDefaultValue,
        ModalSizeOptions ,
        ModalSizeDefaultValue} from '../static/const.js';


storiesOf('React Bootstrap', module)
.addDecorator(withKnobs)
.addWithChapters(
  'Bootstrap Modal',
  {
    subtitle: 'Multiple functions of react-bootstrap-table',
    info: 'Use the settings to change the modal size and text',
    chapters: [
      {
        title: 'Bootstrap Modal',
        sections: [
          {
            sectionFn: () =>
            (
              <ModalView
                btnText = {text('Button Text', 'Deafult Modal')}
                btnStyle = {select('Button Style', btnOptions, btnDefaultValue)}
                modalSize = {select('Modal Size', ModalSizeOptions, ModalSizeDefaultValue)}
                modalTitleText = {text('Body Ttile', 'Modal Title')}I
                modalBodyText = {text('Body Text', 'This is the modal body text!')}
                className = {text('Modal Style', 'Axpi')}
              />
            ),
            options: {
              showSource: false,
              allowSourceToggling: true,
              showPropTables: false,
              allowPropTablesToggling: false,
            }
          }
        ]
      },

    ]
  }
)
.addWithChapters(
  'Bootstrap Panel',
  {
    subtitle: 'Multiple functions of react-bootstrap-table',
    chapters: [
      {
        title: 'Basic Bootstrap Panel',
        sections: [
          {
            sectionFn: () =>
            (
              <PanelView

              />
            ),
            options: {
              showSource: false,
              allowSourceToggling: true,
              showPropTables: false,
              allowPropTablesToggling: false,
            }
          }
        ]
      },
      {
        title: 'Panel with List',
        sections: [
          {
            sectionFn: () =>
            (
              <PanelView
                defaultExpanded = {true}
                listGroup = {true}
              />
            ),
            options: {
              showSource: false,
              allowSourceToggling: true,
              showPropTables: false,
              allowPropTablesToggling: false,
            }
          }
        ]
      }

    ]
  }
)

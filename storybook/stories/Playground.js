import React , { Component } from 'react';
import { storiesOf } from '@kadira/storybook';
import { withKnobs, text, select } from '@kadira/storybook-addon-knobs';
import ModalView from '../src/components/Modal';
import PanelView from '../src/components/Panel';
import {btnOptions,
        btnDefaultValue,
        ModalSizeOptions ,
        ModalSizeDefaultValue} from '../static/const';


storiesOf('Ark Playground', module)
.addDecorator(withKnobs)
.addWithChapters(
  'Playground',
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
                modalTitleText = {text('Body Ttile', 'Modal Title')}
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

import React , { Component } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { storiesOf } from '@kadira/storybook';
import { withKnobs, text, boolean, number } from '@kadira/storybook-addon-knobs';
import ModalView from '../src/components/Modal.js'


storiesOf('Bootstrap Modal', module)
.addDecorator(withKnobs)
.addWithChapters(
  'Basic Table',
  {
    subtitle: 'Multiple functions of react-bootstrap-table',
    info: `
        **Contains the following Chapters: **
        - Default Modal.
        - Small Modal.
        - Large Modal.
      `,
    chapters: [
      {
        title: 'Default Modal',
        sections: [
          {
              sectionFn: () =>
              (
                <ModalView
                  btnText = {text('Button Text', 'Deafult Modal')}
                  btnStyle = {text('Button Style', 'primary')}
                  modalTitleText = {text('Body Ttile', 'Modal Title')}I
                  modalBodyText = {text('Body Text', 'This is the modal body text!')}I
                 />
              ),
              options: {
                showSource: false,
                allowSourceToggling: true,
                showPropTables: false,
                allowPropTablesToggling: false,
              },
          }
        ]
      },
      {
        title: 'Small Modal',
        sections: [
          {
              sectionFn: () =>
              (
                <ModalView
                  btnText = {'Large Modal'}
                  modalSize = {'lg'}
                  modalBodyText = {'Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.'}
                 />
              ),
              options: {
                showSource: false,
                allowSourceToggling: true,
                showPropTables: false,
                allowPropTablesToggling: false,
              },
          }
        ]
      },
      {
        title: 'Small Modal',
        sections: [
          {
              sectionFn: () =>
              (
                <ModalView
                  btnText = {'Small Modal'}
                  modalSize = {'sm'}
                  modalBodyText = {'Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.'}
                 />
              ),
              options: {
                showSource: false,
                allowSourceToggling: true,
                showPropTables: false,
                allowPropTablesToggling: false,
              },
          }
        ]
      }
    ]
  }
)

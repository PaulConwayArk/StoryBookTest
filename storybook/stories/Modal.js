import React , { Component } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { storiesOf } from '@kadira/storybook';
import ModalView from '../src/components/Modal.js'

storiesOf('Bootstrap Modal', module)
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
                  btnText = {'Default Modal'}
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

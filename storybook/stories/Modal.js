import React , { Component } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { storiesOf } from '@kadira/storybook';
import ModalView from '../src/components/Modal.js'

storiesOf('Bootstrap Modal', module)
.addWithInfo('default', () => (
  <ModalView
    btnText = {'test'}
  />
))

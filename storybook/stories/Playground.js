import React , { Component } from 'react';
import { storiesOf } from '@kadira/storybook';
import { withKnobs, boolean, select } from '@kadira/storybook-addon-knobs';
import PageLayout from '../src/components/PlaygroundLayout/PageLayout';
import ModalPlayground from '../src/components/Playground/index';

import { Provider } from 'react-redux';
import { rootReducer } from '../src/reducers/index';
import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
// import store from '../src/stores/index';

const initalState = { showModal: false };
const store = createStore( rootReducer, initalState, applyMiddleware(thunkMiddleware));

export const themeOptions = {
  ark: 'Ark',
  k4view: 'K4View',
  axpi: 'axpi'
}

storiesOf('Ark Playground', module)
.addDecorator((getStory) => (
  <Provider store={store}>
    { getStory() }
  </Provider>
))
.addDecorator(withKnobs)
.add('Playground', () =>
  <PageLayout
    headerFixed={boolean('Fixed Header', false)}
    footerFixed={boolean('Fixed Footer', false)}
    navFixed={boolean('Fixed Nav&Header', false)}
    menuTop={boolean('Menu Top', false)}
    cssTheme={select('Theme', themeOptions, 'k4view')}
  />
)
// .add('Component Playground', () =>
// <ModalPlayground />
// )

import React , { Component } from 'react';
import { storiesOf } from '@kadira/storybook';
import { withKnobs, boolean, select } from '@kadira/storybook-addon-knobs';
import PageLayout from '../src/components/PlaygroundLayout/PageLayout';
import ModalPlayground from '../src/components/Playground/index';

export const themeOptions = {
  ark: 'Ark',
  k4view: 'K4View',
  axpi: 'axpi'
}


storiesOf('Ark Playground', module)
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
.add('Component Playground', () =>
<ModalPlayground />
)

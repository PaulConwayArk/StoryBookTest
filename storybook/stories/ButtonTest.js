import React from 'react';
import {action, storiesOf } from '@kadira/storybook';

const onButtonPress = action('Button has been pressed!');
class ButtonTest extends React.Component {
  render() {
    return (
      <button
        onClick={onButtonPress}
      >
        Click Me!!!
      </button>
    );
  }
}

storiesOf('Button', module)
  .addWithInfo('default', () => (
    <ButtonTest />
  ))

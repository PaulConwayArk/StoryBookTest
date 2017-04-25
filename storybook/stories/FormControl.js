import React , { Component } from 'react';
import { storiesOf } from '@kadira/storybook';
import { withKnobs, text, select, boolean } from '@kadira/storybook-addon-knobs';
import { Checkbox, Radio, TextBox } from '../src/components/FormUtils';


storiesOf('Form Control', module)
.addDecorator(withKnobs)
.addWithChapters(
  'Checkboxes',
  {
    chapters: [
      {
        title: 'Checkboxes',
        sections: [
          {
            sectionFn: () =>
            (
              <div>
                <Checkbox
                  value = {text('Checkbox 1 Text', 'Checkbox 1')}
                  disabled = {boolean('Checkbox 1 Disable', false)}
                />
                <Checkbox
                  value = {text('Checkbox 2 Text', 'Checkbox 2')}
                  disabled = {boolean('Checkbox 2 Disable', false)}
                />
                <Checkbox
                  value = {text('Checkbox 3 Text', 'Checkbox 3')}
                  disabled = {boolean('Checkbox 3 Disable', false)}
                />
              </div>
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
.addWithChapters(
  'Radio Buttons',
  {
    chapters: [
      {
        title: 'Radio Buttons',
        sections: [
          {
            sectionFn: () =>
            (
              <div>
                <Radio
                  defaultCheck={'Radio1'}
                  value = {'Radio1'}
                  // checkedEventRadio = {'Radio 1'}
                  disabled = {boolean('Radio 1 Disable', false)}
                />
                <Radio
                  value = {'Radio2'}
                  // checkedEvent = {'Radio 2'}
                  disabled = {boolean('Radio 2 Disable', false)}
                />
                <Radio
                  value = {'Radio3'}
                  // checkedEvent = {'Radio 3'}
                  disabled = {boolean('Radio 3 Disable', false)}
                />
              </div>
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
.addWithChapters(
  'User input',
  {
    chapters: [
      {
        title: 'User input',
        sections: [
          {
            sectionFn: () =>
            (
              <div>
                <TextBox
                  textBoxType={select('Input Type', {number: 'Numbers', text: 'Text',}, 'text')}
                  placeholder={text('Enter text here!', 'Placeholder')}
                />
              </div>
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

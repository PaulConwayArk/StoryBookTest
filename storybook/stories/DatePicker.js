import React , { Component } from 'react';
import { storiesOf } from '@kadira/storybook';
import { withKnobs, text, select, boolean } from '@kadira/storybook-addon-knobs';
import DatePicker from '../src/components/DatePicker';
import { datePickerMonth } from '../static/const';


storiesOf('React Date Picker', module)
.addDecorator(withKnobs)
.addWithChapters(
  'DatePicker',
  {
    subtitle: 'Multiple functions of DatePicker',
    info: `
    **Contains the following Chapters: **
    - Number of Months Displayed.
    - DatePicker Dropdown.
    - Scroll Table.
    `,
    chapters: [
      {
        title: 'Basic DatePicker',
        sections: [
          {
            sectionFn: () =>
            (
              <DatePicker
                monthsShown={1}
              />
            ),
            options: {
              showSource: false,
              allowSourceToggling: true,
              showPropTables: false,
              allowPropTablesToggling: false
            }
          }
        ]
      },
      {
        title: 'Number of Months Displayed',
        sections: [
          {
            sectionFn: () =>
            (
              <div className='col-xs-12'>
                <div className='col-xs-3'>
                  <label>Show 1 Month: </label>
                  <DatePicker
                    monthsShown={1}
                  />
                </div>

                <div className='col-xs-3'>
                  <label>Show 2 Months: </label>
                  <DatePicker
                    monthsShown={2}
                  />
                </div>

                <div className='col-xs-3'>
                  <label>Show 3 Months: </label>
                  <DatePicker
                    monthsShown={3}
                  />
                </div>
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
      },
      {
        title: 'DatePicker Dropdown',
        sections: [
          {
            sectionFn: () =>
            (
              <div className='col-xs-12'>
                <div className='col-xs-3'>
                  <label>Month dropdown: </label>
                  <DatePicker
                    monthsShown={1}
                    showMonthDropdown={true}
                  />
                </div>

                <div className='col-xs-3'>
                  <label>Year dropdown: </label>
                  <DatePicker
                    monthsShown={1}
                    showYearDropdown={true}
                  />
                </div>

                <div className='col-xs-3'>
                  <label>Show 3 Months: </label>
                  <DatePicker
                    monthsShown={1}
                    showMonthDropdown={true}
                    showYearDropdown={true}
                  />
                </div>
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
  'DatePicker Date Controls',
  {
    chapters: [
      {
        title: 'Display Week Days only',
        subtitle: 'Display only Mon-Fri',
        sections: [
          {
            sectionFn: () =>
            (
              <DatePicker
                monthsShown={1}
                filterDate={true}
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
        title: 'Date Range',
        subtitle: 'Date Range W-1 & W+1',
        sections: [
          {
            sectionFn: () =>
            (
              <DatePicker
                monthsShown={1}
                minDate={7}
                maxDate={7}
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

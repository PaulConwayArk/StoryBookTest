import React from 'react';
import { storiesOf } from '@kadira/storybook';
import { withKnobs, text, select } from '@kadira/storybook-addon-knobs';
import HighchartsView from '../src/components/Highcharts.js';
import HighStocksView from '../src/components/Highstock.js';
import HighMapsView from '../src/components/Highmaps.js';
import {highchartsTheme, highchartsThemeDefault} from '../static/const.js';


storiesOf('HighCharts', module)
.addDecorator(withKnobs)
.addWithChapters(
  'HighCharts',
  {
    subtitle: 'Multiple charts with react-highcharts',
    chapters: [
      {
        title: 'HighChart',
        sections: [
          {
            sectionFn: () =>
            (
              <HighchartsView
                highchartsTheme = {select('Chart Theme', highchartsTheme, highchartsThemeDefault)}
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
.addWithChapters(
  'HighStocks',
  {
    subtitle: 'Multiple charts with react-highcharts',
    chapters: [
      {
        title: 'HighStocks',
        sections: [
          {
            sectionFn: () =>
            (
              <HighStocksView
                highchartsTheme = {select('Chart Theme', highchartsTheme, highchartsThemeDefault)}
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
.addWithChapters(
  'HighMaps',
  {
    subtitle: 'Multiple charts with react-highcharts',
    chapters: [
      {
        title: 'HighMaps Europe',
        sections: [
          {
            sectionFn: () =>
            (
              <HighMapsView />
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
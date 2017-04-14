import React from 'react';
import { storiesOf } from '@kadira/storybook';
import { withKnobs, text, boolean, number } from '@kadira/storybook-addon-knobs';
import BootstrapTableView from '../src/components/Bootstrap_Table.js'

storiesOf('React Bootstrap Table', module)
.addDecorator(withKnobs)
.addWithChapters(
  'Basic Table',
  {
    subtitle: 'Multiple functions of react-bootstrap-table',
    info: `
    **Contains the following Chapters: **
    - Basic Table Data.
    - No Data Handler.
    - Scroll Table.
    `,
    chapters: [
      {
        title: 'Basic Table Data',
        sections: [
          {
            sectionFn: () =>
            (
              <BootstrapTableView
                dataVal = {5}
                className = {text('Modal Class', '')}
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
        title: 'No Data Handler',
        sections: [
          {
            sectionFn: () =>
            (
              <BootstrapTableView />
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
        title: 'Scroll Table',
        info: `
        Specify a fix position for the vertical bar if it exist.
        - Top.
        - Bottom.
        `,
        sections: [
          {
            sectionFn: () =>
            (
              <BootstrapTableView
                dataVal = {15}
                tableHeight = {120}
                scrollTop = {'Top'}
                className = {text('Modal Class', '')}
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
  'Sort Table',
  {
    subtitle: 'Sorting table data using react-bootstrap-table',
    info: `
    **Contains the following Chapters: **
    - Column Sort.
    - Default Sort.
    `,
    chapters: [
      {
        title: 'Defult Sort',
        info: `
        Specify a boolean value to enable sorting on the table.
        `,
        sections: [
          {
            sectionFn: () =>
            (
              <BootstrapTableView
                dataVal = {5}
                defaultSortName = {'name'}
                defaultSortOrder = {'desc'}
                className = {text('Modal Class', '')}
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
        title: 'Column Sort',
        info: `
        Specify a boolean value to enable sorting on the table.
        `,
        sections: [
          {
            sectionFn: () =>
            (
              <BootstrapTableView
                dataSort = {true}
                dataVal = {5}
                className = {text('Modal Class', '')}
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
  'Filtering Table',
  {
    subtitle: 'Filtering table data using react-bootstrap-table',
    info: `
    **Contains the following Chapters: **
    - Text Filter.
    - Select Filter.
    - Date Filter.
    - Table Search.
    - Table Multi Search.
    `,
    chapters: [
      {
        title: 'Text Filter',
        sections: [
          {
            sectionFn: () =>
            (
              <BootstrapTableView
                dataVal = {5}
                filterType ={'TextFilter'}
                className = {text('Modal Class', '')}
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
        title: 'Select Filter',
        sections: [
          {
            sectionFn: () =>
            (
              <BootstrapTableView
                dataVal = {5}
                filterType ={'SelectFilter'}
                className = {text('Modal Class', '')}
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
        title: 'Date Filter',
        sections: [
          {
            sectionFn: () =>
            (
              <BootstrapTableView
                dataVal = {5}
                filterType ={'DateFilter'}
                className = {text('Modal Class', '')}
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
        title: 'Table Search',
        sections: [
          {
            sectionFn: () =>
            (
              <BootstrapTableView
                dataVal = {5}
                search ={true}
                className = {text('Modal Class', '')}
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
        title: 'Table Multi Search',
        sections: [
          {
            sectionFn: () =>
            (
              <BootstrapTableView
                dataVal = {5}
                search ={true}
                multiColumnSearch ={true}
                className = {text('Modal Class', '')}
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
  'Table Row Selection',
  {
    subtitle: 'Select Row data using react-bootstrap-table',
    info: `
    **Contains the following Chapters: **
    - Single Selection.
    - Multi Selection.
    - Unselectable Row.
    - Default Select.
    - Show Only Selected.
    `,
    chapters: [
      {
        title: 'Single Selection',
        sections: [
          {
            sectionFn: () =>
            (
              <BootstrapTableView
                dataVal = {5}
                selectRowType = {'radio'}
                className = {text('Modal Class', '')}
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
        title: 'Multi Selection',
        sections: [
          {
            sectionFn: () =>
            (
              <BootstrapTableView
                dataVal = {5}
                selectRowType ={'checkbox'}
                className = {text('Modal Class', '')}
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
        title: 'Unselectable Row',
        sections: [
          {
            sectionFn: () =>
            (
              <BootstrapTableView
                dataVal = {5}
                selectRowType = {'checkbox'}
                unselectable = {[ 1, 3 ]}
                className = {text('Modal Class', '')}
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
        title: 'Default Select',
        sections: [
          {
            sectionFn: () =>
            (
              <BootstrapTableView
                dataVal = {5}
                selectRowType = {'checkbox'}
                selected = {[ 0, 2, 4 ]}
                className = {text('Modal Class', '')}
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
        title: 'Show Only Selected',
        sections: [
          {
            sectionFn: () =>
            (
              <BootstrapTableView
                dataVal = {5}
                selectRowType = {'checkbox'}
                showOnlySelected = {true}
                className = {text('Modal Class', '')}
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
  'Pagination',
  {
    subtitle: 'Table Pagination using react-bootstrap-table',
    info: `
    **Contains the following Chapters: **
    - Default Pagination.
    - Custom Pagination.
    `,
    chapters: [
      {
        title: 'Default Pagination',
        sections: [
          {
            sectionFn: () =>
            (
              <BootstrapTableView
                dataVal = {24}
                pagination = {true}
                className = {text('Modal Class', '')}
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
        title: 'Custom Pagination',
        info: `
        **Contains the following Settings: **
        - **sizePerPage** - the size per page you want to locate as default.
        - **pageStartIndex** - where to start counting the pages.
        - **paginationSize** - the pagination bar size.
        - **prePage** - Previous page button text.
        - **nextPage** - Next page button text.
        - **firstPage** - First page button text.
        - **lastPage** - Last page button text.
        - **paginationPosition** - default is bottom, top and both is all available.

        `,
        sections: [
          {
            sectionFn: () =>
            (
              <BootstrapTableView
                dataVal = {24}
                pagination = {true}
                sizePerPage = {5}
                page = {0}
                pageStartIndex = {0}
                paginationSize = {3}
                prePage = {'Prev'}
                nextPage = {'Next'}
                firstPage = {'First'}
                lastPage = {'Last'}
                paginationPosition = {'top'}
                className = {text('Modal Class', '')}
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
  'Export CSV',
  {
    subtitle: 'Export Table date to CSV file using react-bootstrap-table',
    info: `
    **Contains the following Chapters: **
    - Export CSV.
    `,
    chapters: [
      {
        title: 'Export CSV',
        info: `
        **The following settings can be applied: **
        - **csvHeader** - Change name of column to custom name, else stays as default Column name.
        - **csvFormat** - format column values.
        `,
        sections: [
          {
            sectionFn: () =>
            (
              <BootstrapTableView
                dataVal = {6}
                exportCSV = {true}
                className = {text('Modal Class', '')}
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

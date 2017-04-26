import React , { Component } from 'react';
import { storiesOf } from '@kadira/storybook';
import { withKnobs, text, select } from '@kadira/storybook-addon-knobs';
// import ModalPlayground from '../src/components/ModalPlayground';
import ModalPlayground from '../src/components/Playground/index';

storiesOf('Ark Playground', module)
.add('Playground', () => <ModalPlayground />)
// .addDecorator(withKnobs)
// .addWithChapters(
//   'Playground',
//   {
//     subtitle: 'Multiple functions of react-bootstrap-table',
//     info: 'Use the settings to change the modal size and text',
//     chapters: [
//       {
//         title: 'Playground',
//         sections: [
//           {
//             sectionFn: () =>
//             (
//               <ModalPlayground />
//             ),
//             options: {
//               showSource: false,
//               allowSourceToggling: true,
//               showPropTables: false,
//               allowPropTablesToggling: false,
//             }
//           }
//         ]
//       },
//
//     ]
//   }
// )


import { configure } from '@storybook/react';
import { addDecorator } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { withA11y } from '@storybook/addon-a11y';
//import requireContext from 'require-context.macro';

addDecorator(withInfo); 
addDecorator(withA11y)

const req = require.context('../src', true, /\.stories\.js$/); 
//const req = requireContext('../src', true, /\.stories\.js$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);





// import { configure } from '@storybook/react';
// import { addDecorator, addParameters } from '@storybook/react';
// import { withInfo } from '@storybook/addon-info';
// import { withA11y } from '@storybook/addon-a11y';
// addDecorator(withInfo); 
// addDecorator(withA11y)
// // const INITIAL_VIEWPORTS = {
// //   iphone5: {
// //     name: 'iPhone 5',
// //     styles: {
// //       height: '568px',
// //       width: '320px',
// //     },
// //     type: 'mobile',
// //   },
// //   iphone6: {
// //     name: 'iPhone 6',
// //     styles: {
// //       height: '667px',
// //       width: '375px',
// //     },
// //     type: 'mobile',
// //   },
// //   iphone6p: {
// //     name: 'iPhone 6 Plus',
// //     styles: {
// //       height: '736px',
// //       width: '414px',
// //     },
// //     type: 'mobile',
// //   },
// //   iphone8p: {
// //     name: 'iPhone 8 Plus',
// //     styles: {
// //       height: '736px',
// //       width: '414px',
// //     },
// //     type: 'mobile',
// //   },
// //   iphonex: {
// //     name: 'iPhone X',
// //     styles: {
// //       height: '812px',
// //       width: '375px',
// //     },
// //     type: 'mobile',
// //   },
// //   iphonexr: {
// //     name: 'iPhone XR',
// //     styles: {
// //       height: '896px',
// //       width: '414px',
// //     },
// //     type: 'mobile',
// //   },
// //   iphonexsmax: {
// //     name: 'iPhone XS Max',
// //     styles: {
// //       height: '896px',
// //       width: '414px',
// //     },
// //     type: 'mobile',
// //   },
// //   ipad: {
// //     name: 'iPad',
// //     styles: {
// //       height: '1024px',
// //       width: '768px',
// //     },
// //     type: 'tablet',
// //   },
// //   ipad10p: {
// //     name: 'iPad Pro 10.5-in',
// //     styles: {
// //       height: '1112px',
// //       width: '834px',
// //     },
// //     type: 'tablet',
// //   },
// //   ipad12p: {
// //     name: 'iPad Pro 12.9-in',
// //     styles: {
// //       height: '1366px',
// //       width: '1024px',
// //     },
// //     type: 'tablet',
// //   },
// //   galaxys5: {
// //     name: 'Galaxy S5',
// //     styles: {
// //       height: '640px',
// //       width: '360px',
// //     },
// //     type: 'mobile',
// //   },
// //   galaxys9: {
// //     name: 'Galaxy S9',
// //     styles: {
// //       height: '1480px',
// //       width: '720px',
// //     },
// //     type: 'mobile',
// //   },
// //   nexus5x: {
// //     name: 'Nexus 5X',
// //     styles: {
// //       height: '660px',
// //       width: '412px',
// //     },
// //     type: 'mobile',
// //   },
// //   nexus6p: {
// //     name: 'Nexus 6P',
// //     styles: {
// //       height: '732px',
// //       width: '412px',
// //     },
// //     type: 'mobile',
// //   },
// //   pixel: {
// //     name: 'Pixel',
// //     styles: {
// //       height: '960px',
// //       width: '540px',
// //     },
// //     type: 'mobile',
// //   },
// //   pixelxl: {
// //     name: 'Pixel XL',
// //     styles: {
// //       height: '1280px',
// //       width: '720px',
// //     },
// //     type: 'mobile',
// //   },
// // }
// // addParameters({ viewport: { viewports: INITIAL_VIEWPORTS } });
// //import requireContext from 'require-context.macro';


//  const req = require.context('../src', true, /\.stories\.js$/); 
// //const req = requireContext('../src', true, /\.stories\.js$/);

// function loadStories() {
//   req.keys().forEach(filename => req(filename));
// }

// configure(loadStories, module);
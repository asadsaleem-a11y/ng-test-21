
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 1574, hash: 'd70b8bac795a6443f65b8f9a03e922866401cd77422b24de2f325b6f42405a49', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 946, hash: '04cc5a57bece533bf11d94e12d65d943376e3a28704430ab29a483d835cc6e4b', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 2108, hash: 'c30783778c0e4eec5b7c90c973818f5dd5393c5d8a92e715f35adb31b0cb73ff', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-GMDCSFGN.css': {size: 3899, hash: 'UNHqbH0hiwc', text: () => import('./assets-chunks/styles-GMDCSFGN_css.mjs').then(m => m.default)}
  },
};

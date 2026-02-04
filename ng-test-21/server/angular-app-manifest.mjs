
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
    'index.csr.html': {size: 1824, hash: '0023bdd57e453ea0e6461497cbd6bc524bf33713edda0bc66601e0d43f5d9d85', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 946, hash: '342ec9b6d5832dc4b685cb322069efba4c1f271f5b74070266ebd48b1a25c90b', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 23104, hash: 'a7ae0953529af30b27cd10d8519cf7ea4a529f47d8e8de7c1e147dd27d816e60', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-N3GZVBPS.css': {size: 4544, hash: '77VuYXCVQuQ', text: () => import('./assets-chunks/styles-N3GZVBPS_css.mjs').then(m => m.default)}
  },
};

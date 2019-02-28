const { default: colors } = require('vuetify/es5/util/colors')

const config = { // needs to be ES6 module so it can be imported by webpack
  blips: {
    titleCutOff: 20 // cut off title after N characters (display only)
  },
  firebase: {
    key: ' AIzaSyAy2-HpWh5NqSjIhCzuWQ30uIpEgSN6yqM ',
    project: 'techradar-demo'
  },
  categories: ['Techniques', 'Tools', 'Platforms', 'Languages & Frameworks'], // quadrant 1-4
  states: ['Hold', 'Assess', 'Trial', 'Adopt'], // should be 0 - 3 for tech radar, 4 for in use, 5 for no longer in use
  metaTitle: 'Andreas\'s Techradar', // meta information title tag
  appTitle: 'Techradar DEMO', // title showing in the application titlebar
  editPermissions: user => true,
  routes: [ // configure name, permissions & viewports
    // do NOT change the view property as this links to the vue component and is used for lookups across the app
    { view: 'List', icon: 'list', title: 'Blips', path: '/list/:search?', validator: user => true, location: ['toolbar'] },
    { view: 'Radar', icon: 'track_changes', title: 'Radar', path: '/', validator: user => true, location: ['toolbar'] },
    { view: 'Logout', icon: 'exit_to_app', title: 'Logout', path: '/logout', validator: user => false, location: ['toolbar-menu'] },
    { view: 'Users', icon: 'people', title: 'Users', path: '/users', validator: user => false, location: ['toolbar-menu'] },
    { view: 'Login', icon: 'meeting_room', title: 'Login', path: '/login', validator: user => false, location: ['toolbar'] }
  ],
  theme: {
    primary: colors.indigo.base,
    secondary: colors.blue.darken1,
    accent: colors.cyan.accent4,
    error: colors.red.base,
    warning: colors.yellow.base,
    info: colors.blue.base,
    success: colors.green.base
  }
}

// precalculate some properties for later
config.routes = config.routes
  .map(i => {
    i.rootPath = i.path.split(':')[0] // path property without a potential query param
    return i
  })
module.exports = config

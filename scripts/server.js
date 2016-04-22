'use strict';

var apiRoot = '/api',
  packageRoot = '/components/' + require('../package.json').name;

var browserSync = require('browser-sync'),
    jsonServer = require('json-server'),
    log = require('connect-logger');

var api = jsonServer.create();
api.use(jsonServer.defaults());
api.use(jsonServer.router('db.json'));

var bs = browserSync.create();

var routes = {'/components': 'bower_components'};
routes[packageRoot] = '';

bs.init({
  startPath: packageRoot,
  files: ['./**/*.{html,htm,css,js}'],
  watchOptions: {
    ignored: [
      'node_modules',
      'bower_components'
    ]
  },
  server: {
    baseDir: '.',
    routes: routes
  },
  middleware: [
    {route: '/api', handle: api},
    log({format: '%date %status %method %url'})
  ]
});

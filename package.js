// package metadata file for Meteor.js

/* jshint strict:false */
/* global Package:true */

Package.describe({
  name: 'mtg:font',  // http://atmospherejs.com/AlexandreArpin/mtg-font
  summary: 'Scalable vector icons for Magic the Gathering symbols.',
  version: '0.0.2',
  git: 'https://github.com/AlexandreArpin/mtg-font.git'
});

Package.onUse(function (api) {
  api.versionsFrom('METEOR@1.0');
  api.addFiles([
    'fonts/magic-font.eot',
    'fonts/magic-font.svg',
    'fonts/magic-font.ttf',
    'fonts/magic-font.woff',
    'fonts/Matrix-Bold.eot',
    'fonts/Matrix-Bold.ttf',
    'fonts/Matrix-Bold.woff',
    'fonts/Mplantin.eot',
    'fonts/Mplantin.otf',
    'fonts/Mplantin.svg',
    'fonts/Mplantin.ttf',
    'fonts/Mplantin.woff'
  ], 'client', { isAsset: true });
  api.addFiles([
    'css/magic-font.css'
  ], 'client');
});

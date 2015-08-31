// package metadata file for Meteor.js

/* jshint strict:false */
/* global Package:true */

Package.describe({
  name: 'mtg:font',  // http://atmospherejs.com/AlexandreArpin/mtg-font
  summary: 'Scalable vector icons for Magic the Gathering symbols.',
  version: '0.0.1',
  git: 'https://github.com/AlexandreArpin/mtg-font.git'
});

Package.onUse(function (api) {
  api.versionsFrom('METEOR@1.0');
  api.use('jquery', 'client');
  api.addFiles([
    //fonts & svgs
  ], 'client', { isAsset: true });
  api.addFiles([
    // css
  ], 'client');
});

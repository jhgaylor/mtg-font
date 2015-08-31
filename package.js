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
  api.addFiles([
    'svg/artifact.svg',
    'svg/b.svg',
    'svg/c.svg',
    'svg/creature.svg',
    'svg/enchantment.svg',
    'svg/g.svg',
    'svg/infinite.svg',
    'svg/instant.svg',
    'svg/land.svg',
    'svg/multiple.svg',
    'svg/p.svg',
    'svg/planeswalker.svg',
    'svg/r.svg',
    'svg/s.svg',
    'svg/sorcery.svg',
    'svg/t.svg',
    'svg/tombstone.svg',
    'svg/u.svg',
    'svg/w.svg',
    'fonts/magic-font.eot',
    'fonts/magic-font-svg',
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

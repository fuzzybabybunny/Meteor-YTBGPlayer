Package.describe({
  name: 'hpp:ytbgplayer',
  version: '1.0.0',
  // Brief, one-line summary of the package.
  summary: 'Make YouTube videos into backgrounds while having full access to the YouTube API.',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/fuzzybabybunny/Meteor-YTBGPlayer.git',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('METEOR@0.9.0');
  api.addFiles('ytbgplayer.css', 'client');
  api.addFiles('ytbgplayer.js', 'client');
});

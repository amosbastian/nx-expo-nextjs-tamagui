// eslint-disable-next-line @typescript-eslint/no-var-requires
const withNx = require('@nrwl/next/plugins/with-nx');
const { withExpo } = require('@expo/next-adapter');
const withFonts = require('next-fonts');
const withImages = require('next-images');
const withPlugins = require('next-compose-plugins');
const withTM = require('next-transpile-modules')(['solito']);

/**
 * @type {import('@nrwl/next/plugins/with-nx').WithNxOptions}
 **/
const nextConfig = {
  nx: {
    // Set this to true if you would like to to use SVGR
    // See: https://github.com/gregberge/svgr
    svgr: false,
  },
};

module.exports = withPlugins(
  [
    withNx,
    withTM,
    withFonts,
    withImages,
    [withExpo, { projectRoot: __dirname + '/../../' }],
  ],
  nextConfig
);

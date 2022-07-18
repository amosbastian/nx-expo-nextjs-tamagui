/** @type {import('next').NextConfig} */
// eslint-disable-next-line @typescript-eslint/no-var-requires
const withNx = require('@nrwl/next/plugins/with-nx');
const { withExpo } = require('@expo/next-adapter');
const withFonts = require('next-fonts');
const withImages = require('next-images');
const withPlugins = require('next-compose-plugins');
const withTM = require('next-transpile-modules');
const { withTamagui } = require('@tamagui/next-plugin');

process.env.IGNORE_TS_CONFIG_PATHS = 'true';
process.env.TAMAGUI_TARGET = 'web';

const disableExtraction = process.env.NODE_ENV === 'development';
if (disableExtraction) {
  console.log('Disabling static extraction in development mode for better HMR');
}

/**
 * @type {import('@nrwl/next/plugins/with-nx').WithNxOptions}
 **/
const nextConfig = {
  nx: {
    // Set this to true if you would like to to use SVGR
    // See: https://github.com/gregberge/svgr
    svgr: false,
  },
  experimental: {
    plugins: true,
    scrollRestoration: true,
    legacyBrowsers: false,
    browsersListForSwc: true,
  },
};

module.exports = withPlugins(
  [
    withNx,
    withTM([
      'solito',
      'react-native-web',
      'expo-linking',
      'expo-constants',
      'expo-modules-core',
      // '@nx-expo-nextjs/shared/ui', // FIXME: can't do this (if it's needed) because of no package.json
    ]),
    // withFonts,
    // withImages,
    // [withExpo, { projectRoot: __dirname + '/../../' }],
    withTamagui({
      config: './apps/site/tamagui.config.ts', // Need full path or it doesn't work
      components: ['tamagui', '@nx-expo-nextjs/shared/ui'],
      importsWhitelist: ['constants.js', 'colors.js'],
      logTimings: true,
      disableExtraction,
      shouldExtract: (path) => {
        // if (path.includes('packages/app')) {
        return true;
        // }
      },
      excludeReactNativeWebExports: [
        'Switch',
        'ProgressBar',
        'Picker',
        'Modal',
        'PressResponder',
        'VirtualizedList',
        'VirtualizedSectionList',
        'AnimatedFlatList',
        'FlatList',
        'CheckBox',
        'Touchable',
        'SectionList',
      ],
    }),
  ],
  nextConfig
);

/** @type {import('next').NextConfig} */
const withNx = require('@nrwl/next/plugins/with-nx');
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

const transform = withPlugins(
  [
    withNx,
    withTM([
      'solito',
      'react-native-web',
      'expo-linking',
      'expo-constants',
      'expo-modules-core',
      '@nx-expo-nextjs/ui',
    ]),
    withTamagui({
      config: './apps/site/tamagui.config.ts', // Need full path or it doesn't work
      components: ['tamagui', '@nx-expo-nextjs/ui'],
      importsWhitelist: ['constants.js', 'colors.js'],
      logTimings: true,
      disableExtraction,
      shouldExtract: (path) => {
        if (path.includes('libs/ui')) {
          return true;
        }
      },
      excludeReactNativeWebExports: [
        'Switch',
        'ProgressBar',
        'Picker',
        'Modal',
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

module.exports = function (name, { defaultConfig }) {
  defaultConfig.webpack5 = true;
  // defaultConfig.experimental.reactRoot = 'concurrent'
  defaultConfig.typescript.ignoreBuildErrors = true;
  return transform(name, {
    ...defaultConfig,
  });
};

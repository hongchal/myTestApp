module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['.'],
        extensions: [
          '.ios.ts',
          '.android.ts',
          '.ts',
          '.ios.tsx',
          '.android.tsx',
          '.tsx',
          '.jsx',
          '.js',
          '.json',
        ],
        alias: {
          '~': './src',
          '@assets': './src/assets',
          '@axios': './src/axios',
          '@components': './src/components',
          '@hooks': './src/hooks',
          '@container': './src/container',
          '@screen': './src/screen',
          '@router': './src/router',
        },
      },
    ],
  ],
};

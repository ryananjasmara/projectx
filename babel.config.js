module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'babel-plugin-react-docgen-typescript',
        {
          exclude: 'node_modules',
          propFilter: (prop) => (prop.parent ? !prop.parent.fileName.includes('node_modules') : true),
        },
      ],
      '@babel/plugin-transform-class-static-block',
      'react-native-worklets/plugin',
    ],
  };
};

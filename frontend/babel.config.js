module.exports = {
  plugins: [
    ['@babel/plugin-proposal-decorators', {legacy: true}],
    ['@babel/plugin-proposal-class-properties', {loose: false}],
  ],
  presets: ['module:metro-react-native-babel-preset'],
};

module.exports = {
  extends: ['airbnb', 'prettier', 'prettier/react'],
  rules: {
    'no-underscore-dangle': ['error', { allow: ['__DEV__', '__REDUX_DEVTOOLS_EXTENSION__'] }],
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    curly: ['error', 'all'],
  },
  globals: {
    localStorage: true,
  },
};

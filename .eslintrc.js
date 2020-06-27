module.exports = {
  env: {
    browser: false,
    es6: true,
    node: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 11,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    'arrow-body-style': ['off'],
    'no-undef': ['off'],
    'react/no-unused-state': ['off'],
    'import/no-extraneous-dependencies': ['off'],
    'no-unused-vars': ['off'],
    'no-console': ['off'],
    'quotes': ['off'],
    'react/destructuring-assignment': ['off'],
    'no-useless-constructor': ['off'],
    'react/prefer-stateless-function': ['off'],
    'react/no-this-in-sfc': ['off'],
    'react/prop-types': ['off'],
    'consistent-return': ['off'],
    'jsx-ally/click-events-have-key-events': ['off'],
    'jsx-a11y/no-noninteractive-element-interactions': ['off'],
    'jsx-a11y/click-events-have-key-events': ['off'],
    'no-param-reassign': ['off'],
    'jsx-a11y/no-static-element-interactions': ['off']
  },
};

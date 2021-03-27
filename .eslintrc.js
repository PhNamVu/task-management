module.exports = {
  extends: [
    'airbnb-typescript',
    'airbnb/hooks',
    'plugin:@typescript-eslint/recommended',
    'plugin:jest/recommended',
    'prettier',
    'plugin:prettier/recommended'
  ],
  plugins: ['react', '@typescript-eslint', 'jest', '@typescript-eslint/tslint'],
  env: {
    browser: true,
    es6: true,
    jest: true,
  },
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 8,
    sourceType: 'module',
    project: './tsconfig.json',
    tsconfigRootDir: __dirname,

  },
  rules: {
    'linebreak-style': 'off',
    'prettier/prettier': ["off"],
    '@typescript-eslint/semi': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    'import/prefer-default-export': 'off',
    "react/jsx-props-no-spreading": "off",
    "@typescript-eslint/no-use-before-define": "off",
    "no-param-reassign": [2, { 
      "props": false
    }],
    'no-console': 'off',
  },
};

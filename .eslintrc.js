module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'prettier',
    'plugin:prettier/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/recommended',
    'plugin:import/typescript',
  ],
  plugins: [
    'react',
    'react-hooks',
    'prettier',
    'prettier',
    '@typescript-eslint',
    'import',
  ],
  parser: '@typescript-eslint/parser',
  env: {
    browser: true,
    es6: true,
  },
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    tsconfigRootDir: __dirname,
    project: './tsconfig.json',
  },
  rules: {
    'prettier/prettier': ['error', {}, { usePrettierrc: true }], // Use our .prettierrc file as source
    'import/prefer-default-export': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-explicit-any': 'error',
    '@typescript-eslint/no-unused-vars': 'warn',
    '@typescript-eslint/no-non-null-assertion': 'warn',
    '@typescript-eslint/ban-ts-comment': 'off',
    'react/prop-types': 'off',
    'react/react-in-jsx-scope': 'off',
    'no-console': process.env.NODE_ENV === 'development' ? 'warn' : 'error',
    'no-debugger': process.env.NODE_ENV === 'development' ? 'warn' : 'error',
    'react/no-unused-prop-types':
      process.env.NODE_ENV === 'development' ? 'warn' : 'error',
    'no-unused-vars': [
      process.env.NODE_ENV === 'development' ? 'warn' : 'error',
      {
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_',
        caughtErrorsIgnorePattern: '^_',
      },
    ],
  },
  root: true, // Make sure eslint picks up the config at the root of the directory
  settings: {
    'import/resolver': {
      // See https://github.com/benmosher/eslint-plugin-import/issues/1396#issuecomment-575727774 for line below
      node: {},
      typescript: {},
    },
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
  },
  ignorePatterns: ['node_modules', 'build', 'dist', 'public'],
};

module.exports = {
  env:           {
    browser: true,
    node:    true,
    es2021:  true
  },
  parserOptions: {
    sourceType: 'module'
  },
  plugins:       ['prettier'],
  extends:       ['plugin:prettier/recommended'],
  rules:         {
    'prettier/prettier': 'warn'
  },
  overrides:     [
    {
      files:         '*.ts',
      parser:        '@typescript-eslint/parser',
      plugins:       ['@typescript-eslint', 'import', 'prettier'],
      parserOptions: {
        project: './tsconfig.json'
      },
      extends:       [
        'airbnb-typescript/base',
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:prettier/recommended',
        'plugin:import/typescript'
      ],
      rules:         {
        'no-plusplus':                  'off',
        'no-underscore-dangle':         'off',
        'import/prefer-default-export': 'off',
        'prettier/prettier':            'warn'
      }
    }
  ]
};

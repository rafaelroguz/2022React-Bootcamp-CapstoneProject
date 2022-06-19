module.exports = {
  plugins: ['stylelint-order'],
  rules: {
    indentation: 2,
    'max-empty-lines': 1,
    'no-descending-specificity': true,
    'shorthand-property-no-redundant-values': true,
    'value-list-max-empty-lines': 0,
    'no-duplicate-selectors': true,
    'no-extra-semicolons': true,
    'function-max-empty-lines': 0,

    'declaration-block-trailing-semicolon': 'always',
    'declaration-colon-space-after': 'always',
    'declaration-colon-space-before': 'never',
    'declaration-bang-space-before': 'always',
    'declaration-bang-space-after': 'never',
    'declaration-block-semicolon-newline-after': 'always',
    'declaration-colon-newline-after': 'always-multi-line',
    'declaration-block-no-redundant-longhand-properties': true,
    'declaration-empty-line-before': 'never',

    'block-closing-brace-newline-before': 'always',
    'block-closing-brace-newline-after': 'always',
    'block-closing-brace-empty-line-before': 'never',
    'block-opening-brace-newline-after': 'always',
    'block-no-empty': true,

    'selector-list-comma-newline-before': 'never-multi-line',
    'selector-list-comma-newline-after': 'always',
    'order/properties-alphabetical-order': true,

    'order/order': [
      [
        'custom-properties',
        'dollar-variables',
        'declarations',
        'rules',
        'at-rules',
      ],
      {
        unspecified: 'top',
      },
    ],
  },
};

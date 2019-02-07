const spaces = 4

module.exports = {
    parserOptions: {
        // ecmaVersion: 2018,
        parser: 'babel-eslint',
    },
    extends: [
        'eslint:recommended',
        'plugin:vue/recommended',
    ],
    rules: {

        // vue
        'vue/script-indent': ['error', spaces, {
            'baseIndent': 0,
        }],
        'vue/require-default-prop': 'off',
        'vue/no-v-html': 'off',
        'vue/attribute-hyphenation': ['error', 'never'],
        'vue/no-unused-components': ['warn', 'always'],
        // 'vue/no-parsing-error': 'off',
        'vue/html-indent': ['error', spaces, {
            'attribute': 1,
            'baseIndent': 1,
            'closeBracket': 1,
        }],

        // javascript
        'indent': ['error', spaces],
        'key-spacing': ['error'],
        'space-before-blocks': 'error',
        'keyword-spacing': 'error',
        'block-spacing': ['error', 'always'],
        'brace-style': ['error'],
        'comma-dangle': ['error', 'always-multiline'],
        'comma-spacing': ['error', { 'before': false, 'after': true }],
        'computed-property-spacing': ['error', 'never'],
        'lines-between-class-members': ['error', 'always'],
        'new-cap': ['error', { 'newIsCap': true }],
        'object-curly-spacing': ['error', 'always'],
        'quotes': ['error', 'single'],
        'semi': ['error', 'never'],
        'space-before-function-paren': ['error', 'always'],
        'vue/component-name-in-template-casing': ['error', 'PascalCase', {
            'registeredComponentsOnly': true,
            'ignores': ['nuxt-link', 'nuxt'],
        }],
        'vue/order-in-components': ['error', {
            'order': [
                'el',
                'name',
                'parent',
                'functional',
                ['delimiters', 'comments'],
                ['components', 'directives', 'filters'],
                'extends',
                'mixins',
                'inheritAttrs',
                'model',
                ['props', 'propsData'],
                'data',
                'computed',
                'watch',
                'methods',
                'LIFECYCLE_HOOKS',
                ['template', 'render'],
                'renderError',
            ],
        }],

        'no-console': 'off',
        'no-undef': 'off',
        'no-useless-escape': 'off',
        'no-control-regex': 'off',
        'no-empty': 'off',
        'no-unused-vars': 'warn',
        'no-unreachable': 'warn',
    },
}

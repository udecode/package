import js from '@eslint/js';
import perfectionist from 'eslint-plugin-perfectionist';
import eslintPluginUnicorn from 'eslint-plugin-unicorn';
import unusedImports from 'eslint-plugin-unused-imports';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  {
    ignores: ['src/index.ts'],
  },

  // ─── Base Config: Ignores ────────────────────────────────────────────

  {
    ignores: [
      '.next',
      '.vercel',
      '.astro',
      '.source',
      'dist',
      '.tsup',
      `**/node_modules`,
      '.cache',
      '**/.cache',
      '**/build',
      '**/dist',
      '**/bundled',
      '**/vault',
      '**/_vault',
      '**/__*',
      '**/*.mdx',
      'tooling/scripts/**/*',
      '**/*demo',
      '.changeset',
    ],
  },

  // ─── Base Config: JavaScript ─────────────────────────────────────────

  js.configs.recommended,
  {
    files: ['**/*.{js,mjs,cjs}'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
  },
  {
    files: ['**/*.{js,mjs,cjs,ts,tsx}'],
  },
  {
    // List of rules to use
    rules: {
      'linebreak-style': ['error', 'unix'],
      'no-case-declarations': 'off',
      'no-empty': ['error', { allowEmptyCatch: true }],
      'no-empty-function': 'off',
      'no-prototype-builtins': 'off',
      'no-restricted-imports': [
        'error',
        {
          patterns: [
            {
              group: ['*/_generated/server'],
              importNames: ['mutation', 'internalMutation'],
              message: 'Use functions.ts for mutation',
            },
          ],
        },
      ],
    },
  },

  // ─── Base Config: Formatting ─────────────────────────────────────────

  {
    rules: {
      'arrow-body-style': 'off',
      'lines-around-directive': ['warn', 'always'],
      'padding-line-between-statements': [
        'warn',
        { blankLine: 'never', next: 'case', prev: '*' },
        { blankLine: 'always', next: 'break', prev: '*' },
        { blankLine: 'always', next: 'class', prev: '*' },
        { blankLine: 'always', next: '*', prev: 'class' },
        { blankLine: 'always', next: 'continue', prev: '*' },
        { blankLine: 'always', next: 'do', prev: '*' },
        { blankLine: 'always', next: '*', prev: 'do' },
        { blankLine: 'always', next: 'export', prev: '*' },
        { blankLine: 'always', next: '*', prev: 'export' },
        { blankLine: 'always', next: 'for', prev: '*' },
        { blankLine: 'always', next: '*', prev: 'for' },
        { blankLine: 'always', next: 'function', prev: '*' },
        { blankLine: 'always', next: '*', prev: 'function' },
        { blankLine: 'always', next: 'if', prev: '*' },
        { blankLine: 'always', next: '*', prev: 'if' },
        { blankLine: 'never', next: 'if', prev: 'if' },
        { blankLine: 'always', next: 'return', prev: '*' },
        { blankLine: 'always', next: 'switch', prev: '*' },
        { blankLine: 'always', next: '*', prev: 'switch' },
        { blankLine: 'always', next: 'throw', prev: '*' },
        { blankLine: 'always', next: 'try', prev: '*' },
        { blankLine: 'always', next: '*', prev: 'try' },
        { blankLine: 'always', next: 'while', prev: '*' },
        { blankLine: 'always', next: '*', prev: 'while' },
      ],
      'prefer-arrow-callback': 'off',
      'spaced-comment': [
        'error',
        'always',
        {
          block: {
            balanced: true,
            exceptions: ['*'],
            markers: ['!'],
          },
          line: {
            exceptions: ['-', '+'],
            markers: ['/'],
          },
        },
      ],
    },
  },

  // ─── Unicorn Config ──────────────────────────────────────────────────

  eslintPluginUnicorn.configs['flat/recommended'],
  {
    rules: {
      'unicorn/consistent-destructuring': 'off',
      'unicorn/consistent-function-scoping': [
        'error',
        {
          checkArrowFunctions: false,
        },
      ],
      'unicorn/expiring-todo-comments': 'off',
      'unicorn/filename-case': 'off',
      'unicorn/import-style': 'off',
      'unicorn/no-abusive-eslint-disable': 'off',
      'unicorn/no-array-callback-reference': 'off',
      'unicorn/no-array-for-each': 'off',
      'unicorn/no-array-push-push': 'off',
      'unicorn/no-array-reduce': 'off',
      'unicorn/no-await-expression-member': 'off',
      'unicorn/no-document-cookie': 'off',
      'unicorn/no-unreadable-array-destructuring': 'off',
      'unicorn/no-useless-undefined': 'off',
      // TypeScript doesn't like the for-of loop this rule fixes to
      'unicorn/no-for-loop': 'off',
      'unicorn/no-nested-ternary': 'off',
      'unicorn/no-null': 'off',
      'unicorn/prefer-export-from': 'off',
      'unicorn/prefer-global-this': 'off',
      'unicorn/prefer-logical-operator-over-ternary': 'off',
      'unicorn/prefer-module': 'off',
      // Spread syntax causes non-deterministic type errors
      'unicorn/prefer-spread': 'off',
      'unicorn/prefer-ternary': 'off',
      'unicorn/prefer-top-level-await': 'off',
      'unicorn/prevent-abbreviations': 'off',
    },
  },

  // ─── Perfectionist Config ────────────────────────────────────────────

  perfectionist.configs['recommended-natural'],
  {
    rules: {
      // '@typescript-eslint/adjacent-overload-signatures': 'off',
      'perfectionist/sort-array-includes': [
        'warn',
        {
          groupKind: 'literals-first',
          type: 'natural',
        },
      ],
      'perfectionist/sort-classes': [
        'warn',
        {
          groups: [
            'index-signature',
            'static-property',
            'private-property',
            'protected-property',
            'property',
            'constructor',
            'static-method',
            'private-method',
            'protected-method',
            'method',
            ['get-method', 'set-method'],
            'static-block',
            'unknown',
          ],
          type: 'natural',
        },
      ],
      'perfectionist/sort-decorators': [
        'warn',
        {
          type: 'natural',
        },
      ],
      'perfectionist/sort-enums': [
        'warn',
        {
          sortByValue: true,
          type: 'natural',
        },
      ],
      'perfectionist/sort-exports': [
        'warn',
        {
          groupKind: 'types-first',
          type: 'natural',
        },
      ],
      'perfectionist/sort-heritage-clauses': [
        'off',
        {
          type: 'natural',
        },
      ],
      'perfectionist/sort-imports': [
        // 'off',
        'warn',
        {
          customGroups: {
            type: {
              next: '^next$',
              react: '^react$',
            },
            value: {
              next: ['^next$'],
              react: ['^react$', '^react-.*$'],
            },
          },
          groups: [
            'react',
            ['type', 'internal-type'],
            'next',
            ['builtin', 'external'],
            'internal',
            ['parent-type', 'sibling-type', 'index-type'],
            ['parent', 'sibling', 'index'],
            'side-effect',
            'style',
            'object',
            'unknown',
          ],
          internalPattern: ['^@/.*'],
          type: 'natural',
        },
      ],
      'perfectionist/sort-interfaces': [
        'warn',
        {
          customGroups: {
            key: ['^key$', '^keys$'],
            id: ['^id$', '^_id$'],
          },
          groupKind: 'required-first',
          groups: [
            'key',
            'id',
            'unknown',
            // 'multiline',
            'method',
          ],
          partitionByComment: true,

          type: 'natural',
        },
      ],
      // breaking: ordering matters
      'perfectionist/sort-intersection-types': 'off',
      'perfectionist/sort-jsx-props': [
        'warn',
        {
          customGroups: {
            key: ['^key$', '^keys$'],
            id: ['^id$', '^name$', '^testId$', '^data-testid$'],
            accessibility: [
              '^title$',
              '^alt$',
              '^placeholder$',
              '^label$',
              '^description$',
              '^fallback$',
            ],
            callback: ['^on[A-Z]', '^handle[A-Z]'],
            className: ['^className$', '^class$', '^style$'],
            control: ['^asChild$', '^as$'],
            data: ['^data-*', '^aria-*'],
            ref: ['^ref$', '^innerRef$'],
            state: [
              '^value$',
              '^checked$',
              '^selected$',
              '^open$',
              '^defaultValue$',
              '^defaultChecked$',
              '^defaultOpen$',
              '^disabled$',
              '^required$',
              '^readOnly$',
              '^loading$',
            ],
            variant: ['^variant$', '^size$', '^orientation$', '^color$'],
          },
          groups: [
            'id',
            'key',
            'ref',
            'control',
            'variant',
            'className',
            'state',
            'callback',
            'accessibility',
            'data',
            'unknown',
            'shorthand',
          ],
          type: 'natural',
        },
      ],
      'perfectionist/sort-modules': 'off',
      // 'perfectionist/sort-modules': [
      //   'warn',
      //   {
      //     groups: [
      //       'declare-enum',
      //       'export-enum',
      //       'enum',
      //       ['declare-interface', 'declare-type'],
      //       ['export-interface', 'export-type'],
      //       ['interface', 'type'],
      //       'declare-class',
      //       'class',
      //       'export-class',

      //       // 'declare-function',
      //       // 'export-function',
      //       // 'function',

      //       // 'unknown',
      //     ],
      //     partitionByComment: true,
      //     type: 'natural',
      //   },
      // ],
      'perfectionist/sort-named-exports': [
        'warn',
        {
          groupKind: 'types-first',
          type: 'natural',
        },
      ],
      'perfectionist/sort-named-imports': [
        'warn',
        {
          groupKind: 'types-first',
          type: 'natural',
        },
      ],
      'perfectionist/sort-object-types': [
        'warn',
        {
          customGroups: {
            key: ['^key$', '^keys$'],
            id: ['^id$', '^_id$'],
            callback: ['^on[A-Z]', '^handle[A-Z]'],
          },
          groupKind: 'required-first',
          groups: [
            'key',
            'id',
            'unknown',
            // 'multiline',
            'method',
            'callback',
          ],
          newlinesBetween: 'never',
          type: 'natural',
        },
      ],
      'perfectionist/sort-objects': [
        'warn',
        {
          customGroups: {
            key: ['^key$', '^keys$'],
            id: ['^id$', '^_id$'],
            callback: ['^on[A-Z]', '^handle[A-Z]'],
          },
          groups: [
            'key',
            'id',
            'unknown',
            // 'multiline',
            'method',
            'callback',
          ],
          partitionByComment: true,
          // newlinesBetween: 'never',
          type: 'natural',
        },
      ],
      'perfectionist/sort-sets': [
        'warn',
        {
          type: 'natural',
        },
      ],
      'perfectionist/sort-switch-case': [
        'warn',
        {
          type: 'natural',
        },
      ],
      'perfectionist/sort-union-types': [
        'warn',
        {
          groups: [
            'unknown',
            'conditional',
            'function',
            'import',
            ['intersection', 'union'],
            'named',
            'operator',
            'object',
            'keyword',
            'literal',
            'tuple',
            'nullish',
          ],
          type: 'natural',
        },
      ],
      'perfectionist/sort-variable-declarations': [
        'warn',
        {
          type: 'natural',
        },
      ],
      'react/jsx-sort-props': 'off',
      'sort-imports': 'off',

      'sort-keys': 'off',
    },
    settings: {
      perfectionist: {
        ignoreCase: false,
      },
    },
  },

  // ─── TypeScript Config ───────────────────────────────────────────────

  {
    files: ['**/*.ts', '**/*.tsx'],
  },

  // Base JS/TS configs
  ...tseslint.configs.recommended,
  ...tseslint.configs.recommendedTypeChecked,
  ...tseslint.configs.stylisticTypeChecked,

  {
    ignores: ['tooling/eslint/index.d.ts'],
    rules: {
      // When not using in default config

      '@typescript-eslint/await-thenable': 'off',
      '@typescript-eslint/ban-ts-comment': 'off',
      '@typescript-eslint/no-base-to-string': 'off',
      '@typescript-eslint/no-floating-promises': 'off',

      '@typescript-eslint/no-unsafe-enum-comparison': 'off',
      '@typescript-eslint/prefer-for-of': 'off',
      '@typescript-eslint/prefer-optional-chain': 'off',
      // Override recommended-type-checked

      // '@typescript-eslint/ban-ts-comment': [
      //   'error',
      //   {
      //     minimumDescriptionLength: 10,
      //     'ts-check': false,
      //     'ts-expect-error': 'allow-with-description',
      //     'ts-ignore': true,
      //     'ts-nocheck': true,
      //   },
      // ],
      '@typescript-eslint/ban-types': 'off',
      '@typescript-eslint/no-empty-object-type': [
        'error',
        {
          allowInterfaces: 'always',
          allowObjectTypes: 'always',
        },
      ],
      '@typescript-eslint/no-explicit-any': 'off',
      // PERF: disable
      '@typescript-eslint/no-misused-promises': 'off',
      '@typescript-eslint/no-redundant-type-constituents': 'off',
      '@typescript-eslint/no-require-imports': 'off',
      '@typescript-eslint/no-unnecessary-type-assertion': 'off',
      '@typescript-eslint/no-unsafe-argument': 'off',
      '@typescript-eslint/no-unsafe-assignment': 'off',
      '@typescript-eslint/no-unsafe-call': 'off',
      '@typescript-eslint/no-unsafe-function-type': 'off',
      '@typescript-eslint/no-unsafe-member-access': 'off',
      '@typescript-eslint/no-unsafe-return': 'off',
      '@typescript-eslint/no-unused-expressions': 'off',
      '@typescript-eslint/no-unused-vars': 'off',
      '@typescript-eslint/only-throw-error': 'off',
      '@typescript-eslint/require-await': 'off',
      '@typescript-eslint/restrict-template-expressions': 'off',
      '@typescript-eslint/unbound-method': 'off',
      // Override stylistic-type-checked

      '@typescript-eslint/ban-tslint-comment': ['error'],
      '@typescript-eslint/consistent-generic-constructors': 'error',
      '@typescript-eslint/consistent-indexed-object-style': 'error',
      '@typescript-eslint/consistent-type-definitions': 'off',
      '@typescript-eslint/no-empty-function': 'off',
      '@typescript-eslint/no-empty-interface': 'off',
      '@typescript-eslint/non-nullable-type-assertion-style': 'off',
      '@typescript-eslint/prefer-nullish-coalescing': 'off',
      // Override strict-type-checked

      '@typescript-eslint/no-non-null-assertion': 'off',
      // for now we can use both type and interface
      '@typescript-eslint/consistent-type-exports': 'warn',
      '@typescript-eslint/consistent-type-imports': [
        'warn',
        { fixStyle: 'inline-type-imports' },
      ],
      '@typescript-eslint/method-signature-style': ['error', 'property'],
      '@typescript-eslint/no-import-type-side-effects': 'error',
      '@typescript-eslint/no-var-requires': 'off',
    },
  },

  {
    files: ['*.mjs'],
    rules: {
      '@typescript-eslint/consistent-type-exports': 'off',
      '@typescript-eslint/consistent-type-imports': 'off',
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      '@typescript-eslint/naming-convention': 'off',
    },
  },

  // ─── Project-Specific Config ─────────────────────────────────────────

  {
    languageOptions: {
      parserOptions: {
        project: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
  {
    plugins: {
      'unused-imports': unusedImports,
    },
    rules: {
      // No unused imports
      'unused-imports/no-unused-imports': 'error',
    },
  }
);

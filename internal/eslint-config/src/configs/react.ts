import type { Linter } from 'eslint'

import { interopDefault } from '../util'
import globals from 'globals'

export async function react(): Promise<Linter.Config[]> {
  const [reactHooks, reactRefresh] = await Promise.all([
    interopDefault(import('eslint-plugin-react-hooks')),
    interopDefault(import('eslint-plugin-react-refresh')),
  ] as const)

  return [
    reactHooks.configs['recommended-latest'],
    reactRefresh.configs.vite,
    {
      files: ['**/*.{tsx}'],
      languageOptions: {
        globals: globals.browser,
        ecmaVersion: 2020,
      },
    },
  ]
}

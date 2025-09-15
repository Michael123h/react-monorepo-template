import type { Linter } from 'eslint'

import {
  command,
  comments,
  disableds,
  ignores,
  importPluginConfig,
  javascript,
  jsdoc,
  jsonc,
  node,
  perfectionist,
  prettier,
  turbo,
  typescript,
  unicorn,
} from './configs'
import { oxlint } from './configs/oxlint'
import { customConfig } from './custom-config'
import { react } from './configs/react'

type FlatConfig = Linter.Config

type FlatConfigPromise =
  | FlatConfig
  | FlatConfig[]
  | Promise<FlatConfig>
  | Promise<FlatConfig[]>

async function defineConfig(config: FlatConfig[] = []) {
  const configs: FlatConfigPromise[] = [
    react(),
    javascript(),
    ignores(),
    prettier(),
    typescript(),
    jsonc(),
    disableds(),
    importPluginConfig(),
    node(),
    perfectionist(),
    comments(),
    jsdoc(),
    unicorn(),
    command(),
    turbo(),
    oxlint(),
    ...customConfig,
    ...config,
  ]

  const resolved = await Promise.all(configs)

  return resolved.flat()
}

export { defineConfig }

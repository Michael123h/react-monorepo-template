import type { PluginOption } from 'vite'

import type { CommonPluginOptions, ConditionPlugin } from '../types/config'

import { visualizer as viteVisualizerPlugin } from 'rollup-plugin-visualizer'
import react from '@vitejs/plugin-react-swc'

export async function loadCommonPlugins(
  options: CommonPluginOptions,
): Promise<ConditionPlugin[]> {
  const { isBuild, visualizer } = options
  return [
    {
      condition: true,
      plugins: () => [react()],
    },
    {
      condition: isBuild && !!visualizer,
      plugins: () => [<PluginOption>viteVisualizerPlugin({
          filename: './node_modules/.cache/visualizer/stats.html',
          gzipSize: true,
          open: true,
        })],
    },
  ]
}

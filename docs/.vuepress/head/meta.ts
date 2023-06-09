import { createRequire } from 'node:module'
import { fs } from '@vuepress/utils'

export const version = fs.readJsonSync(
    require.resolve('@vuepress/core/package.json')
).version
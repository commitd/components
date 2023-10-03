import { presetColors } from '@committed/colors'
import { presetTokens } from '@committed/tokens'
import { presetUtilities } from '@committed/utilities'
import { Config as PandaConfig, Preset, defineConfig } from '@pandacss/dev'
import { Prettify } from './utils'
export * from '@committed/colors'
export * from '@committed/tokens'
export * from '@committed/utilities'

export const PACKAGE_NAME = '@committed/ss'
export type ComponentsConfig = Prettify<
  NonNullable<Parameters<typeof presetColors>[0]> & {
    packageName?: string
  }
>

export function componentsPresets(config: ComponentsConfig = {}): Preset[] {
  return [presetColors(config), presetTokens(), presetUtilities()]
}

export function committedIncludes(): string[] {
  return ['./node_modules/@committed/ds/src/**/*.ts*']
}

export function committedImportMap(packageName = PACKAGE_NAME) {
  return {
    css: packageName,
    recipes: packageName,
    patterns: packageName,
    jsx: packageName,
  }
}

export function componentsConfig(
  { presets = [], include = [], ...pandaConfig }: PandaConfig,
  { packageName = PACKAGE_NAME, ...componentsConfig }: ComponentsConfig = {},
): PandaConfig {
  return defineConfig({
    presets: [...componentsPresets(componentsConfig), ...presets],
    preflight: true,
    emitPackage: true,
    outdir: packageName, //'generated', // packageName,
    include: [...committedIncludes(), ...include],
    //importMap: committedImportMap(),
    jsxFramework: 'react',
    ...pandaConfig,
  })
}

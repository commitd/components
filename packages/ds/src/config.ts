import { presetColors } from '@committed/ds-colors'
import { presetTokens } from '@committed/ds-tokens'
import { presetUtilities } from '@committed/ds-utilities'
import { Config as PandaConfig, Preset, defineConfig } from '@pandacss/dev'
import { Prettify } from './utils'

// reexports from presets
export {
  neutralColors,
  presetColors,
  primaryColors,
  semanticColors,
} from '@committed/ds-colors'
export type { Color, Prefix, SemanticColor } from '@committed/ds-colors'
export { presetTokens } from '@committed/ds-tokens'
export { presetUtilities, surfaces } from '@committed/ds-utilities'
export type { Surface, SurfaceVariants } from '@committed/ds-utilities'

// PRESET

export const PACKAGE_NAME = '@committed/ds-ss'
export type ComponentsConfig = Prettify<
  NonNullable<Parameters<typeof presetColors>[0]> & {
    packageName?: string
  }
>

export function componentsPresets(config: ComponentsConfig = {}): Preset[] {
  return [presetColors(config), presetTokens(), presetUtilities()]
}

export function committedIncludes(): string[] {
  return ['./node_modules/@committed/ds/dist/panda.buildinfo.json']
}

export function committedExcludes(): string[] {
  return ['../@committed/ds-ss/**/*', '../../packages/ss/**/*']
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
  { presets = [], include = [], exclude = [], ...pandaConfig }: PandaConfig,
  {
    packageName: _packageName = PACKAGE_NAME,
    ...componentsConfig
  }: ComponentsConfig = {},
): PandaConfig {
  return defineConfig({
    presets: [...componentsPresets(componentsConfig), ...presets],
    preflight: true,
    emitPackage: false,
    outdir: '../node_modules/@committed/ds-ss',
    include: [...committedIncludes(), ...include],
    exclude: [...committedExcludes(), ...exclude],
    // importMap: committedImportMap(packageName),
    jsxFramework: 'react',
    ...pandaConfig,
  })
}

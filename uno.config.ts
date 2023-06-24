import { defineConfig, presetUno, presetAttributify } from 'unocss';
import presetRemToPx from '@unocss/preset-rem-to-px';
import type { Preset } from 'unocss';

export default defineConfig({
  presets: [
    presetUno(),
    presetAttributify(),
    presetRemToPx() as Preset<{}> | Preset<{}>[]
  ]
});

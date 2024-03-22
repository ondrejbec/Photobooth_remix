import type { Config } from 'tailwindcss'
import path from 'node:path';

import utimaUi from '@utima/ui/plugin';

export default {
  content: [ `${path.dirname(require.resolve('@utima/ui'))}/**/*.js`],
  theme: {
    extend: {},
  },
  plugins: [require('tailwindcss-animate'), utimaUi({
    colors: {
      primary: {
        bg: '#cc0000',
        fg: '#ffffff',
      },
    }
  })],
} satisfies Config


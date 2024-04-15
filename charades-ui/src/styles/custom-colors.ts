import { Color, Colors } from './custom-colors.types';

export const customColors: Colors = {
  black: {
    100: '#cecece',
    200: '#9d9d9d',
    300: '#6b6c6c',
    400: '#3a3b3b',
    500: '#090a0a',
    600: '#070808',
    700: '#050606',
    800: '#040404',
    900: '#020202',
  } as const satisfies Color,
} as const satisfies Colors;

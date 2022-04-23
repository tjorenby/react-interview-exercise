import { extendTheme } from '@chakra-ui/react';
import { CardTheme } from '@components/design/Card';
import '@fontsource/archivo';
import * as overrides from '@theme/override';

const colors = {
  brand: {
    green: '#42E794',
    darkGreen: '#1E7B75',
    red: '#cf2e2e',
    orange: '#FF6105',
    lightBlue: '#2ab8ff',
    darkBlue: '#1467FF',
    blue: '#2AB8FF',
    purple: '#630CB2',
    yellow: '#fff95e',
  },
  blue: { 500: '#2ab8ff', 600: '#1467FF' },
  yellow: { 100: '#fff95e' },
  red: { 100: '#cf2e2e' },
  pink: { 100: '#e748b9' },
};

const fonts = {
  body: 'Archivo',
  heading: 'Archivo',
};

export const theme = extendTheme({
  colors,
  fonts,
  components: {
    Card: CardTheme,
    ...overrides,
  },
});

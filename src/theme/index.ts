import { extendTheme } from "@chakra-ui/react";
import {CardTheme} from "@components/design/Card";
import * as overrides from "@theme/override";

const colors = {
  brand: {
    green: "#42E794",
    darkGreen: "#1E7B75",
    red: "#FF4658",
    orange: "#FF6105",
    lightBlue: "#2ab8ff",
    darkBlue: "#1467FF",
    blue: "#2AB8FF",
    purple: "#630CB2",
    yellow: "#fff95e"
  },
  blue: {500: "#2ab8ff", 600: "#1467FF"},
  yellow: {100: "#fff95e"},
  red: {100: "#ff4658"},
  pink: {100: "#e748b9" }
}
export const theme = extendTheme({ 
  colors,
  components: {
    Card: CardTheme,
    ...overrides
  }
})
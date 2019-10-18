import Typography from "typography"
import sternGroveTheme from "typography-theme-stern-grove"

sternGroveTheme.googleFonts = [
  {
    name: "Muli",
    styles: ["700"],
  },
  {
    name: "Merriweather",
    styles: ["400", "400i", "700", "700i"],
  },
]
sternGroveTheme.bodyFontFamily = ["Muli"]
sternGroveTheme.headerFontFamily = ["Merriweather"]

const typography = new Typography(sternGroveTheme)

// Export helper functions
export const { scale, rhythm, options } = typography
export default typography

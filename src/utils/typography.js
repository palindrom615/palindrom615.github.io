import Typography from "typography"
// import Wordpress2016 from "typography-theme-wordpress-2016"
import funstonTheme from "typography-theme-funston"

const typography = new Typography({
  ...funstonTheme,
  googleFonts: [
    {
      name: "Black Han Sans",
      styles: ["400"],
    }
  ],
  headerFontFamily: ["Black Han Sans", 'sans-serif'],
  bodyFontFamily: ["Jeju Myeongjo", 'serif'],
})

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale

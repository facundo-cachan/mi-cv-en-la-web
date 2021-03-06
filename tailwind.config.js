const { colors } = require("tailwindcss/defaultTheme");

module.exports = {
  future: {
    purgeLayersByDefault: true,
    removeDeprecatedGapUtilities: true,
  },
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        primary: colors.teal,
        instagram: "#E1306C",
        linkedin: "#2867B2",
        github: "#211F1F",
        gitlab: "#FF8000",
        dribbble: "#EA4C89",
        dev: "#0a0a0a",
        facebook: "#3B5998",
        twitter: "#1DA1F2",
        google: "#DB4437",
      },
    },
  },
  variants: {},
  plugins: [],
  purge: {
    enabled: process.env.NODE_ENV === 'production',
    content: [
      './src/components/**/*.js',
      './src/pages/**/*.tsx',
      './src/sections/**/*.tsx'
    ]
  },
};

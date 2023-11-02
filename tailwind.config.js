/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  darkMode: ["class",'[data-mode="dark"]'],

  daisyui: {
    themes: ["cupcake", "dark", "cmyk"],
  },
  theme: {
    animatedSettings: {
      animatedSpeed: 1000,
      heartBeatSpeed: 500,
      hingeSpeed: 2000,
      bounceInSpeed: 750,
      bounceOutSpeed: 750,
      animationDelaySpeed: 500,
      classes: ['bounce', 'heartBeat']
    },
    screens: {
      'sm': { 'max': '639px' },

      'md': { 'max': '767px' },

      'lg': { 'max': '1023px' },

      'xl': { 'max': '1279px' },
    },
    fontFamily: {
      'sans': ['Ubuntu', 'Sans-serif']
    },
    extend: {
      spacing: {
        '72': '18rem',
        '84': '21rem',
        '96': '24rem',
      },
    },
  },
  variants: {},
  plugins: [
    require('tailwindcss-animatecss'),
    require("daisyui")
  ],
};

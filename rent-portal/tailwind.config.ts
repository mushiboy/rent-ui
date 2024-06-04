import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bl : '#272727',
        bl2: '#77A6F7',
        gr: '#393E46',
        gr2: '#454545',
        blu: '#93DEFF',
        wh: '#F2F2F2',
        or: '#D65A31'
      }
    },
    screens: {
      'sm': '360px',
      'md': '769px',
      'lg': '1025px',
      'xl': '1280px',
      '2xl': '1440px',
    },
  },
  plugins: [],
};
export default config;


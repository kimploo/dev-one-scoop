/** @type {import('tailwindcss').Config} */
import defaultTheme from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        malibu: {
          DEFAULT: "#66ccff",
          50: "#f0f9ff",
          100: "#dff2ff",
          200: "#b8e5ff",
          300: "#66ccff",
          400: "#33bdfd",
          500: "#09a5ee",
          600: "#0083cc",
          700: "#0068a5",
          800: "#045988",
          900: "#0a4a70",
          950: "#062e4b",
        },
        sunglow: {
          DEFAULT: "#ffcc33",
          50: "#fefae8",
          100: "#fff4c2",
          200: "#ffe689",
          300: "#ffcc33",
          400: "#fdb912",
          500: "#ec9f06",
          600: "#cc7902",
          700: "#a35405",
          800: "#86420d",
          900: "#723611",
          950: "#431a05",
        },
      },
      fontFamily: {
        sans: [
          '"Pretendard Variable"',
          "Pretendard",
          ...defaultTheme.fontFamily.sans,
        ],
      },
    },
  },
  plugins: [],
};

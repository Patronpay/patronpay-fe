import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.tsx",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    fontFamily: {
      sans: ["Raleway", "sans-serif"],
      serif: ["Merriweather", "serif"],
    },
    extend: {
      // backgroundImage: {
      //   "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      //   "gradient-conic":
      //     "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      // },
      colors: {
        white:"FFFFFF",
        black:"000000",
        gray: {
          100: "#D6D6D6",
          200: "#B5B5B5",
          300: "#959595",
          400: "#767676",
          500: "#595959",
          600: "#3D3D3D",
        },
        lightBlue: {
          100: "#CFD6E0",
          200: "#AAB6C8",
          300: "#8496B0",
          400: "#617799",
          500: "#3F5A83",
          600: "#2B3D5A",
        },
        darkBlue: {
          100: "#BBD9FF",
          200: "#80B8FE",
          300: "#4395FE",
          400: "#1873E5",
          500: "#1257AE",
          600: "#0D3C77",
          700: "#1C7FFF",
        },
        yellow: {
          100: "#FED12B",
          200: "#DEAF00",
          300: "#B79000",
          400: "#917200",
          500: "#6E5600",
          600: "#4C3B00",
        },
        red: {
          100: "#FBCBCB",
          200: "#F79C9C",
          300: "#F26969",
          400: "#D04545",
          500: "#9D3434",
          600: "#6E2524",
        },
        green: {
          100: "#CFD9C5",
          200: "#A9BB98",
          300: "#849C6A",
          400: "#607F3F",
          500: "#48602F",
          600: "#314220",
        },
        brown: {
          100: "#E9D1C1",
          200: "#D7AD8F",
          300: "#C18861",
          400: "#996C4D",
          500: "#73523A",
          600: " #503828",
        },
      },
      input: {
        base: "border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:border-blue-500",
        error:
          "border border-red-500 rounded-md py-2 px-4 focus:outline-none focus:border-red-500",
      },
      animation: {
        flicker: "flicker 3s linear infinite",
        shimmer: "shimmer 1.3s linear infinite",
      },
    },
  },
  plugins: [
    plugin(function ({
      addBase,
      addComponents,
      addUtilities,
      addVariant,
      theme,
    }) {
      addBase({
        h1: {
          fontSize: "44px",
          fontWeight: "700",
          lineHight: "57.2px",
        },
        h2: {
          fontSize: "36px",
          fontWeight: "700",
          lineHight: "46.8px",
        },
        h3: {
          fontSize: "28px",
          fontWeight: "700",
          lineHight: "36.4px",
        },
        h4: {
          fontSize: "22px",
          fontWeight: "500",
          lineHight: "33px",
        },
        h5: {
          fontSize: "20px",
          fontWeight: "400",
          lineHight: "34px",
        },
        h6: {
          fontSize: "18px",
          fontWeight: "400",
          lineHight: "30.6px",
        },
        p: {
          fontSize: "16px",
          fontWeight: "400",
          lineHight: "27.2px",
        },
        span: {
          fontSize: "12px",
          fontWeight: "400",
          lineHight: "20.4px",
        },
      });
      addUtilities({
        "btn-primary": {
          backgroundColor: theme("colors.darkBlue.700"),
          color: theme("colors.white"),
          borderRadius:"50px",
          padding:"16px, 32px, 16px, 32px"
        },
        "btn-secondary":{
          backgroundColor: theme("colors.white"),
          color: theme("colors.darkBlue.700"),
          borderRadius:"50px",
          padding:"16px, 32px, 16px, 32px"
        }
      });
    }),
  ],
};
export default config;

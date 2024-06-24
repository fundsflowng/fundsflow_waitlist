import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "bg-gridline": "url('/bg-grid.svg')",
      },
      colors: {
        primain_blue: "#3377FF",
        darker_blue: "#3568D4",
        lighter_blue: "#99BBFF",
        Main_error: "#FF3B3B",
        dark_red: "#E5353",
        mid_red: "#FF5C5C",
        light_red: "#FF8080",
        warning_yellow: "#FFCC00",
        info_blue: "#0063F7",
        success_green: "#06C270",
        dark_yellow: "#E5B800",
        mid_yellow: "#FDDD48",
        dark_green: "#05A660",
        mid_green: "#39D98A",
        light_green: "#57EBA1 ",
        main_black: "#3A3A3C",
        primary_black: "#6B7588 ",
        mid_black: "#8F90A6",
        light_dark: "#C7C9D9",
        lighter_dark: "#4B5563",
        light1: "#DDE5E9",
        light2: "#EBEBF0",
        light3: "#F2F2F5",
        light4: "#FAFAFC",
        white: "#FFFFFF",
      },
      fontFamily: {
        mullish: ["Mulish", "serif"],
        roboto: "var(--large-heading)",
        inter: "var(--font-inter)",
      },
    },
  },
  plugins: [],
};

export default config;

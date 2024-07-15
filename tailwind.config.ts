import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
        xs: { max: "475px" },
      },
    },
    extend: {
      screens: {
        xs: { max: "475px" },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "bg-gridline": "url('/bg-grid.svg')",
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
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
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [],
};

export default config;

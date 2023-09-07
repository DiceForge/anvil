import { fontFamily } from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class", ".dark-theme"],
  content: ["src/pages/**/*.{ts,tsx}", "src/components/**/*.{ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    fontSize: {
      "body-regular-xs": [
        "0.75rem",
        {
          lineHeight: "1.125rem",
          fontWeight: "400",
        },
      ],
      "body-regular-sm": [
        "0.875rem",
        {
          lineHeight: "1.25rem",
          fontWeight: "400",
        },
      ],
      "body-regular-md": [
        "1rem",
        {
          lineHeight: "1.5rem",
          fontWeight: "400",
        },
      ],
      "body-regular-lg": [
        "1.125rem",
        {
          lineHeight: "1.625rem",
          fontWeight: "400",
        },
      ],
      "body-regular-xl": [
        "1.25rem",
        {
          lineHeight: "1.875rem",
          fontWeight: "400",
        },
      ],
      "body-medium-xs": [
        "0.75rem",
        {
          lineHeight: "1.125rem",
          fontWeight: "500",
        },
      ],
      "body-medium-sm": [
        "0.875rem",
        {
          lineHeight: "1.25rem",
          fontWeight: "500",
        },
      ],
      "body-medium-md": [
        "1rem",
        {
          lineHeight: "1.5rem",
          fontWeight: "500",
        },
      ],
      "body-medium-lg": [
        "1.125rem",
        {
          lineHeight: "1.625rem",
          fontWeight: "500",
        },
      ],
      "body-medium-xl": [
        "1.25rem",
        {
          lineHeight: "1.875rem",
          fontWeight: "500",
        },
      ],
      "body-semibold-xs": [
        "0.75rem",
        {
          lineHeight: "1.125rem",
          fontWeight: "600",
        },
      ],
      "body-semibold-sm": [
        "0.875rem",
        {
          lineHeight: "1.25rem",
          fontWeight: "600",
        },
      ],
      "body-semibold-md": [
        "1rem",
        {
          lineHeight: "1.5rem",
          fontWeight: "600",
        },
      ],
      "body-semibold-lg": [
        "1.125rem",
        {
          lineHeight: "1.625rem",
          fontWeight: "600",
        },
      ],
      "body-semibold-xl": [
        "1.25rem",
        {
          lineHeight: "1.875rem",
          fontWeight: "600",
        },
      ],

      "body-bold-xs": [
        "0.75rem",
        {
          lineHeight: "1.125rem",
          fontWeight: "800",
        },
      ],
      "body-bold-sm": [
        "0.875rem",
        {
          lineHeight: "1.25rem",
          fontWeight: "800",
        },
      ],
      "body-bold-md": [
        "1rem",
        {
          lineHeight: "1.5rem",
          fontWeight: "800",
        },
      ],
      "body-bold-lg": [
        "1.125rem",
        {
          lineHeight: "1.625rem",
          fontWeight: "800",
        },
      ],
      "body-bold-xl": [
        "1.25rem",
        {
          lineHeight: "1.875rem",
          fontWeight: "800",
        },
      ],
      "display-xs": [
        "1.5rem",
        {
          lineHeight: "2rem",
          fontWeight: "600",
        },
      ],
      "display-sm": [
        "1.875rem",
        {
          lineHeight: "2.375",
          fontWeight: "600",
        },
      ],
      "display-md": [
        "2.25rem",
        {
          lineHeight: "2.75rem",
          fontWeight: "600",
        },
      ],
      "display-lg": [
        "3rem",
        {
          lineHeight: "3.75rem",
          fontWeight: "600",
        },
      ],
      "display-xl": [
        "3.75rem",
        {
          lineHeight: "4.5rem",
          fontWeight: "600",
        },
      ],
      "display-2xl": [
        "4.5rem",
        {
          lineHeight: "5.625rem",
          fontWeight: "600",
        },
      ],
    },
    extend: {
      colors: {
        slate: generateScale("slate"),
        red: generateScale("red"),
        green: generateScale("green"),
        violet: generateScale("violet"),
        mint: generateScale("mint"),
        blue: generateScale("blue"),
        yellow: generateScale("yellow"),
        orange: generateScale("orange"),

        primary: generateScale("violet"),
        neutral: generateScale("slate"),
        info: generateScale("blue"),
        danger: generateScale("red"),
        success: generateScale("green"),

        blackA: generateScale("black"),
        whiteA: generateScale("white"),

        surface: "var(--surface)",
      },
      maxWidth: {
        container: "72rem",
      },
      boxShadow: {
        subtle: "0px 1px 2px rgba(17, 24, 28, 0.08)",
        "tab-line": "inset 0 -1px 0 var(--slate-6)",
      },
      maxHeight: {
        available: "-webkit-fill-available",
      },
      height: {
        xs: "1.5rem",
        sm: "2rem",
        md: "2.5rem",
        lg: "3rem",
        xl: "3.5rem",
      },
      minHeight: {
        xs: "1.5rem",
        sm: "2rem",
        md: "2.5rem",
        lg: "3rem",
        xl: "3.5rem",
      },
      borderRadius: {
        sm: "4px",
        DEFAULT: "6px",
        md: "8px",
        lg: "10px",
      },
      fontFamily: {
        body: ["var(--font-body)", ...fontFamily.sans],
        display: ["var(--font-display)", ...fontFamily.sans],
      },
      typography: {
        DEFAULT: {
          css: {
            color: "var(--slate-11)",
          },
        },
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
        "open-menu": {
          "0%": {
            opacity: 0,
            transform: "translateY(-10px)",
          },
          "100%": {
            opacity: 1,
            transform: "translateY(0)",
          },
        },
        "close-menu": {
          "0%": {
            opacity: 1,
            transform: "translateY(0)",
          },
          "100%": {
            opacity: 0,
            transform: "translateY(-10px)",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "open-menu": "open-menu 200ms ease-in-out",
        "close-menu": "close-menu 200ms ease-in-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
};

function generateScale(name) {
  let scale = Array.from({ length: 12 }, (_, i) => {
    let id = i + 1;

    if (["black", "white"].includes(name)) {
      id = `a${id}`;
    }

    return [
      [id, `var(--${name}-${id})`],
      [`a${id}`, `var(--${name}-a${id})`],
    ];
  }).flat();

  console.log(scale);

  return Object.fromEntries(scale);
}

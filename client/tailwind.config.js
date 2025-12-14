/** @type {import('tailwindcss').Config} */
module.exports = {
  // Tell Tailwind which files to scan for classes
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  // Use the NativeWind preset for React Native compatibility
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: "var(--primary)",
        secondary: "var(--secondary)",
        tertiary: "var(--tertiary)",
        dark: "var(--dark)",
      },
    },
  },
  plugins: [],
};

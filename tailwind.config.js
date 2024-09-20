/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",  
  theme: {
    extend: {  
      colors: {
         
        background: {
          DEFAULT: '#1a202c',  
        },
        text: {
          DEFAULT: '#f7fafc',  
        },
      },
    },
  },
  plugins: [addVariablesForColors],
};
 
function addVariablesForColors({ addBase, theme }) {
  const colors = theme("colors");
  const flattenColors = flattenPaletteColors(colors);

  const newVars = Object.fromEntries(
    Object.entries(flattenColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
}

// Function to flatten nested color objects
function flattenPaletteColors(colors, prefix = "") {
  return Object.entries(colors).reduce((acc, [key, val]) => {
    if (typeof val === "object" && val !== null) {
      Object.assign(acc, flattenPaletteColors(val, `${prefix}${key}-`));
    } else {
      acc[`${prefix}${key}`] = val;
    }
    return acc;
  }, {});
}

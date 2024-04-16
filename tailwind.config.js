module.exports = {
  content: [
    // Caminhos para seus componentes React
    "./components/**/*.jsx",
    "./pages/**/*.jsx",
    "./node_modules/tw-elements/dist/js/**/*.js",
  ],

  theme: {
    extend: {
      screens: {
        xs: "360px", // Exemplo de breakpoint personalizado para telas pequenas
        sm: "640px", // Padrão para telas pequenas
        md: "768px", // Padrão para telas médias
        lg: "1024px", // Padrão para telas grandes
        xl: "1280px", // Padrão para telas extra grandes
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("tw-elements/dist/plugin.cjs")],
  darkMode: "class",
};

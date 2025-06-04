module.exports = {
  darkMode: "class", // Enables class-based dark mode
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        geist: ["var(--font-geist-sans)"],
        geistMono: ["var(--font-geist-mono)"],
      },
    },
    // animation: {
    //     'scale-in': 'scaleIn 0.6s ease-out forwards',
    //   },
    //   keyframes: {
    //     scaleIn: {
    //       '0%': { transform: 'scale(0.95)', opacity: '0.8' },
    //       '100%': { transform: 'scale(1)', opacity: '1' },
    //     }
    //   }
  },
  plugins: [],
};

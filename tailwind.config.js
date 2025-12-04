export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        night: {
          50: "#f6f7fb",
          100: "#eef0f8",
          200: "#d7dff2",
          300: "#bfbdea",
          400: "#8f86e0",
          500: "#5f4ce0",
          600: "#4b37c5",
          700: "#372aa0",
          800: "#231d7a",
          900: "#0f0f3f"
        },
        neon: {
          cyan: "#00f5ff",
          purple: "#8b5cf6",
          pink: "#ff6fd8",
          blue: "#3dd3ff"
        }
      },
      boxShadow: {
        'neon-lg': '0 10px 30px rgba(99,102,241,0.14), 0 2px 10px rgba(125,211,252,0.06)'
      },
      blur: {
        xs: '2px'
      }
    },
  },
  plugins: [],
}
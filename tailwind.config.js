// tailwind.config.js
import { defineConfig } from 'tailwindcss'

export default defineConfig({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
        containers:{
            maincontainer:'max-w-[1200px] m-auto '
        }

    },
  },
  plugins: [],
})

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors:{
        grayish:"##D9D9D9",
      },
      backgroundImage: {
        'hero-image': "url('img/Rectangle10.svg')",
      },
      cursor: {
        'fancy': 'url(img/UI/cirkelhvid.svg), pointer',
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms"),require("daisyui")],
};

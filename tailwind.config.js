/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        "txt-white": "#ffffff",
        "txt-green": "#38ef7d",
        "txt-button": "#f4fdf9",
        "txt-grey": "#9da1a1",
        "bg-main": "#050505",
        "bg-grey": "#0a180f",
        "bg-light-grey": "#c0c0c0",
        "bg-placeholder": "#cdcedf",
        "bg-green": "#38ef7d",
        "bg-pink": "#ffb8b8",
        "bg-blue": "#227d94",
      },
      fontFamily: {
        main_en: "Cabin, sans-serif",
        main_ua: "Montserrat, sans-serif",
      },
      backgroundImage: {
        hero: "url('/public/img/hero.png')",
        aboutWave: "url('/public/img/about.png')",
        aboutGirl: "url('/public/img/girl.png')",
        modal: "url('/public/img/modal.png')",
        modalGirl: "url('/public/img/girl-modal.png')",
        testimonials: "url('/public/img/testimorials.png')",
        footer: "url('/public/img/footer.png')",
      },
      boxShadow: {
        contactBtn: "0px 0px 16px 8px rgba(43,209,195,0.6)",
        socialIcon: "0px 0px 10px 0px rgba(43,209,195,0.6)",
        menuIcon: "0px 0px 10px 0px rgba(43,209,195,0.6)",
        swiper: "0px 0px 20px 10px rgba(43,209,195,0.6)",
        testimonials: "0px 0px 15px 0px rgba(143,151,150)",
        modal: "0px 4px 40px 0px rgba(56,239,125,0.60);",
      },
      gridTemplateColumns: {},
      keyframes: {
        up: {
          "0%": {
            transform: "translateY(100%)",
          },
          "100%": {
            transform: "translateY(0)",
          },
        },
        right: {
          "0%": {
            transform: "translateX(-150%)",
          },
          "100%": {
            transform: "translateX(0)",
          },
        },
        hover: {
          "100%": {
            transform: "translateX(0)",
          },
        },
      },
      animation: { up: "up", right: "right 2s ease-in-out", hover: "hover 2s ease-in-out" },
    },
  },
  plugins: [],
};

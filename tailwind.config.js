module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx,vue,html}"],
  theme: {
    extend: {
      margin: {
        "5p": "5%",
        "11p": "11%",
        "12p": "12%",
        "5vw": "5vw",
        "10vw": "10vw",
      },
      height: {
        "10p": "10%",
        "1px": "1px",
      },
      spacing: {
        "3px": "3px",
      },
      right: {
        "330px": "330px",
      },
      transitionDuration: {
        "2s": "2000ms",
      },
      scrollBehavior: {
        smooth: "smooth",
      },
      inset: {
        "40%": "40%",
      },
      spacing: {
        "40vh": "36vh",
      },
    },
  },
  darkMode: "class",
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        ".custom-underline-animation": {
          position: "absolute",
          left: "0",
          bottom: "-3px",
          width: "100%",
          height: "1px",
          "background-color": "currentColor",
          transform: "scaleX(0)",
          transition: "transform 0.3s",
        },
        ".group:hover .custom-underline-animation": {
          transform: "scaleX(100%)",
        },
      };

      addUtilities(newUtilities, ["responsive", "hover"]);
    },
  ],
};

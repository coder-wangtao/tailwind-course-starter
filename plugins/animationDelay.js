const plugin = require("tailwindcss/plugin");
const animationDelay = plugin(
  function ({ matchUtilities, theme }) {
    matchUtilities(
      {
        "animation-delay": (value) => {
          return {
            animationDelay: value,
          };
        },
      },
      {
        values: theme("animationDelay"),
      },
    );
  },
  //定义了 animationDelay 的主题，包含了一系列的延迟值。这些值表示你可以在 Tailwind CSS 中使用的 animation-delay 值。
  {
    theme: {
      animationDelay: {
        100: "100ms",
        200: "200ms",
        300: "300ms",
        400: "400ms",
        500: "500ms",
        600: "600ms",
        700: "700ms",
        800: "800ms",
        900: "900ms",
        1000: "1000ms",
      },
    },
  },
);

module.exports = animationDelay;

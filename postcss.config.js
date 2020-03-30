const tailwindcss = require("tailwindcss");
const autoprefixer = require("autoprefixer");

module.exports = {
  plugins: [
    tailwindcss({
      variants: ["responsive", "group-hover", "hover", "focus", "active"]
    }),
    autoprefixer
  ]
};

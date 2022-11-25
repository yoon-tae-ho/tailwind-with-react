const plugin = require("tailwindcss/plugin");

const openVariant = plugin(({ addVariant }) => {
  addVariant("group-open", ":merge(.group).open &");
});

module.exports = openVariant;

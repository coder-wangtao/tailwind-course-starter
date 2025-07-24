const plugin = require("tailwindcss/plugin");
const openVariant = plugin(function ({ addVariant }) {
  //.group.open & 表示：当父元素有 .group 和 .open 类时，目标元素才会应用这个变体的样式。& 是当前选择器的占位符，用来指代目标元素。
  addVariant("group-open", ".group.open &");
  //当目标元素是 .peer.open 类的兄弟元素时，目标元素才会应用这个变体的样式。~ 是 CSS 中的兄弟选择器，表示目标元素需要是 .peer.open 元素的后续兄弟。
  addVariant("peer-open", ".peer.open ~ &");
});

module.exports = openVariant;

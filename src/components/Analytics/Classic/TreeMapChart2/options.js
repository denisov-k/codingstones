module.exports = {
  tooltip: {
    extraCssText: "white-space:pre-wrap; max-width:400px;",
    confine: true,
    formatter(item) {
      return `${item.name}: <b>${item.value.toLocaleString()}</b>`
    }
  }
}
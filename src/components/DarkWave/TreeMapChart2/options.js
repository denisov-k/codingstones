module.exports = {
  tooltip: {
    position: 'top',
    extraCssText: "white-space:pre-wrap; max-width:300px; text-align: left;",
    appendToBody: true,
    formatter(item) {
      return `${item.name}: <b>${item.value.toLocaleString()}</b>`
    }
  }
}
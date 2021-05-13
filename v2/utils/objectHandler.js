const propsMissingIn = function (object, requiredProps = []) {
  return !requiredProps.every(p => Object.keys(object).includes(p))
}

module.exports = {
  propsMissingIn
}

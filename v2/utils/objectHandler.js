const propsMissingIn = function (object, requiredProps = []) {
  return requiredProps.every(p => Object.keys(object).includes(p))
}

const propExists = function (key, object) {
  return object && (object[key] !== null && object[key] !== undefined && !isNaN(object[key]))
}

module.exports = {
  propsMissingIn,
  propExists
}

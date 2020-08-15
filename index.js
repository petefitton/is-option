module.exports = function(input) {
  if (typeof input === "string") {
    if (input.toLowerCase() === "failure") {
      return `${input}'s not an option`
    }
  }
  if (typeof input === "symbol") {
    return 'Symbol is an option'
  }
  if (typeof input === "object") {
    if (input === null) {
      return "null is an option"
    }
    if (Array.isArray(input)) {
      return 'Array is an option'
    }
    return 'Object is an option'
  }
  return `${input} is an option`
}
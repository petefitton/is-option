exports.isOption = function(input) {
  if (input.toLowerCase() === "failure") {
    return "Failure's not an option"
  } else {
    return `${input} is an option`
  }
}
var number = 1
function takeANumber(katzDeliLine) {
  katzDeliLine.push(number)
  return(`Welcome. You are number ${number++}.`)
}
function nowServing(katzDeliLine) {
  if(!katzDeliLine.length) {
    return "There is nobody waiting to be served!"
  } return `Currently serving ${katzDeliLine.shift()}.`
}
function currentLine(katzDeliLine) {
  if (!katzDeliLine.length) {
    return "The line is currently empty."
  }

 var numbersNames = []

  for (var i = 0, l = katzDeliLine.length; i < l; i++) {
    numbersNames.push(`${i + 1}. ${katzDeliLine[i]}`)
  }
  return `The line is currently: ${numbersNames.join(', ')}`
};


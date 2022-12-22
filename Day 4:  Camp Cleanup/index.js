const { readFileSync } = require("fs")

const input = readFileSync("./input.txt", "utf-8")
const sectionAssignments = input
  .split("\n")
  .map((pair) => pair.split(","))
  .map((assig) => assig.map((range) => range.split("-")))

function part1() {
  let count = 0

  for (let pair of sectionAssignments) {
    if (
      (parseInt(pair[0][0]) <= parseInt(pair[1][0]) &&
        parseInt(pair[0][1]) >= parseInt(pair[1][1])) ||
      (parseInt(pair[0][0]) >= parseInt(pair[1][0]) &&
        parseInt(pair[0][1]) <= parseInt(pair[1][1]))
    ) {
      count++
    }
  }

  console.log(count)
}

function part2() {
  let count = 0

  for (let pair of sectionAssignments) {
    if (
      (parseInt(pair[1][0]) <= parseInt(pair[0][0]) &&
        parseInt(pair[0][0]) <= parseInt(pair[1][1])) ||
      (parseInt(pair[0][0]) <= parseInt(pair[1][0]) &&
        parseInt(pair[1][0]) <= parseInt(pair[0][1]))
    ) {
      count++
    }
  }

  console.log(count)
}

part1()
part2()

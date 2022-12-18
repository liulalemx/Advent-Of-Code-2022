const { readFileSync } = require("fs")

const input = readFileSync("./input.txt", "utf-8")
const guides = input.split("\n")
const draws = {
  X: 1,
  Y: 2,
  Z: 3,
}

function part1() {
  let score = 0

  for (let guide of guides) {
    if (guide === "A Y" || guide === "B Z" || guide === "C X") {
      score += 6 + draws[guide[2]]
    } else if (guide === "A X" || guide === "B Y" || guide === "C Z") {
      score += 3 + draws[guide[2]]
    } else {
      score += 0 + draws[guide[2]]
    }
  }

  console.log(score)
}

function part2() {
  let score = 0
  const moves = {
    win: {
      A: "Y",
      B: "Z",
      C: "X",
    },
    draw: {
      A: "X",
      B: "Y",
      C: "Z",
    },
    loss: {
      A: "Z",
      B: "X",
      C: "Y",
    },
  }

  for (let guide of guides) {
    if (guide[2] === "Z") {
      score += 6 + draws[moves.win[guide[0]]]
    } else if (guide[2] === "Y") {
      score += 3 + draws[moves.draw[guide[0]]]
    } else {
      score += 0 + draws[moves.loss[guide[0]]]
    }
  }

  console.log(score)
}

part1()
part2()

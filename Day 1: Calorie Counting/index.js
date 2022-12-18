const { readFileSync } = require("fs")

const input = readFileSync("./input.txt", "utf-8")
const calories = input.split("\n\n")

function part1() {
  let mostCalories = 0

  for (const cal of calories) {
    let currentMost = cal
      .split("\n")
      .map(Number)
      .reduce((val, sum) => (sum += val), 0)
    if (currentMost > mostCalories) mostCalories = currentMost
  }
  console.log(mostCalories)
}

function part2() {
  let mostCalories = [0, 0, 0]

  for (const cal of calories) {
    let currentMost = cal
      .split("\n")
      .map(Number)
      .reduce((val, sum) => (sum += val), 0)

    for (let index = 0; index < mostCalories.length; index++) {
      let most = mostCalories[index]
      let tmp
      if (currentMost > most) {
        tmp = mostCalories[index]
        mostCalories[index] = currentMost
        currentMost = tmp
      }
    }
  }

  console.log(mostCalories.reduce((val, sum) => (sum += val), 0))
}

part1()
part2()

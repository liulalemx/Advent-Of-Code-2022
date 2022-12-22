const { readFileSync } = require("fs")

const input = readFileSync("./input.txt", "utf-8")
const [drawing, procedures] = input.split("\n\n")

const parsedDrawing = drawing
  .split("\n")
  .map((line) => [...line].filter((val, index) => index % 4 === 1))

const indexes = parsedDrawing.pop()
const stacks = {}

for (line of parsedDrawing) {
  for (let i = 0; i < line.length; i++) {
    if (line[i] !== " ") {
      !stacks[indexes[i]]
        ? (stacks[indexes[i]] = [line[i]])
        : stacks[indexes[i]].unshift(line[i])
    }
  }
}

const moves = procedures
  .split("\n")
  .map((line) => line.split(" "))
  .map((line) => line.filter((val) => val / 1 == val))
  .map((line) => line.map(Number))

function part1() {
  let topOfStacks = ""

  // Move single crates
  for (move of moves) {
    for (let index = 0; index < move[0]; index++) {
      let crate = stacks[move[1]].pop()
      stacks[move[2]].push(crate)
    }
  }

  for (index of indexes) {
    topOfStacks += stacks[index].pop()
  }

  console.log(topOfStacks)
}

function part2() {
  let topOfStacks = ""

  // Move single crates
  for (move of moves) {
    let crate = []
    for (let index = 0; index < move[0]; index++) {
      crate.unshift(stacks[move[1]].pop())
    }
    stacks[move[2]].push(...crate)
  }

  for (index of indexes) {
    topOfStacks += stacks[index].pop()
  }

  console.log(topOfStacks)
}

part1()
part2()

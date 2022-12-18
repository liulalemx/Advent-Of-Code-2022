const { readFileSync } = require("fs")

const input = readFileSync("./input.txt", "utf-8")
const rucksacks = input.split("\n")
const rucksacksByCompartments = rucksacks.map((compartment) => [
  compartment.slice(0, parseInt(compartment.length / 2)),
  compartment.slice(parseInt(compartment.length / 2)),
])
const alphabets = "abcdefghijklmnopqrstuvwxyz".split("")
const priority = [
  ...alphabets,
  ...alphabets.map((lowecase) => lowecase.toUpperCase()),
]

function findDuplicateCompartment(ruck) {
  let items1 = {}
  let items2 = {}

  for (let item of ruck[0]) {
    items1[item] = 1
  }

  for (let item of ruck[1]) {
    items2[item] = 1
  }

  return Object.keys(items1).find((item) => items1[item] === items2[item])
}

function findDuplicateGroup(group) {
  let items1 = {}
  let items2 = {}
  let items3 = {}

  for (let item of group[0]) {
    items1[item] = 1
  }

  for (let item of group[1]) {
    items2[item] = 1
  }

  for (let item of group[2]) {
    items3[item] = 1
  }

  return Object.keys(items1).find(
    (item) => items1[item] === items2[item] && items1[item] === items3[item]
  )
}

function part1() {
  let sum = 0

  for (let rucksack of rucksacksByCompartments) {
    sum += priority.indexOf(findDuplicateCompartment(rucksack)) + 1
  }

  console.log(sum)
}

function part2() {
  let sum = 0

  for (let i = 0; i < rucksacks.length; i += 3) {
    const group = rucksacks.slice(i, i + 3)
    sum += priority.indexOf(findDuplicateGroup(group)) + 1
  }

  console.log(sum)
}

part1()
part2()

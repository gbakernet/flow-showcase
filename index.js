// @flow

// What is flow??

// Type annotations for JavaScript

// ###########################################################
// #######  Primitives
// ###########################################################

// ## Eg.

// boolean
true
new Boolean(true)

// string
;("hello")
new String("hello")

// number
3.14
new Number(42)

// null
null

// void
undefined

// ###########################################################
// #######  Inference
// ###########################################################

// ## Eg.

function square(n) {
  return n * n
}

square(2)
// square("2") // Error!

// ## Eg.

function add(a, b) {
  return a + a
}

add(2, 5)
add(2, "5")

// ###########################################################
// #######  Annotations
// ###########################################################

// ## Eg.

function squareAnnotated(n: number): number {
  return n * n
}

squareAnnotated(2)
// squareAnnotated("2") // Error!

// ## Eg.

function addAnnotated(a: number, b: number): number {
  return a + b
}

addAnnotated(2, 5)
// addAnnotated(2, "5") // Error!

// ###########################################################
// #######   Annotations for variables
// ###########################################################

// ## Eg.

const year: number = 2017
// const month: number = "October" // Error!

// ## Eg.

const addArrow = (a: number, b: number): number => {
  return a + b
}

addArrow(5, 3)
// addArrow(5, "3") // Error!

// ## Eg.

// This is not as readable
const addArrow2: (a: number, b: number) => number = (a, b) => {
  return a + b
}

addArrow2(5, 3)
// addArrow2(5, "3") // Error!

// ###########################################################
// #######  Literals
// ###########################################################

// ## Eg.

{
  const add = (a: 5, b: 3): number => {
    return a + b
  }

  add(5, 3)
  // add(5, 2) // Error!
}

// ## Eg.

function getHex(name: "blue" | "red"): string {
  return "#TODO"
}

getHex("blue") // Works!
getHex("red") // Works!
// getColor("orange") // Error!

// ###########################################################
// #######  Object Types
// ###########################################################

// ## Eg.

function createPlace(
  city,
  suburb,
  lat,
  lng
): {
  city: string,
  suburb: string,
  lat: number,
  lng: number,
} {
  return { city, suburb, lat, lng }
}

createPlace("Melbourne", "South Melbourne", 145.345, -45.345)
// createPlace("Melbourne", "South Melbourne", "145.345", -45.345) // Error!

// ## Eg. Type Alias

type Place = {
  city: string,
  suburb: string,
  lat: number,
  lng: number,
}

function placeToString(place: Place): string {
  return (
    // Not going to happen "undefined, undefined (undefined, undefined)"
    place.city + ", " + place.suburb + " (" + place.lat + "," + place.lng + ")"
  )
}

placeToString({
  city: "Melbourne",
  suburb: "South Melbourne",
  lat: 145.345,
  lng: -45.345,
})

// placeToString({
//   city: "Melbourne",
//   lat: 145.345,
//   lng: -45.345,
// }) // Error!

// placeToString({
//   city: "Melbourne",
//   suburb: 0,
//   lat: 145.345,
//   lng: -45.345,
// }) // Error!

// ## Eg. Optional

type PlaceWithOptionalSuburb = {
  city: string,
  suburb?: string,
  lat: number,
  lng: number,
}

function placeToString2(place: PlaceWithOptionalSuburb): string {
  if (!place.suburb) {
    return place.city + " (" + place.lat + "," + place.lng + ")"
  }
  return (
    place.city + ", " + place.suburb + " (" + place.lat + "," + place.lng + ")"
  )
}

placeToString2({
  city: "Melbourne",
  lat: 145.345,
  lng: -45.345,
})

// ## Eg. Maybe

type PlaceWithMaybeSuburb = {
  city: string,
  suburb: ?string,
  lat: number,
  lng: number,
}

function placeToString3(place: PlaceWithMaybeSuburb): string {
  if (!place.suburb) {
    return place.city + " (" + place.lat + "," + place.lng + ")"
  }
  return (
    place.city + ", " + place.suburb + " (" + place.lat + "," + place.lng + ")"
  )
}

placeToString3({
  city: "Melbourne",
  suburb: null,
  lat: 145.345,
  lng: -45.345,
})

// placeToString3({
//   city: "Melbourne",
//   lat: 145.345,
//   lng: -45.345,
// }) // Error!

// ## Eg. Strict

type PlaceStrictPlace = {|
  city: string,
  suburb: string,
  lat: number,
  lng: number,
|}

function placeToString4(place: PlaceStrictPlace): string {
  return (
    place.city + ", " + place.suburb + " (" + place.lat + "," + place.lng + ")"
  )
}

placeToString4({
  city: "Melbourne",
  suburb: "South Melbourne",
  lat: 145.345,
  lng: -45.345,
})

// placeToString4({
//   city: "Melbourne",
//   suburb: "South Melbourne",
//   lat: 145.345,
//   lng: -45.345,
//   somethingElse: 1,
// }) // Error

// ###########################################################
// #######  Union Types
// ###########################################################

type ComplexTokens = {|
  type: "QuotedWordsIncomplete" | "QuotedWords" | "Word",
  value: string,
|}

type SimpleTokens = {|
  type: "Space" | "Colon",
|}

type Token = ComplexTokens | SimpleTokens

const myTokens: Array<Token> = [
  {
    type: "Word",
    value: "Hello",
  },
  {
    type: "Space",
  },
  {
    type: "Word",
    value: "World",
  },
]

function countSimpleTokens(tokens: Array<Token>) {
  // return tokens.filter(token => token instanceof SimpleTokens).length
}

function countSimpleTokens2(tokens: Array<Token>) {
  return tokens.filter(token => token.type === "Space").length
}

countSimpleTokens(myTokens)
countSimpleTokens2(myTokens)

// ###########################################################
// #######  Intersection Types
// ###########################################################

type Event = {
  currentTarget: HTMLElement,
  target: HTMLElement,
}

type InputEvent = Event & { currentTarget: HTMLInputElement }

type TextAreaEvent = Event & { currentTarget: HTMLTextAreaElement }

const handleEvent = (event: InputEvent) => {
  event.currentTarget // HTMLInputElement
}

// ###########################################################
// #######  Arrays
// ###########################################################

const ages: Array<number> = [1, 2, 3, 4]

// Same as Array<string>
const names: string[] = ["Glenn", "Glen"]

// ###########################################################
// #######  Other Things
// ###########################################################

// Eg. React

const app = require("./App")

// Eg. Mixed / Any

let thing: any = undefined
thing = 1
thing = { hello: "world" }
// thing++

let otherThing: mixed = undefined
otherThing = 1
otherThing = { hello: "world" }
// otherThing++

// ## Eg. Tuples

type Date = [number, number, number]

let theDate: Date = [2017, 9, 21]

let [y, m, d] = theDate
let [justYear] = theDate
let [, , justDay] = theDate

// let [, , , outsideTuple] = theDate // Error!

// ## Eg. Generics

class Item<T> {
  prop: T

  constructor(param: T) {
    this.prop = param
  }

  method(): T {
    return this.prop
  }
}

function createItem(): Item<string> {
  return new Item("hello")
}

function createItem(): Item<number> {
  return new Item(2)
}

// function createItem(): Item<string> {
//   return new Item(2)
// }

// ## Eg. Classes / Interfaces

// TODO

// ## Eg. Others...

type Person = {|
  height: number,
|}

const me: Person = JSON.parse("{}")

const them_unsafe = JSON.parse("{}")

const them: Person = {
  height: them_unsafe.height || 0,
}

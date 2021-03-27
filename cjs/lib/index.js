const Helper = require('@darkwolf/helper.cjs')

class Text {
  constructor(text) {
    this.setValue(text)
  }

  get length() {
    return this.value.length
  }

  get isEmpty() {
    return !this.length
  }

  get isASCII() {
    return Helper.isASCII(this.value)
  }

  get [Symbol.toStringTag]() {
    return 'Text'
  }

  setValue(value) {
    this.value = Helper.toString(value)
    return this
  }

  add(text) {
    this.value += Helper.toString(text)
    return this
  }

  newLine() {
    this.value += '\n'
    return this
  }

  toLowerCase() {
    this.value = this.value.toLowerCase()
    return this
  }

  toUpperCase() {
    this.value = this.value.toUpperCase()
    return this
  }

  capitalize() {
    this.value = Helper.capitalize(this.value)
    return this
  }

  lowerCase() {
    this.value = Helper.lowerCase(this.value)
    return this
  }

  upperCase() {
    this.value = Helper.upperCase(this.value)
    return this
  }

  camelCase() {
    this.value = Helper.camelCase(this.value)
    return this
  }

  pascalCase() {
    this.value = Helper.pascalCase(this.value)
    return this
  }

  snakeCase() {
    this.value = Helper.snakeCase(this.value)
    return this
  }

  constantCase() {
    this.value = Helper.constantCase(this.value)
    return this
  }

  kebabCase() {
    this.value = Helper.kebabCase(this.value)
    return this
  }

  trainCase() {
    this.value = Helper.trainCase(this.value)
    return this
  }

  dotCase() {
    this.value = Helper.dotCase(this.value)
    return this
  }

  template(props, options) {
    this.value = Helper.template(this.value, props, options)
    return this
  }

  insert(insertString, startIndex, endIndex) {
    this.value = Helper.insert(this.value, insertString, startIndex, endIndex)
    return this
  }

  padStart(targetLength, padString) {
    this.value = this.value.padStart(targetLength, padString)
    return this
  }

  padEnd(targetLength, padString) {
    this.value = this.value.padEnd(targetLength, padString)
    return this
  }

  repeat(count) {
    this.value = this.value.repeat(count)
    return this
  }

  replace(pattern, replacer) {
    this.value = this.value.replace(pattern, replacer)
    return this
  }

  replaceAll(pattern, replacer) {
    this.value = this.value.replaceAll(pattern, replacer)
    return this
  }

  slice(startIndex, endIndex) {
    this.value = this.value.slice(startIndex, endIndex)
    return this
  }

  substring(startIndex, beforeIndex) {
    this.value = this.value.substring(startIndex, beforeIndex)
    return this
  }

  trim() {
    this.value = this.value.trim()
    return this
  }

  clear() {
    this.value = ''
    return this
  }

  asciiWords() {
    return Helper.asciiWords(this.value)
  }

  unicodeWords() {
    return Helper.unicodeWords(this.value)
  }

  words(pattern) {
    return Helper.words(this.value, pattern)
  }

  indexOf(searchValue, fromIndex) {
    return this.value.indexOf(searchValue, fromIndex)
  }

  lastIndexOf(searchValue, fromIndex) {
    return this.value.lastIndexOf(searchValue, fromIndex)
  }

  match(pattern) {
    return this.value.match(pattern)
  }

  matchAll(pattern) {
    return this.value.matchAll(pattern)
  }

  search(pattern) {
    return this.value.search(pattern)
  }

  split(separator, limit) {
    return this.value.split(separator, limit)
  }

  startsWith(searchValue, position) {
    return this.value.startsWith(searchValue, position)
  }

  endsWith(searchValue, length) {
    return this.value.endsWith(searchValue, length)
  }

  includes(searchValue, fromIndex) {
    return this.value.includes(searchValue, fromIndex)
  }

  valueOf() {
    return this.value
  }

  toString() {
    return this.value
  }

  toJSON() {
    return this.value
  }

  clone() {
    return new Text(this.value)
  }

  [Symbol.toPrimitive](hint) {
    return hint === 'string' ? this.toString() : this.valueOf()
  }
}
Text.value = ''
Text.length = 0
Text.asciiWords = Helper.asciiWords
Text.unicodeWords = Helper.unicodeWords
Text.words = Helper.words
Text.toLowerCase = Helper.toLowerCase
Text.toUpperCase = Helper.toUpperCase
Text.capitalize = Helper.capitalize
Text.lowerCase = Helper.lowerCase
Text.upperCase = Helper.upperCase
Text.camelCase = Helper.camelCase
Text.pascalCase = Helper.pascalCase
Text.snakeCase = Helper.snakeCase
Text.constantCase = Helper.constantCase
Text.kebabCase = Helper.kebabCase
Text.trainCase = Helper.trainCase
Text.dotCase = Helper.dotCase
Text.template = Helper.template
Text.insert = Helper.insert
Text.padStart = Helper.padStart
Text.padEnd = Helper.padEnd
Text.repeat = Helper.repeat
Text.replace = Helper.replace
Text.replaceAll = Helper.replaceAll
Text.slice = Helper.slice
Text.substring = Helper.substring
Text.trim = Helper.trim
Text.indexOf = Helper.indexOf
Text.lastIndexOf = Helper.lastIndexOf
Text.match = Helper.match
Text.matchAll = Helper.matchAll
Text.search = Helper.search
Text.split = Helper.split
Text.startsWith = Helper.startsWith
Text.endsWith = Helper.endsWith
Text.includes = Helper.includes
Text.isEmpty = Helper.isEmpty
Text.isASCII = Helper.isASCII
Text.from = text => new Text(text)

module.exports = Text

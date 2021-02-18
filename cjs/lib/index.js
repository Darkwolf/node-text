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
    return this.add('\n')
  }

  capitalize() {
    return this.setValue(Helper.capitalize(this.value))
  }

  lowerCase() {
    return this.setValue(this.value.toLowerCase())
  }

  upperCase() {
    return this.setValue(this.value.toUpperCase())
  }

  camelCase() {
    return this.setValue(Helper.camelCase(this.value))
  }

  pascalCase() {
    return this.setValue(Helper.pascalCase(this.value))
  }

  snakeCase() {
    return this.setValue(Helper.snakeCase(this.value))
  }

  constantCase() {
    return this.setValue(Helper.constantCase(this.value))
  }

  kebabCase() {
    return this.setValue(Helper.kebabCase(this.value))
  }

  trainCase() {
    return this.setValue(Helper.trainCase(this.value))
  }

  dotCase() {
    return this.setValue(Helper.dotCase(this.value))
  }

  insert(props, options) {
    return this.setValue(Helper.template(this.value, props, options))
  }

  padStart(targetLength, padString) {
    return this.setValue(this.value.padStart(targetLength, padString))
  }

  padEnd(targetLength, padString) {
    return this.setValue(this.value.padEnd(targetLength, padString))
  }

  repeat(count) {
    return this.setValue(this.value.repeat(count))
  }

  replace(regex, replacer) {
    return this.setValue(this.value.replace(regex, replacer))
  }

  replaceAll(regex, replacer) {
    return this.setValue(this.value.replaceAll(regex, replacer))
  }

  slice(startIndex, endIndex) {
    return this.setValue(this.value.slice(startIndex, endIndex))
  }

  substring(startIndex, beforeIndex) {
    return this.setValue(this.value.substring(startIndex, beforeIndex))
  }

  trim() {
    return this.setValue(this.value.trim())
  }

  clear() {
    return this.setValue()
  }

  words() {
    return Helper.words(this.value)
  }

  template(props, options) {
    return Helper.template(this.value, props, options)
  }

  indexOf(searchValue, fromIndex) {
    return this.value.indexOf(searchValue, fromIndex)
  }

  lastIndexOf(searchValue, fromIndex) {
    return this.value.lastIndexOf(searchValue, fromIndex)
  }

  match(regex) {
    return this.value.match(regex)
  }

  matchAll(regex) {
    return this.value.matchAll(regex)
  }

  search(regex) {
    return this.value.search(regex)
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

  toString() {
    return this.value
  }

  valueOf() {
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
Text.words = Helper.words
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
Text.valueOf = text => text instanceof Text ? text.value : text
Text.capitalize = text => Helper.capitalize(Text.valueOf(text))
Text.lowerCase = text => Helper.lowerCase(Text.valueOf(text))
Text.upperCase = text => Helper.upperCase(Text.valueOf(text))
Text.camelCase = text => Helper.camelCase(Text.valueOf(text))
Text.pascalCase = text => Helper.pascalCase(Text.valueOf(text))
Text.snakeCase = text => Helper.snakeCase(Text.valueOf(text))
Text.constantCase = text => Helper.constantCase(Text.valueOf(text))
Text.kebabCase = text => Helper.kebabCase(Text.valueOf(text))
Text.trainCase = text => Helper.trainCase(Text.valueOf(text))
Text.dotCase = text => Helper.dotCase(Text.valueOf(text))
Text.template = (text, props, options) => Helper.template(Text.valueOf(text), props, options)
Text.padStart = (text, targetLength, padString) => Helper.padStart(Text.valueOf(text), targetLength, padString)
Text.padEnd = (text, targetLength, padString) => Helper.padEnd(Text.valueOf(text), targetLength, padString)
Text.repeat = (text, count) => Helper.repeat(Text.valueOf(text), count)
Text.replace = (text, regex, replacer) => Helper.replace(Text.valueOf(text), regex, replacer)
Text.replaceAll = (text, regex, replacer) => Helper.replaceAll(Text.valueOf(text), regex, replacer)
Text.slice = (text, startIndex, endIndex) => Helper.slice(Text.valueOf(text), startIndex, endIndex)
Text.substring = (text, startIndex, beforeIndex) => Helper.substring(Text.valueOf(text), startIndex, beforeIndex)
Text.trim = text => Helper.trim(Text.valueOf(text))
Text.from = text => new Text(text)

module.exports = Text

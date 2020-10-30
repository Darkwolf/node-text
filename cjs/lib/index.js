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

  get isJSON() {
    return Helper.isJSON(this.value)
  }

  get isASCII() {
    return Helper.isASCII(this.value)
  }

  get isBase64() {
    return Helper.isBase64(this.value)
  }

  get isIPv4() {
    return Helper.isIPv4(this.value)
  }

  get isIPv6() {
    return Helper.isIPv6(this.value)
  }

  get isURL() {
    return Helper.isURL(this.value)
  }

  get isUUID() {
    return Helper.isUUID(this.value)
  }

  get [Symbol.toStringTag]() {
    return 'Text'
  }

  setValue(value) {
    this.value = Helper.string(value)
    return this
  }

  add(text) {
    this.value += Helper.string(text)
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

  clone() {
    return new Text(this.value)
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

  [Symbol.toPrimitive](hint) {
    return hint === 'string' ? this.toString() : this.valueOf()
  }
}
Text.value = ''
Text.length = 0
Text.words = Helper.words
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
Text.isJSON = Helper.isJSON
Text.isASCII = Helper.isASCII
Text.isBase64 = Helper.isBase64
Text.isIPv4 = Helper.isIPv4
Text.isIPv6 = Helper.isIPv6
Text.isURL = Helper.isURL
Text.isUUID = Helper.isUUID
Text.from = text => new Text(text)

module.exports = Text

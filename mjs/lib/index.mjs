import Helper from '@darkwolf/helper.mjs'

export default class Text {
  static value = ''
  static length = 0
  static words = Helper.words
  static capitalize = Helper.capitalize
  static lowerCase = Helper.lowerCase
  static upperCase = Helper.upperCase
  static camelCase = Helper.camelCase
  static pascalCase = Helper.pascalCase
  static snakeCase = Helper.snakeCase
  static constantCase = Helper.constantCase
  static kebabCase = Helper.kebabCase
  static trainCase = Helper.trainCase
  static dotCase = Helper.dotCase
  static template = Helper.template
  static padStart = Helper.padStart
  static padEnd = Helper.padEnd
  static repeat = Helper.repeat
  static replace = Helper.replace
  static replaceAll = Helper.replaceAll
  static slice = Helper.slice
  static substring = Helper.substring
  static trim = Helper.trim
  static indexOf = Helper.indexOf
  static lastIndexOf = Helper.lastIndexOf
  static match = Helper.match
  static matchAll = Helper.matchAll
  static search = Helper.search
  static split = Helper.split
  static startsWith = Helper.startsWith
  static endsWith = Helper.endsWith
  static includes = Helper.includes
  static isEmpty = Helper.isEmpty
  static isJSON = Helper.isJSON
  static isASCII = Helper.isASCII
  static isBase64 = Helper.isBase64
  static isIPv4 = Helper.isIPv4
  static isIPv6 = Helper.isIPv6
  static isURL = Helper.isURL
  static isUUID = Helper.isUUID

  static from(text) {
    return new Text(text)
  }

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

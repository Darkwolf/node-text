import Helper from '@darkwolf/helper.mjs'

export default class Text {
  static value = ''
  static length = 0
  static words = Helper.words
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
  static isASCII = Helper.isASCII

  static valueOf(text) {
    return text instanceof Text ? text.value : text
  }

  static capitalize(text) {
    return Helper.capitalize(Text.valueOf(text))
  }

  static lowerCase(text) {
    return Helper.lowerCase(Text.valueOf(text))
  }

  static upperCase(text) {
    return Helper.upperCase(Text.valueOf(text))
  }

  static camelCase(text) {
    return Helper.camelCase(Text.valueOf(text))
  }

  static pascalCase(text) {
    return Helper.pascalCase(Text.valueOf(text))
  }

  static snakeCase(text) {
    return Helper.snakeCase(Text.valueOf(text))
  }

  static constantCase(text) {
    return Helper.constantCase(Text.valueOf(text))
  }

  static kebabCase(text) {
    return Helper.kebabCase(Text.valueOf(text))
  }

  static trainCase(text) {
    return Helper.trainCase(Text.valueOf(text))
  }

  static dotCase(text) {
    return Helper.dotCase(Text.valueOf(text))
  }

  static template(text, props, options) {
    return Helper.template(Text.valueOf(text), props, options)
  }

  static padStart(text, targetLength, padString) {
    return Helper.padStart(Text.valueOf(text), targetLength, padString)
  }

  static padEnd(text, targetLength, padString) {
    return Helper.padEnd(Text.valueOf(text), targetLength, padString)
  }

  static repeat(text, count) {
    return Helper.repeat(Text.valueOf(text), count)
  }

  static replace(text, regex, replacer) {
    return Helper.replace(Text.valueOf(text), regex, replacer)
  }

  static replaceAll(text, regex, replacer) {
    return Helper.replaceAll(Text.valueOf(text), regex, replacer)
  }

  static slice(text, startIndex, endIndex) {
    return Helper.slice(Text.valueOf(text), startIndex, endIndex)
  }

  static substring(text, startIndex, beforeIndex) {
    return Helper.substring(Text.valueOf(text), startIndex, beforeIndex)
  }

  static trim(text) {
    return Helper.trim(Text.valueOf(text))
  }

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

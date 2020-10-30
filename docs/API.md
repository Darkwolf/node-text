[boolean]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type
[number]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type
[string]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type
[Object]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object
[Function]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function
[Array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
[RegExp]: https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/RegExp
[Symbol.iterator]: https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Symbol/iterator

# API
### class: Text
#### `static` Text.value
* returns: <[string][string]> Defaults to `''`.

#### `static` Text.length
* returns: <[number][number]> Defaults to `0`.

#### `static` Text.words(string)
* `string` <[string][string]>
* returns: <[Array][Array]<[string][string]>>

#### `static` Text.capitalize(string)
* `string` <[string][string]> E.g., `'Ave, Darkwolf!'` will return `'Ave, darkwolf!'`.
* returns: <[string][string]>

#### `static` Text.lowerCase(string)
* `string` <[string][string]> E.g., `'Ave, Darkwolf!'` will return `'ave, darkwolf!'`.
* returns: <[string][string]>

#### `static` Text.upperCase(string)
* `string` <[string][string]> E.g., `'Ave, Darkwolf!'` will return `'AVE, DARKWOLF!'`.
* returns: <[string][string]>

#### `static` Text.camelCase(string)
* `string` <[string][string]> E.g., `'Ave, Darkwolf!'` will return `'aveDarkwolf'`.
* returns: <[string][string]>

#### `static` Text.pascalCase(string)
* `string` <[string][string]> E.g., `'Ave, Darkwolf!'` will return `'AveDarkwolf'`.
* returns: <[string][string]>

#### `static` Text.snakeCase(string)
* `string` <[string][string]> E.g., `'Ave, Darkwolf!'` will return `'ave_darkwolf'`.
* returns: <[string][string]>

#### `static` Text.constantCase(string)
* `string` <[string][string]> E.g., `'Ave, Darkwolf!'` will return `'AVE_DARKWOLF'`.
* returns: <[string][string]>

#### `static` Text.kebabCase(string)
* `string` <[string][string]> E.g., `'Ave, Darkwolf!'` will return `'ave-darkwolf'`.
* returns: <[string][string]>

#### `static` Text.trainCase(string)
* `string` <[string][string]> E.g., `'Ave, Darkwolf!'` will return `'Ave-Darkwolf'`.
* returns: <[string][string]>

#### `static` Text.dotCase(string)
* `string` <[string][string]> E.g., `'Ave, Darkwolf!'` will return `'ave.darkwolf'`.
* returns: <[string][string]>

#### `static` Text.template(string, props[, options])
* `string` <[string][string]> Property path must have format: `'{object.property.name.array[0]}'` or `'array[-1]'`. Path with index `'[-1]'` will return the last argument of the array, then `'[-2]'` will return the second last argument. If the negative modulo index is greater than the length of the array, the first argument will be returned.
* `props` <[Object][Object]>
* `options` <[Object][Object]>
  * `normalize` <?[boolean][boolean]> If `true` and property is `undefined` or `null` will be replaced with `''`. Defaults to `true`.
* returns: <[string][string]>

#### `static` Text.padStart(string, targetLength[, padString])
* `string` <[string][string]>
* `targetLength` <[number][number]>
* `padString` <[string][string]>
* returns: <[string][string]>

#### `static` Text.padEnd(string, targetLength[, padString])
* `string` <[string][string]>
* `targetLength` <[number][number]>
* `padString` <[string][string]>
* returns: <[string][string]>

#### `static` Text.repeat(string, count)
* `string` <[string][string]>
* `count` <[number][number]>
* returns: <[string][string]>

#### `static` Text.replace(string, regex, replacer)
* `string` <[string][string]>
* `regex` <[RegExp][RegExp] | [string][string]>
* `replacer` <[string][string] | [Function][Function](<[string][string]>, ...<[string][string]>, <[number][number]>, <[string][string]>)>
  * `match` <[string][string]>
  * `...groups` <[string][string]>
  * `offset` <[number][number]>
  * `string` <[string][string]>
* returns: <[string][string]>

#### `static` Text.replaceAll(string, regex, replacer)
* `string` <[string][string]>
* `regex` <[RegExp][RegExp] | [string][string]>
* `replacer` <[string][string] | [Function][Function](<[string][string]>, ...<[string][string]>, <[number][number]>, <[string][string]>)>
  * `match` <[string][string]>
  * `...groups` <[string][string]>
  * `offset` <[number][number]>
  * `string` <[string][string]>
* returns: <[string][string]>

#### `static` Text.slice(string, startIndex[, endIndex])
* `string` <[string][string]>
* `startIndex` <[number][number]>
* `endIndex` <[number][number]>
* returns: <[string][string]>

#### `static` Text.substring(string, startIndex[, beforeIndex])
* `string` <[string][string]>
* `startIndex` <[number][number]>
* `beforeIndex` <[number][number]>
* returns: <[string][string]>

#### `static` Text.trim(string)
* `string` <[string][string]>
* returns: <[string][string]>

#### `static` Text.indexOf(string, searchValue[, fromIndex])
* `string` <[string][string]>
* `searchValue` <[any][Object]>
* `fromIndex` <[number][number]>
* returns: <[number][number]>

#### `static` Text.lastIndexOf(string, searchValue[, fromIndex])
* `string` <[string][string]>
* `searchValue` <[any][Object]>
* `fromIndex` <[number][number]>
* returns: <[number][number]>

#### `static` Text.match(string, regex)
* `string` <[string][string]>
* `regex` <[RegExp][RegExp] | [string][string]>
* returns: <?[Array][Array]<[string][string]>>

#### `static` Text.matchAll(string, regex)
* `string` <[string][string]>
* `regex` <[RegExp][RegExp] | [string][string]>
* returns: <[Symbol.iterator][Symbol.iterator]<[Array][Array]<[string][string]>>>

#### `static` Text.search(string[, regex])
* `string` <[string][string]>
* `regex` <[RegExp][RegExp] | [string][string]>
* returns: <[number][number]>

#### `static` Text.split(string[, separator[, limit]])
* `string` <[string][string]>
* `separator` <[RegExp][RegExp] | [string][string]>
* `limit` <[number][number]>
* returns: <[Array][Array]<[string][string]>>

#### `static` Text.startsWith(string, searchValue[, position])
* `string` <[string][string]>
* `searchValue` <[any][Object]>
* `position` <[number][number]>
* returns: <[boolean][boolean]>

#### `static` Text.endsWith(string, searchValue[, length])
* `string` <[string][string]>
* `searchValue` <[any][Object]>
* `length` <[number][number]>
* returns: <[boolean][boolean]>

#### `static` Text.includes(string, searchValue[, fromIndex])
* `string` <[string][string] | [Array][Array]>
* `searchValue` <[any][Object]>
* `fromIndex` <[number][number]>
* returns: <[boolean][boolean]>

#### `static` Text.isEmpty(value)
* `value` <[any][Object]>
* returns: <[boolean][boolean]>

#### `static` Text.isJSON(value)
* `value` <[any][Object]>
* returns: <[boolean][boolean]>

#### `static` Text.isASCII(value)
* `value` <[any][Object]>
* returns: <[boolean][boolean]>

#### `static` Text.isBase64(value)
* `value` <[any][Object]>
* returns: <[boolean][boolean]>

#### `static` Text.isIPv4(value)
* `value` <[any][Object]>
* returns: <[boolean][boolean]>

#### `static` Text.isIPv6(value)
* `value` <[any][Object]>
* returns: <[boolean][boolean]>

#### `static` Text.isURL(value)
* `value` <[any][Object]>
* returns: <[boolean][boolean]>

#### `static` Text.isUUID(value)
* `value` <[any][Object]>
* returns: <[boolean][boolean]>

#### `static` Text.from([text])
* `text` <[any][Object]> If `null` or `undefined` will return `''`. Defaults to `''`.
* returns: <[Text](#class-text)>

#### `init` new Text([text])
* `text` <[any][Object]> If `null` or `undefined` will return `''`. Defaults to `''`.
* returns: <[Text](#class-text)>

#### text.value
* returns: <[string][string]> Defaults to `''`.

#### `get` text.length
* returns: <[number][number]> Defaults to `0`.

#### `get` text.isEmpty
* returns: <[boolean][boolean]>

#### `get` text.isJSON
* returns: <[boolean][boolean]>

#### `get` text.isASCII
* returns: <[boolean][boolean]>

#### `get` text.isBase64
* returns: <[boolean][boolean]>

#### `get` text.isIPv4
* returns: <[boolean][boolean]>

#### `get` text.isIPv6
* returns: <[boolean][boolean]>

#### `get` text.isURL
* returns: <[boolean][boolean]>

#### `get` text.isUUID
* returns: <[boolean][boolean]>

#### text.setValue(value)
* `value` <[any][Object]> If `null` or `undefined` will return `''`.
* returns: <[this](#class-text)>

#### text.add(text)
* `text` <[any][Object]> If `null` or `undefined` will return `''`. Defaults to `''`.
* returns: <[this](#class-text)>

#### text.newLine()
* returns: <[this](#class-text)>

#### text.capitalize()
* returns: <[this](#class-text)>

#### text.lowerCase()
* returns: <[this](#class-text)>

#### text.upperCase()
* returns: <[this](#class-text)>

#### text.camelCase()
* returns: <[this](#class-text)>

#### text.pascalCase()
* returns: <[this](#class-text)>

#### text.snakeCase()
* returns: <[this](#class-text)>

#### text.constantCase()
* returns: <[this](#class-text)>

#### text.kebabCase()
* returns: <[this](#class-text)>

#### text.trainCase()
* returns: <[this](#class-text)>

#### text.dotCase()
* returns: <[this](#class-text)>

#### text.insert(props[, options])
* `props` <[Object][Object]>
* `options` <[Object][Object]>
  * `normalize` <?[boolean][boolean]> If `true` and property is `undefined` or `null` will be replaced with `''`. Defaults to `true`.
* returns: <[this](#class-text)>

#### text.padStart(targetLength[, padString])
* `targetLength` <[number][number]>
* `padString` <[string][string]>
* returns: <[this](#class-text)>

#### text.padEnd(targetLength[, padString])
* `targetLength` <[number][number]>
* `padString` <[string][string]>
* returns: <[this](#class-text)>

#### text.repeat(count)
* `count` <[number][number]>
* returns: <[this](#class-text)>

#### text.replace(regex, replacer)
`regex` <[RegExp][RegExp] | [string][string]>
* `replacer` <[string][string] | [Function][Function](<[string][string]>, ...<[string][string]>, <[number][number]>, <[string][string]>)>
 * `match` <[string][string]>
 * `...groups` <[string][string]>
 * `offset` <[number][number]>
 * `string` <[string][string]>
* returns: <[this](#class-text)>

#### text.replaceAll(regex, replacer)
* `regex` <[RegExp][RegExp] | [string][string]>
* `replacer` <[string][string] | [Function][Function](<[string][string]>, ...<[string][string]>, <[number][number]>, <[string][string]>)>
  * `match` <[string][string]>
  * `...groups` <[string][string]>
  * `offset` <[number][number]>
  * `string` <[string][string]>
* returns: <[this](#class-text)>

#### text.slice(startIndex[, endIndex])
* `startIndex` <[number][number]>
* `endIndex` <[number][number]>
* returns: <[this](#class-text)>

#### text.substring(startIndex[, beforeIndex])
* `startIndex` <[number][number]>
* `beforeIndex` <[number][number]>
* returns: <[this](#class-text)>

#### text.trim()
* returns: <[this](#class-text)>

#### text.clear()
* returns: <[this](#class-text)>

#### text.clone()
* returns: <[Text](#class-text)>

#### text.words()
* returns: <[Array][Array]<[string][string]>>

#### text.template(props[, options])
* `props` <[Object][Object]>
* `options` <[Object][Object]>
  * `normalize` <?[boolean][boolean]> If `true` and property is `undefined` or `null` will be replaced with `''`. Defaults to `true`.
* returns: <[string][string]>

#### text.indexOf(searchValue[, fromIndex])
* `searchValue` <[any][Object]>
* `fromIndex` <[number][number]>
* returns: <[number][number]>

#### text.lastIndexOf(searchValue[, fromIndex])
* `searchValue` <[any][Object]>
* `fromIndex` <[number][number]>
* returns: <[number][number]>

#### text.match(regex)
* `regex` <[RegExp][RegExp] | [string][string]>
* returns: <?[Array][Array]<[string][string]>>

#### text.matchAll(regex)
* `regex` <[RegExp][RegExp] | [string][string]>
* returns: <[Symbol.iterator][Symbol.iterator]<[Array][Array]<[string][string]>>>

#### text.search([regex])
* `regex` <[RegExp][RegExp] | [string][string]>
* returns: <[number][number]>

#### text.split([separator[, limit]])
* `separator` <[RegExp][RegExp] | [string][string]>
* `limit` <[number][number]>
* returns: <[Array][Array]<[string][string]>>

#### text.startsWith(searchValue[, position])
* `searchValue` <[any][Object]>
* `position` <[number][number]>
* returns: <[boolean][boolean]>

#### text.endsWith(searchValue[, length])
* `searchValue` <[any][Object]>
* `length` <[number][number]>
* returns: <[boolean][boolean]>

#### text.includes(searchValue[, fromIndex])
* `searchValue` <[any][Object]>
* `fromIndex` <[number][number]>
* returns: <[boolean][boolean]>

#### text.toString()
* returns: <[string][string]>

#### text.valueOf()
* returns: <[string][string]>

#### text.toJSON()
* returns: <[string][string]>

#### text\[Symbol.toPrimitive](hint)
* `hint` <[string][string]> Must be `'string'`, `'number'` or `'default'`.
* returns: <[string][string]>

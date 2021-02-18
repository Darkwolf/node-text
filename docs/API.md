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

#### `static` Text.valueOf(text)
* `text` <[string][string] | [Text](#class-text)>
* returns: <[string][string]>

#### `static` Text.words(text)
* `text` <[string][string] | [Text](#class-text)>
* returns: <[Array][Array]<[string][string]>>

#### `static` Text.capitalize(text)
* `text` <[string][string] | [Text](#class-text)> E.g., `'Ave, Darkwolf!'` will return `'Ave, darkwolf!'`.
* returns: <[string][string]>

#### `static` Text.lowerCase(text)
* `text` <[string][string] | [Text](#class-text)> E.g., `'Ave, Darkwolf!'` will return `'ave, darkwolf!'`.
* returns: <[string][string]>

#### `static` Text.upperCase(text)
* `text` <[string][string] | [Text](#class-text)> E.g., `'Ave, Darkwolf!'` will return `'AVE, DARKWOLF!'`.
* returns: <[string][string]>

#### `static` Text.camelCase(text)
* `text` <[string][string] | [Text](#class-text)> E.g., `'Ave, Darkwolf!'` will return `'aveDarkwolf'`.
* returns: <[string][string]>

#### `static` Text.pascalCase(text)
* `text` <[string][string] | [Text](#class-text)> E.g., `'Ave, Darkwolf!'` will return `'AveDarkwolf'`.
* returns: <[string][string]>

#### `static` Text.snakeCase(text)
* `text` <[string][string] | [Text](#class-text)> E.g., `'Ave, Darkwolf!'` will return `'ave_darkwolf'`.
* returns: <[string][string]>

#### `static` Text.constantCase(text)
* `text` <[string][string] | [Text](#class-text)> E.g., `'Ave, Darkwolf!'` will return `'AVE_DARKWOLF'`.
* returns: <[string][string]>

#### `static` Text.kebabCase(text)
* `text` <[string][string] | [Text](#class-text)> E.g., `'Ave, Darkwolf!'` will return `'ave-darkwolf'`.
* returns: <[string][string]>

#### `static` Text.trainCase(text)
* `text` <[string][string] | [Text](#class-text)> E.g., `'Ave, Darkwolf!'` will return `'Ave-Darkwolf'`.
* returns: <[string][string]>

#### `static` Text.dotCase(text)
* `text` <[string][string] | [Text](#class-text)> E.g., `'Ave, Darkwolf!'` will return `'ave.darkwolf'`.
* returns: <[string][string]>

#### `static` Text.template(text, props[, options])
* `text` <[string][string] | [Text](#class-text)> Property path must have format: `'{object.property.name.array[0]}'` or `'array[-1]'`. Path with index `'[-1]'` will return the last argument of the array, then `'[-2]'` will return the second last argument. If the negative modulo index is greater than the length of the array, the first argument will be returned.
* `props` <[Object][Object]>
* `options` <[Object][Object]>
  * `normalize` <?[boolean][boolean]> If `true` and property is `undefined` or `null` will be replaced with `''`. Defaults to `true`.
* returns: <[string][string]>

#### `static` Text.padStart(text, targetLength[, padString])
* `text` <[string][string] | [Text](#class-text)>
* `targetLength` <[number][number]>
* `padString` <[string][string]>
* returns: <[string][string]>

#### `static` Text.padEnd(text, targetLength[, padString])
* `text` <[string][string] | [Text](#class-text)>
* `targetLength` <[number][number]>
* `padString` <[string][string]>
* returns: <[string][string]>

#### `static` Text.repeat(text, count)
* `text` <[string][string] | [Text](#class-text)>
* `count` <[number][number]>
* returns: <[string][string]>

#### `static` Text.replace(text, regex, replacer)
* `text` <[string][string] | [Text](#class-text)>
* `regex` <[RegExp][RegExp] | [string][string]>
* `replacer` <[string][string] | [Function][Function](<[string][string]>, ...<[string][string]>, <[number][number]>, <[string][string]>)>
  * `match` <[string][string]>
  * `...groups` <[string][string]>
  * `offset` <[number][number]>
  * `string` <[string][string]>
* returns: <[string][string]>

#### `static` Text.replaceAll(text, regex, replacer)
* `text` <[string][string] | [Text](#class-text)>
* `regex` <[RegExp][RegExp] | [string][string]>
* `replacer` <[string][string] | [Function][Function](<[string][string]>, ...<[string][string]>, <[number][number]>, <[string][string]>)>
  * `match` <[string][string]>
  * `...groups` <[string][string]>
  * `offset` <[number][number]>
  * `string` <[string][string]>
* returns: <[string][string]>

#### `static` Text.slice(text, startIndex[, endIndex])
* `text` <[string][string] | [Text](#class-text)>
* `startIndex` <[number][number]>
* `endIndex` <[number][number]>
* returns: <[string][string]>

#### `static` Text.substring(text, startIndex[, beforeIndex])
* `text` <[string][string] | [Text](#class-text)>
* `startIndex` <[number][number]>
* `beforeIndex` <[number][number]>
* returns: <[string][string]>

#### `static` Text.trim(text)
* `text` <[string][string] | [Text](#class-text)>
* returns: <[string][string]>

#### `static` Text.indexOf(text, searchValue[, fromIndex])
* `text` <[string][string] | [Text](#class-text)>
* `searchValue` <[any][Object]>
* `fromIndex` <[number][number]>
* returns: <[number][number]>

#### `static` Text.lastIndexOf(text, searchValue[, fromIndex])
* `text` <[string][string] | [Text](#class-text)>
* `searchValue` <[any][Object]>
* `fromIndex` <[number][number]>
* returns: <[number][number]>

#### `static` Text.match(text, regex)
* `text` <[string][string] | [Text](#class-text)>
* `regex` <[RegExp][RegExp] | [string][string]>
* returns: <?[Array][Array]<[string][string]>>

#### `static` Text.matchAll(text, regex)
* `text` <[string][string] | [Text](#class-text)>
* `regex` <[RegExp][RegExp] | [string][string]>
* returns: <[Symbol.iterator][Symbol.iterator]<[Array][Array]<[string][string]>>>

#### `static` Text.search(text[, regex])
* `text` <[string][string] | [Text](#class-text)>
* `regex` <[RegExp][RegExp] | [string][string]>
* returns: <[number][number]>

#### `static` Text.split(text[, separator[, limit]])
* `text` <[string][string] | [Text](#class-text)>
* `separator` <[RegExp][RegExp] | [string][string]>
* `limit` <[number][number]>
* returns: <[Array][Array]<[string][string]>>

#### `static` Text.startsWith(text, searchValue[, position])
* `text` <[string][string] | [Text](#class-text)>
* `searchValue` <[any][Object]>
* `position` <[number][number]>
* returns: <[boolean][boolean]>

#### `static` Text.endsWith(text, searchValue[, length])
* `text` <[string][string] | [Text](#class-text)>
* `searchValue` <[any][Object]>
* `length` <[number][number]>
* returns: <[boolean][boolean]>

#### `static` Text.includes(text, searchValue[, fromIndex])
* `text` <[string][string] | [Text](#class-text)>
* `searchValue` <[any][Object]>
* `fromIndex` <[number][number]>
* returns: <[boolean][boolean]>

#### `static` Text.isEmpty(value)
* `value` <[any][Object]>
* returns: <[boolean][boolean]>

#### `static` Text.isASCII(value)
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

#### `get` text.isASCII
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

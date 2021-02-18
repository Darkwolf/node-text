# Text
## Install
#### ECMAScript (Node.js v12.x LTS or higher)
`npm i --save @darkwolf/text.mjs`
#### CommonJS (Node.js v10.x LTS or higher)
`npm i --save @darkwolf/text.cjs`
## Using
```javascript
// ECMAScript
import Text from '@darkwolf/text.mjs'
// CommonJS
const Text = require('@darkwolf/text.cjs')

const text = new Text('Ave, @{username}!')
text.template({username: 'PavelWolfDark'}) // => 'Ave, @PavelWolfDark!'
text.insert({username: 'PavelWolfDark'}).value // => 'Ave, @PavelWolfDark!'
const other = text
  .clone()
  .newLine()
  .add('WFC: {wallet.wfc}')
  .insert({
    wallet: {
      wfc: '1.00000001'
    }
  })
text.value // => 'Ave, @PavelWolfDark!'
other.value // => 'Ave, @PavelWolfDark!\nWFC: 1.00000001'
const template = `${new Text('Ave, Darkwolf!').newLine()}${other}` // => 'Ave, Darkwolf!\nAve, @PavelWolfDark!\nWFC: 1.00000001'
```
## [API Documentation](https://github.com/Darkwolf/node-text/blob/master/docs/API.md)
## Contact Me
#### GitHub: [@PavelWolfDark](https://github.com/PavelWolfDark)
#### Telegram: [@PavelWolfDark](https://t.me/PavelWolfDark)
#### Email: [PavelWolfDark@gmail.com](mailto:PavelWolfDark@gmail.com)

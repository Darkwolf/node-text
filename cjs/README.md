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

const text = new Text('Ave, Darkwolf!')
  .newLine()
  .add('Ave, @{username}!')
  .template({username: 'PavelWolfDark'})
  .newLine()
  .add('WFC: {wallet.balance}')
  .template({
    wallet: {
      balance: '1.00000001'
    }
  })
text.value // () => 'Ave, Darkwolf!\nAve, @PavelWolfDark!\nWFC: 1.00000001'
```
## [API Documentation](https://github.com/Darkwolf/node-text/blob/master/docs/API.md)
## Contact Me
#### GitHub: [@PavelWolfDark](https://github.com/PavelWolfDark)
#### Telegram: [@PavelWolfDark](https://t.me/PavelWolfDark)
#### Email: [PavelWolfDark@gmail.com](mailto:PavelWolfDark@gmail.com)

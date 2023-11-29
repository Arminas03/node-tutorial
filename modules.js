const names = require('./names')
//or: const {john, peter} = require('./names')
const sayHi =  require('./utils')
const data = require('./alternative-flavor')

require('./mind-grenade')

sayHi('susan')
sayHi(names.john)
sayHi(names.peter)

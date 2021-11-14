//ES module
import { sum } from './js/math'
//CommonJS導出
const { priceFormat } = require('./js/format')

import './js/element'

console.log(sum(10, 20))
console.log(priceFormat('123'))

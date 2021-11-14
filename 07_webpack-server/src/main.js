//ES module
import { sum } from 'js/math'
//CommonJS導出
const { priceFormat } = require('js/format')

import 'js/element'

if (module.hot) {
  module.hot.accept('js/element.js', () => {
    console.log('element 模塊發生更新了')
  })
}

console.log(sum(10, 20))
console.log(priceFormat('123'))

const message = 'Hello World'
const names = ['abc', 'cba', 'aaa']

names.forEach((item) => console.log(item))

//Vue
import { createApp } from 'vue'

// const app = createApp({
//   template: `<h2>我是Vue渲染出來的</h2>`,
//   data() {
//     return {
//       title: 'Hello world',
//       message: '哈哈哈',
//     }
//   },
// })

import App from './vue/App'
const app = createApp(App)

app.mount('#app')

console.log('7777')

import axios from 'axios'

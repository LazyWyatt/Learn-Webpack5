import '../css/style.css'
import '../css/style.scss'
import '../css/image.css'
import '../fonts/icofont.css'

import png2 from '../img/02.jpg'

const divEl = document.createElement('div')
divEl.className = 'title'
divEl.innerHTML = '你好呀'

//設置背景圖片
const bgDivEl = document.createElement('div')
bgDivEl.className = 'image-bg'

// 設置img元素的src
const imgEl = document.createElement('img')
imgEl.src = png2

//i元素
const iEl = document.createElement('i')
iEl.className = 'IcoFont icofont-bathtub'

document.body.appendChild(divEl)
document.body.appendChild(bgDivEl)
document.body.appendChild(imgEl)
document.body.appendChild(iEl)

console.log('太神奇了吧')

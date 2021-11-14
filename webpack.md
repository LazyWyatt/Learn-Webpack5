# 認識 webpack

- 前端越來越複雜
  - 模塊化的方式
  - 高級的特性來加速開發效率和安全性，比如說通過 ES6+、TypeScript 開發腳本邏輯。
  - 通過 sass、less 來編寫 css 樣式代碼。
  - 開發過程中，希望邊監聽文件的變化來反映到瀏覽器上
  - 將程式進行壓縮、合併以及其他相關的優化。
- webpack is a static module bundler for modern Javascript applications.
  - 打包: webpack 可幫助我們進行打包，所以是一個打包工具
  - 靜態的: 最終將程式打包成靜態資源(部屬到靜態服務器)
  - 模塊化: webpack 支持各種模塊開發，ES Module、CommonJS、AMD
  - 現代的: 前端越來越複雜
    cjs -> CommonJS
    hbs -> 一種模板引擎

1.  JS 打包

- 將 ES6 轉成 ES5
- TypeScript 的處理轉換成 Javascript

2.  CSS 處理

- CSS 模塊的加載、提取;
- Less 和 Sass 等處理器的處理

3.  資源文件 img、font

- 圖片 img 文件的加載
- 字體 font 文件的加載

4.  HTML 資源文件
5.  處理 vue 項目的 sfc 文件的.vue 文件

```
//默認是找./src底下的index.js
//npx是到node_modules的.bin底下執行本地指令，不是全局
npx --entry ./src/main.js --output-path ./build

//指定config名稱
webpack --config xxx.config.js
```

## css-loader

- loader 可用於對於原代碼進行轉化
- 我們也可以將 css 文件也看成是一個模塊，我們通過 import 來加載
- 加載模塊時，webpack 並不知道如何對其進行加載，因次我們必須制定對應的 loader
- 加載 css 文件，我們需要一個可以讀取 css 文件的 loader，這個 loader 最常使用的是 css-loader。

- 三種方式
  - 內連方式
  ```
  import 'css-loader!../css/style.css'
  ```
  - 配置方式
    - webpack.config.js

## style-loader

- css-loader 只負責將.css 文件進行解析，並不會將之後的 css 插入頁面。
- 如果我們希望在插入 style 的操作，我們還需要另外一個 loader，那就是 style-loader

## PostCSS

- PostCSS 是一個通過 Javascript 來轉換樣式的工具。
- 可以幫助我們進行 CSS 的轉換和適配，比如自訂添加瀏覽器前綴，css 樣式的重製。
- 實現工具，需要借助 PostCss 的插件

- webpack 中的 postcss-loader
- PostCSS 相關的插件

```bash
//單獨使用
npm install postcss postcss-cli -D
```

```bash
npm install autoprefixer -D
npx postcss --use autoprefixer -o demo.css ./src/css/style.css
npx postcss --use autoprefixer -o 輸出文件名 輸入
```

```Javascript
//webpack使用方式
npm install postcss-loader -D
npm install autoprefixer -D

//webpack.config.js
module: {
    rules: [
      {
        test: /\.css$/, //正則表達式
        // loader: 'css-loader',
        use: [
          // { loader: 'css-loader' }
          'style-loader',
          'css-loader',
        ],
      },
      {
        test: /\.(sass|scss)$/,
        use: [
          'style-loader',
          'css-loader',
          'postcss-loader',
          // {
          //   loader: 'postcss-loader',
          //   options: {
          //     postcssOptions: {
          //       plugins: [require('autoprefixer')],
          //     },
          //   },
          // },
        ],
      },
    ],
  },
//postcss.config.js
module.exports = {
  plugins: [require('autoprefixer')]
}
```

#### postcss-preset-env

- 通常在配置 postcss-loader 的時候，我們配置插件並不需要使用 autoprefixer
- 使用另外一個插件 : postcss-preset-env
  - 也是一個插件
  - 將一些現代的 css 特性轉換成瀏覽器認識的 css，並且根據目標瀏覽器或運行狀態添加所需的 polyfill
  - 也包括自動幫助我們添加 autoprefixer

## 圖片的優化方式

一次請求很多圖片會有高併發的情況 01. 一張大圖裡面包含很多小圖，使用 background-position 02. 字體圖片對應矢量圖 03. 對小圖片進行編碼，編碼成 base64URI

## asset module type

- webpack5 之前，加載這些資源需要使用一些 loader，比如 raw-loader、url-loader、file-loader
- 在 webpack5 開始，可以直接使用資源模組類型(asset module type), 來替代上面的 loader

- asset module type
  - asset/resource 發送一個單獨文件並倒出 url，以前使用 file-loader 實現
  - asset/inline 倒出一個資源的 data URI，以前使用 file-loader 實現
  - asset/source 倒出資源的原代碼。之前通過使用 raw-loader 實現。
  - asset 在倒出一個 data URI 和發送一個單獨文件之間自動選擇。之前通過 url-loader，配置 limit 選項實現

## plugins

- Loader 是用於特定模塊類型的轉換
- Plugin 用於執行更加廣泛的任務，包括打包優化、資源管理、環境變量注入。

## CleanWebpackPlugin

## HtmlWebpackPlugin

## Babel

- 主要用於舊瀏覽器或者環境中將 ECMAScript2015+轉換為向後兼容版本的 JS
- babel 本身可以作為一個獨立的工具使用，不和 webpack 等工具配置來使用。
- 使用必須下載
  - @babel/core: babel 的代碼核心，必須安裝。
  - @babel/cli: 可以讓我們在命令行使用 babel。

#### babel 代碼單獨使用

```
npx babel demo.js --out-dir dist
npx babel demo.js --out-file dist

npm install @babel/plugin-transform-arrow-functions -D
npm install @babel/plugin-transform-block-scoping -D
```

- babel 編譯器執行原理(面試問題)
  原生源代碼 -> 解析 -> 轉換 -> 代碼生成 -> 目標原代碼
  原生源代碼 -> 詞法分析(Lexical Analysis) -> tokens 數組 -> 語法分析(syntactic analysis)
  -> AST(抽象語法數) -> 變歷(Traversal) -> 訪問(Visitor) -> 應用插件(Plugins) -> 新的 AST ->目標源代碼
- 可以透過兩種文件來配置
  - babel.config.json(.js,.cjs,.mjs)
  - babelrc.json(.babelrc, .js, .cjs, mjs)文件 runtime-compiler

## Vue

vue 源代碼對其進行解析
vue 版本一: runtime + compiler
vue 版本二: runtime-only

- vue(.runtime).global(.prod).js:

  - 通過瀏覽器直接使用會有一個全局的 Vue
  - vue.runtime.global 完全不使用 template 打包出來比較小
  - .prod 醜化變小

- vue(.runtime).esm-browser(.prod).js:
  -.esm 通過源生的 es 模組導入使用(瀏覽器中通過<script type="module">)
- vue(.runtime).esm-bundler.js:
  - 用於 webpack, rollup 和 parcel 等構建工具
  - 默認是 vue.runtime.esm-bundler.js;
  - 如果需要解析模板 template，要手動指定 vue.esm-bundler.js，不能使用.runtime
- vue.cjs(.prod).js

  - 服務器端渲染使用
  - 通過 require()在 Node.js 中使用

- Vue 開發過程中有三種方式編寫 DOM

  - template 模板
  - render 函數，使用 h 函數
  - 通過.vue 文件中的 template 來編寫模板

- 平時我們開發大多數的情況下都是使用 SFC(single-file components(單文件組件))。

- tree shaking: 發現沒有使用到的 Vue2 vue_options_api 丟掉
- vue_prod_devtools -> 開發階段

## webpack 本地伺服器

- webpack watch mode
- webpack-dev-server
- webpack-dev-middleware

#### webpack-dev-server

- 編譯之後不會寫入到任何輸出文件，而是將 bundle 文件表留在內存中。
  - webpack-dev-server 使用了一個庫叫 memfs(memory-fs webpack 自己寫的)

#### HMR 模組熱替換

- HMR
  -HMR(Hot Module Replacement)，應用程序運行的過程中，替換、添加、刪除模組，而無須重新刷新整個頁面。
- HMR 的原理
  - wds 會創建兩個服務: 提供靜態資源的服務(express)和 socket(net.Socket)服務
  - express server 負責直接提供靜態資源服務(打包後資源直接被瀏覽器請求和解析)
  - socket 長連接 -> 即時溝通(聊天、送禮)
  - http 連接(短連接)
  - 客戶端發送 http 請求 -> 和服務器件力連接 -> 服務器做出相應 -> 斷開連接

#### hotonly、host 配置

- localhost:域名、通常會被解析成 127.0.0.1
- 127.0.0.1 Loop Back Address 自己發出去的包自己接收
  - 正常的數據通過 應用層 傳輸層 數據鏈結層 物理層
  - 而 Loop Back Address 透過網路層而已 不會經過數據鏈階層和物理層

#### port 配置

#### proxy

#### historyApiFallback

#### resolve 模組解析

- 使用 enhance-resolve 處理
- 可以解析三種路徑
  - 絕對
  - 相對
  - 模塊路徑 -默認值是['node_modules']
  - 如果是一個文件
    - 文件有擴展名，責打寶文件
    - 否則使用 resolve.extensions 選項作為文件擴展名解析
  - 如果是一個文件夾
    - 會根據 resolve.mainFiles 配置選項中指定的文件循序查找。
      - resolve.mainFiles 的默認值是['index'];

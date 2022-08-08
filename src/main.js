
// import anime from "animejs";
// 使用 import 导入
// browserify ./src/main.js > ./dist/bundle.js
// ParseError: 'import' and 'export' may appear only with 'sourceType: module
// 我们看到报错了：是因为 Browserify 不理解导入，因为 import 是一个 es6函数，因此我们首先需要将该代码转换为 普通的 js
// 以便 Browserify 可以捆绑它 // Browserify 其实是个可扩展工具，我们要安装个插件能让 Browserify 来逻辑 Es6语法
//  npm install --save-dev @babel/core @babel/preset-env babelify
//  切换到 packjson 文件中 我们看到新安装的功能在 devDependencies 对象中，而不是依赖项之一，因为我们使用 -- save 。
//  我们创建一个 必须命名为 babel config
//  browserify ./src/main.js > ./dist/bundle.js -t babelify
//  在 bundle.js 文件中，函数和使用的依赖项转换为常规的浏览器友好代码，这在开发和测试很好，但是为了在分发版本中获得更好的性能，需要对该代码进行压缩 
//  取消注释 或 删除任何未使用的变量 或 函数也删除空白处的缩进
//  这样做很容易，当有数千行代码需要琢个查看时，这几乎是一项不可能完成的任务。
//  幸运的是有个插件可以帮助我们完成这项任务 ： npm install --save -dev tinyify
//  browserify ./src/main.js > ./dist/bundle.js --plugin tinyify
//  const a = 'hello A'; consolo.log(a) ==>  consolo.log('hello A')； 将常量的值转为直接在控制台日志函数中使用，所以我们使用的内存更少，这意味着性能更高的代码，这对于移动浏览器非常有用。
const anime = require('animejs')
anime({
    targets:'body',
    duration:5000,
    backgroundColor:'#ffea00'
})



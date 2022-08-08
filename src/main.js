
import anime from "animejs";
// 使用 import 导入
// browserify ./src/main.js > ./dist/bundle.js
// ParseError: 'import' and 'export' may appear only with 'sourceType: module
// 我们看到报错了：是因为 Browserify 不理解导入，因为 import 是一个 es6函数，因此我们首先需要将该代码转换为 普通的 js
// 以便 Browserify 可以捆绑它 // Browserify 其实是个可扩展工具，我们要安装个插件能让 Browserify 来逻辑 Es6语法
//  npm install --save-dev @babel/core @babel/preset-env babelify
//  切换到 packjson 文件中 我们看到新安装的功能在 devDependencies 对象中，而不是依赖项之一，因为我们使用 -- save 。
//  我们创建一个 必须命名为 babel config
//  browserify ./src/main.js > ./dist/bundle.js -t babelify
anime({
    targets:'body',
    duration:5000,
    backgroundColor:'#ffea00'
})



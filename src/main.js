
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
//  一个包含数千行代码的大型 js 文件，我们通过 未声明的变量来故意创建一个错误，提示 变量 错误来自第 1296 行，这意味着我们需要滚动整个页面以到达修复。好消息是有一些神奇的解决方案可以帮助解决它，它被称为 源映射，基本上是捆绑之前代码的编码表示，这意味着 一旦浏览器找到一个错误，它将 读取源映射并使用它告诉开发人员来自哪个模块的哪一行中的错误
//  browserify ./src/main.js > ./dist/bundle.js -d 不要在代码的发行版中生成源代码映射，因为它显然会给bundle文件增加太多的大小 
//  直到这里我们注意到输入那么长的命令有点烦人，尽管我们可以回车选择命令，但也有很少使用的命令经常忘记。
//  一个非常简单的解决方案是创建一个自定义命令，该命令可以很短，并且有一个有意义的名称 ==》 package.json
//  到目前为止，我们一直在将主模块与依赖项代码，但有时我们希望把它们分开，并将依赖项保留为独立部分，因为它将被网站的多个页面使用，因此我们可以缓存它并防止浏览器在每次页面需要它时向服务器发送另一个请求。
//  browserify ./src/main.js -x animejs > ./dist/bundle.js 使用 -x 标志和依赖性的路径 或 名称 告诉浏览器文件包使用它的依赖，但是我们不希望它保存在气泡文件中
//  browserify -r animejs > ./dist/anime.js  -r 标志 表示浏览器知道这是一个依赖项的方式创建，并且需要被主模块使用。不要忘了主模块添加

 
const anime = require('animejs')
anime({
    targets:'body',
    duration:5000,
    backgroundColor:'#ffea00'
})



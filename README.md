# Browserify-
init

学习 Browserify

分支学习路线

1. init
2. requier （commit 注释打错了）
3. import
4. tinyify <br/>
//  在 bundle.js 文件中，函数和使用的依赖项转换为常规的浏览器友好代码，这在开发和测试很好，但是为了在分发版本中获得更好的性能，需要对该代码进行压缩 
//  取消注释 或 删除任何未使用的变量 或 函数也删除空白处的缩进
//  这样做很容易，当有数千行代码需要琢个查看时，这几乎是一项不可能完成的任务。
//  幸运的是有个插件可以帮助我们完成这项任务 ： npm install --save -dev tinyify
//  browserify ./src/main.js > ./dist/bundle.js --plugin tinyify
//  const a = 'hello A'; consolo.log(a) ==>  consolo.log('hello A')； 将常量的值转为直接在控制台日志函数中使用，所以我们使用的内存更少，这意味着性能更高的代码，这对于移动浏览器非常有用。

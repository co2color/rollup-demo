# rollup-demo

an easy rollup web'sdemo

用 rollup 搭建一个最简化 web 项目的流程：

首先 npm init，然后安装 rollup 包。

在 package.json 中写脚本：

```bash
"build": "rollup -c"
```

创建 rollup.config.js。跟 webpack 一样，都有输入(input)和输出(output).

先来定义输入：创建 src/main.ts，创建/index.html。

和 vue 或者 react 一样，里面定义一个根 dom，id 为#app。在 main.ts 中会挂载该 dom。

main.ts 中获取 dom，并且操作 dom，就是 vue/react 的 spa 最简模型。

另外就是 rollup 打包相关，既然用了 ts，当然要安装 ts 相关的包。

然后就是 resolve 包，这个非常关键，看本项目专门使用了 lodash 这种外部包，如果没有 resolve，就没法根源性地引入 lodash 的方法。

terser 是代码混淆+压缩用的，一般来说都会使用。

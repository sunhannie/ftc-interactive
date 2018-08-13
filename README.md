# ftc-interactive
it is a perils-of-perception

发现的问题
如果没有安装webpack-cli，会弹出错误。 
https://blog.csdn.net/qq_26733915/article/details/79446460 （升级地方）

https://www.cnblogs.com/pomelott/p/8977092.html (配置详情)

js文件可以直接引入，但是css文件需要借助ExtractTextPlugin

<!--两种写法，用单引号括起来会变成字符串-->
<div class={`reslut-container  ${this.state.answered ? 'active' : 'notActive'} `}>

<div class={`reslut-container  ${`${this.state.answered}`=='true' ? 'active' : 'notActive'} `}>
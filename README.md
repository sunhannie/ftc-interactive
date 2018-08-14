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

增加场景，增加和删除问题

## 写法问题
```
return ({
    state,   
    state   
})  这样写仅仅获取一个state值
```

必须用写法一，会把mapStateToProps和mapDispatchToProps的属性合并进去。写法二不能

写法一：
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Question)

写法二：
connect(
  mapStateToProps,
  mapDispatchToProps
)(Question)
 export default Question;  


 https://www.npmjs.com/package/babel-loader  (用法)
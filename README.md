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


 dispatch(requestGet({
        questionsLoaded: true,
        questions})) ;  //直接写dispatch行不通


　　（假设你已经知道了redux中store、action、reducer之间的关系和用法）当我们从后台获取数据，并把后台获取的数据展保存在全局store中时，问题来了，Ajax是异步请求啊！我咋个知道什么时候他已经保存进了store中，并在组件中使用（假设你已经知道了如何关联redux和react，懂了如何connect）this.props去渲染在组件中？

　　在我不断敲试代码中，终于发现了redux-thunk的神秘！他能返回两种状态，一种是我还没有把后台数据保存给全局store中，一种状态是已经保存好了。然后，问题又来了，怎么去辨识他们两种状态呢？答案很简单，在reducer的返回的action字段中，添加一个属性isFetching来辨识，初始状态设置isFetching为ture，表示正在保存中，ajax保存完后，将isFetching改为false，然后在组件中判断一下该state的isFecthing即可。


Redux Thunk中间件允许您编写返回函数而不是动作的动作创建者。thunk(坦克)可以用来延迟动作的调度，或者只有在满足一定条件下才可以调度。内部函数接收dispatch和getState作为参数。
返回执行异步分派的函数的An action creator:
返回执行条件分派的函数的An action creator:
```
store.dispatch(addCountAsync());  thunk需要通过store.dispatch触发
const mapDispatchToProps = (dispatch, props) => {
  return {
    dispatch,  //加上dispatch，this.props.dispatch才不会报错
    markQuestion1: (questions) => {
      dispatch(markQuestion1(questions))
    },
    requestGet: (request_get_data) => {
      dispatch(requestGet(request_get_data)) ; 
    }
  }
}
```
内部函数的任何返回值都将作为分派本身的返回值可用。这对于编排一个异步控制流很方便，因为thunk action creator可以彼此调度，并返回承诺，等待对方的完成:


没有指定--content-base运行的是server.js同目录

另一种iframe模式的操作的区别只在输入的网址：localhost:8080/webpack-dev-server/index.html

https://blog.csdn.net/hahahhahahahha123456/article/details/80376955
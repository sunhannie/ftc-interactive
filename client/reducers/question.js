const ADD_QUESTION = 'ADD_QUESTION';
const MARK_QUESTION = 'MARK_QUESTION';

// 对象怎么合并？写法上需要熟悉。抓取数据，dispatch动作
export const reducer = (state, action) => {
// export default  function (state, action){  //这样写可以不写函数名
    // console.log(state);
    if (!state) { 
        state = {}
    }

    /**
     * 下一步研究的是怎么获取到默认state
     */
    // [...'hello']  
    // let aClone = Object.assign({}, [1,2,3]);
    // var aClone = {...[1,2,3]};  
    // let aClone = { ...{questions1: [14]} }; //对象和数组都是可以运行
    switch(action.type){
        case ADD_QUESTION:
            return {questions: [...state.questions, action.question1]}
        case MARK_QUESTION:
        console.log(action.mark_question);//这里的值就是触发传过来的值，得到{answeredQ: false, valueQ: "50"}。我该怎么样把此处的值更新到页面中
            return {mark_question_data:action.mark_question}
        default:
        // 此处state是默认值，即为{}
           let aClone = { ...{questions1: [14]}  } ; 
            // console.log( { ...state });
            return ({
                ...aClone,   
                state   
            })
    }
}

export const addQuestion = (question1) => {
    return { type: ADD_QUESTION, question1 }
}

export const markQuestion1 = (mark_question) => {
    return { type: MARK_QUESTION, mark_question}
}
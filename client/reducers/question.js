const ADD_QUESTION = 'ADD_QUESTION';

// 对象怎么合并？写法上需要熟悉。抓取数据，dispatch动作
export const reducer = (state, action) => {
// export default  function (state, action){
    if (!state) {
        
        state = { questions1: [14] }
    }

    /**
     * 
     */
    // [...'hello']  
    // let aClone = Object.assign({}, [1,2,3]);
    // var aClone = {...[1,2,3]};  //不能处理es7的语法
    switch(action.type){
        case ADD_QUESTION:
            return {questions: [...state.questions, action.question1]}
        default:
        // let aClone = { ...{questions1: [14]} }; //对象和数组都是可以运行
        
        // 此处state是{ questions1: [14] }
        // let aClone = { ...state }; //VM27942:1 Uncaught ReferenceError: state is not defined
        //    let aClone = { ...{questions1: [14]}  } ; 
            // console.log(state);
            return ({
                'test':111,   
                state   
            })
            // return   state
    }
}

export const addQuestion = (question1) => {
    return { type: ADD_QUESTION, question1 }
}
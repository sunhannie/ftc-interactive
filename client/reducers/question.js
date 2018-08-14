const ADD_QUESTION = 'ADD_QUESTION';

export function reducer(state, action){
    if (!state) {
        state = { questions: [] }
    }
    switch(action.type){
        case ADD_QUESTION:
            return {questions: [...state.questions, action.question]}
        default:
            return state
    }
}

export const addQuestion = (question) => {
    return { type: ADD_QUESTION, question }
}
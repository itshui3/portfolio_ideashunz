
import produce from 'immer'
const initTextObj = {
    textObj: null,
    inputText: '',
    submitText: ''
}
// actions
const A = {
// typetext actions
    TYPETEXT: {
        RECEIVE: 'receive',
        INPUT: 'input',
        SUBMIT: 'submit'
    }

}

const { TYPETEXT } = A
const { INPUT, SUBMIT, RECEIVE } = TYPETEXT

const textObjReducer = (state, { type, payload }) => {

    switch(type) {

        case RECEIVE:
            return produce(state, draft => {
                draft.textObj = payload
            })

        case INPUT:
            return produce(state, draft => {
                draft.input = payload
            })

        case SUBMIT:
            return produce(state, draft => {
                draft.submit = payload
                draft.input = ''
            })

        default:
            return state
    }
}

export {
    initTextObj,
    RECEIVE,
    INPUT,
    SUBMIT,
    textObjReducer
}
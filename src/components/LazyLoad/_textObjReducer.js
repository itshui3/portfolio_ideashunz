
import produce from 'immer'
const initTextObj = {
    inputText: '',
    submitText: ''
}
// actions
const A = {
// typetext actions
    TYPETEXT: {
        INPUT: 'input',
        SUBMIT: 'submit'
    }

}

const { TYPETEXT } = A
const { INPUT, SUBMIT } = TYPETEXT

const textObjReducer = (state, { type, payload }) => {

    switch(type) {

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
    INPUT,
    SUBMIT,
    textObjReducer
}
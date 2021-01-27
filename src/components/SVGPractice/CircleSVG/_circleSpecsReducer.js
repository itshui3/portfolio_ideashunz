import produce from 'immer'

const initCircleSpecs = {
    fillColor: 'saddlebrown',
    size: 100
}

const CIRCLE_ACTION = {
    ASSIGN_COLOR: 'assign_color',
    SET_SIZE: 'set_size'
}

const {ASSIGN_COLOR, SET_SIZE} = CIRCLE_ACTION

const circleSpecsReducer = (state, {type, payload}) => {

    switch(type) {
        case ASSIGN_COLOR:
            return produce(state, draft => {

                if (typeof payload === String) draft.fillColor=payload

                else { 
                    console.error('TypeError: attempted to assign a non-string as circle fill color')
                    throw new Error('TypeError: attempted to assign a non-string as circle fill color') 
                }

            })

        case SET_SIZE:
            return produce(state, draft => {
                if (typeof payload === Number) draft.size=payload

                else {
                    console.error('TypeError: attempted to assign a non-number as circle size')
                    throw new Error('TypeError: attempted to assign a non-number as circle size')
                }
                
            })

        default:
            return state
    }

}

export {
    initCircleSpecs,
    CIRCLE_ACTION,
    circleSpecsReducer
}
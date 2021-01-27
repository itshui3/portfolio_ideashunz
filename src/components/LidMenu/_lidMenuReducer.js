
import produce from 'immer'

const initItems = [
    'Panda',
    'Bunny',
    'Llama',
    'Whale',
]

const lidMenuInit = {
    // lidColors
    lidColor: '#000',
    itemColor: '#708090',
    sepColor: '#696969',

    // items
    lidItems: initItems
}

const LIDMENU_ACTIONS = {
    // color actions
    COLOR_LID: 'color_lid',
    COLOR_ITEM: 'color_item',
    COLOR_SEPARATOR: 'color_separator',
    // item actions
    ADD_ITEM: 'add_item'
}

const { COLOR_LID, COLOR_ITEM, COLOR_SEPARATOR, ADD_ITEM } = LIDMENU_ACTIONS

const lidMenuReducer = (state, {type, payload}) => {
    switch(type) {
        case COLOR_LID:
            return produce(state, draft => {
                draft.lidColor=payload
            })
        case COLOR_ITEM:
            return produce(state, draft => {
                draft.itemColor=payload
            })
        case COLOR_SEPARATOR:
            return produce(state, draft => {
                draft.sepColor=payload
            })
        case ADD_ITEM:
            return produce(state, draft => {
                draft.lidItems.push(payload)
            })
        default:
            return state
    }
}

export {
    lidMenuInit,
    LIDMENU_ACTIONS,
    lidMenuReducer,
}
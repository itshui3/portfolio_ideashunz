const initImg = {
    idx: 0
}

const IMG_CAROUSEL_ACTIONS = {
    RIGHT: 'right',
    LEFT: 'left',
    SELECT: 'select'
}

const { RIGHT, LEFT, SELECT } = IMG_CAROUSEL_ACTIONS

const imgSwitchReducer = (state, { type, payload }) => {

    switch(type) {

        case RIGHT:
            if (state.idx < 2) { return { idx: state.idx+1 } }
            else return { idx: 0 }

        case LEFT:
            if (state.idx > 0) { return { idx: state.idx-1 } }
            else return { idx: 2 }

        case SELECT:
            return { idx: payload }

    }
}

export {
    initImg,
    IMG_CAROUSEL_ACTIONS,
    imgSwitchReducer
}
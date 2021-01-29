import './_LidMenu.sass'
import React, { useReducer } from 'react'

import {
    lidMenuInit,
    LIDMENU_ACTIONS,
    lidMenuReducer,
} from './_lidMenuReducer'

const { COLOR_LID, COLOR_ITEM, COLOR_SEPARATOR, ADD_ITEM } = LIDMENU_ACTIONS

function LidMenu() {

    const [lidMenuState, dispatchLidMenuState] = useReducer(lidMenuReducer, lidMenuInit)

return (
<>
<div className='lidMenu_cont'
style={{
    backgroundColor: lidMenuState.lidColor
}}>

{
    lidMenuState.lidItems.map((item, idx) => (

        <div className='lidMenu_item'
        style={{
            backgroundColor: lidMenuState.itemColor
        }}
        key={idx}
        >
            {item}
        </div>

    ))
}

</div>
</>
)
}

export default LidMenu

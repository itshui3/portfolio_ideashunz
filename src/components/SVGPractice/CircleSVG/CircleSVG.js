import React, { useReducer } from 'react'

import {
    initCircleSpecs,
    CIRCLE_ACTION,
    circleSpecsReducer
} from './_circleSpecsReducer'

const { ASSIGN_COLOR, SET_SIZE } = CIRCLE_ACTION
// ASSIGN_COLOR : payload receives String
// SET_SIZE : payload receives Number

function CircleSVG() {

    const [circleSpecs, dispatchCircleSpecs] = useReducer(circleSpecsReducer, initCircleSpecs)

return (
<>
<div className='circleSVG_cont'>

    <div className='circleSVG_controls'>


        
    </div>

    <svg width={size} height={size}>

        <circle cx={size/2} cy={size/2} r={size/2} fill={fillColor} />

    </svg>

</div>
</>
)
}

export default CircleSVG

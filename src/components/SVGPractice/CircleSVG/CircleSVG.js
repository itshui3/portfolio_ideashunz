import './_CircleSVG.sass'
import React, { useReducer } from 'react'

import {
    initCircleSpecs,
    CIRCLE_ACTION,
    circleSpecsReducer
} from './_circleSpecsReducer'

const { 
    // change handlers
    CHANGE_COLOR,
    CHANGE_SIZE,
    // submit handlers
    ASSIGN_COLOR, 
    SET_SIZE 
} = CIRCLE_ACTION
// ASSIGN_COLOR : payload receives String
// SET_SIZE : payload receives Number

function CircleSVG() {

    const [circleSpecs, dispatchCircleSpecs] = useReducer(circleSpecsReducer, initCircleSpecs)

return (
<>
<div className='circleSVG_cont'>

    <div className='circleSVG_controls'>
        <div className='circleSVG_colorCont'>
            <label className='circleSVG_colorLabel'>Color</label>
            <input className='circleSVG_colorInput' 
            value={circleSpecs.input_fillColor}
            onChange={(ev) => dispatchCircleSpecs({ type: CHANGE_COLOR, payload: ev.target.value })}
            />
            <div className='circleSVG_colorSubmitBtn'>
            Select Color
            </div>
        </div>
        
        <div className='circleSVG_sizeCont'>
            <label className='circleSVG_sizeLabel'>Size</label>
            <input className='circleSVG_sizeInput' 
            value={circleSpecs.input_size}
            onChange={(ev) => dispatchCircleSpecs({ type: CHANGE_SIZE, payload: ev.target.value })}
            />
            <div className='circleSVG_sizeSubmitBtn'>
                Select Size
            </div>
        </div>

    </div>

    <svg width={circleSpecs.size} height={circleSpecs.size} className='circleSVG'>

        <circle 
        cx={circleSpecs.size/2} 
        cy={circleSpecs.size/2} 
        r={circleSpecs.size/2} 
        fill={circleSpecs.fillColor} />

    </svg>

</div>
</>
)
}

export default CircleSVG

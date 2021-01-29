
import './_LazyLoad.css'
import React, { useEffect, useReducer } from 'react'

import Typewriter from 'typewriter-effect'
// Typewriter div wrapper compo containing our methods

import {
    initTextObj,
    RECEIVE,
    INPUT,
    SUBMIT,
    textObjReducer
} from './_textObjReducer'

function LazyLoad() {

    const [textObj, textObjDispatch] = useReducer(textObjReducer, initTextObj)

    useEffect(() => {
        if (textObj.textObj) {
            textObj.textObj.typeString(textObj.submit).start()
        }
        
    }, [textObj.submit])

return (
<>
<div className='typewriter_cont'>

    <Typewriter onInit={(typewriter) => {
        textObjDispatch({ type: RECEIVE, payload: typewriter })
    }}
    />

    <input className='typewriter_input'
    value={textObj.input}
    onChange={(ev) => textObjDispatch({ type: INPUT, payload: ev.target.value })}
    />

    <div className='typewriter_submit'
    onClick={() => textObjDispatch({ type: SUBMIT, payload: textObj.input })}>
        Click to type some text
    </div>

</div>
</>
)
}

export default LazyLoad

// typewriter controls: 
// [0] - I want to stabilize position such that 
// div doesn't expand width onTyping
// issue: spaces create newLine when Typewriter div
// abs pos within rel pos cont
// [fixed]

// [1] - I want to familiarize with Typewriter methodology
// [a] - typewriter-effect's <Typewriter />
// methods:
// - .typeString('insert string for Typewriter to type')
// - .start()

// [2] - I want to come up with a set of interesting useCases 
// for migrating to portfolio
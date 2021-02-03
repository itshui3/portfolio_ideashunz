
import './_reactSpring.css'
import React from 'react'
import { useSpring } from 'react-spring';

import {
    Component1
} from './components'

import {
    comp1text,
    comp2text,
    comp3text,
} from './_componentText.js'

function ReactSpring() {
    const compoSpringProps = useSpring({ opacity: 1, from: {opacity: 0} })
return (
<>
    <div className='reactSpring_cont'>

    <Component1 
    style={compoSpringProps}
    title={"Component 1"} 
    text={comp1text} />

    <Component1 
    style={compoSpringProps}
    title={"Component 2"} 
    text={comp2text} />

    </div>
</>
)
}

export default ReactSpring

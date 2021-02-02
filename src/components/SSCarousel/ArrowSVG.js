import React, { useState } from 'react'

const rewind = { transform: 'rotate(-90deg)' }

function ArrowSVG({ side, isEnd }) {

    const [strokeEmphasis, setStrokeEmphasis] = useState(0)

return (
<>
<svg className={`sscarousel_side_svg ${side}`}
style={isEnd? rewind: null}
onMouseOver={() => setStrokeEmphasis(1)}
onMouseOut={() => setStrokeEmphasis(0)} 
onMouseDown={() => setStrokeEmphasis(2)}
onMouseUp={() => setStrokeEmphasis(1)}>

    <line 
    x1="100%" y1="0%" stroke={
        !strokeEmphasis? 'grey': strokeEmphasis === 2? '#000': '#708090'
    } 
    strokeWidth="5" strokeLinecap="round"
    x2="0%" y1="50%"
    />
    <line 
    x1="100%" y1="50%" stroke={
        !strokeEmphasis? 'grey': strokeEmphasis === 2? '#000': '#708090'
    } 
    strokeWidth="5" strokeLinecap="round"
    x2="0%" y2="100%"
    />

</svg>
</>
)
}

export default ArrowSVG

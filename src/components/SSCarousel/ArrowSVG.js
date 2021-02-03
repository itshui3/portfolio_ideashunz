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
    {/* 
    []arrowSVG emphasis case handling notes
    []emphasis strengths: [0 - 1 - 2]

    onMouseOver - emphasizeHover(1)
    onMouseOut - deEmphasizeHover

    onMouseDown - emphasizeClick = 2 potential cases after this
        =>onMouseUp - deEmphasizeClick(1) 
        = mouseUp must occur while mouse also onHover, therefore (1)
        =>onMouseOut - deEmphasizeClick(0)
        = handles resetting emphasis off (2) in case full onClick never occurs
    */}

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

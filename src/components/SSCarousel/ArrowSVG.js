import React from 'react'

const rewind = { transform: 'rotate(-90deg)' }

function ArrowSVG({ side, isEnd }) {

return (
<>
<svg className={`sscarousel_side_svg ${side}`}
style={isEnd? rewind: null}>

    <line 
    x1="100%" y1="0%" stroke="grey" strokeWidth="5"
    x2="0%" y1="50%"
    />
    <line 
    x1="100%" y1="50%" stroke="grey" strokeWidth="5"
    x2="0%" y2="100%"
    />

</svg>
</>
)
}

export default ArrowSVG

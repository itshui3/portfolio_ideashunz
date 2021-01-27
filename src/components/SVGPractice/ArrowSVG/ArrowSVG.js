import React from 'react'

function ArrowSVG() {
return (
<>
<svg className='svgArrow'
width="60" height="60">
    {/* path? */}
    <path d="M 10 0 
            L 30 0 
            L 60 30
            L 30 60
            L 10 60
            L 40 30
            L 10 0"></path>
</svg>
</>
)
}

export default ArrowSVG

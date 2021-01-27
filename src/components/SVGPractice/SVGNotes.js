import './_SVGArrow.sass'
import React from 'react'

// svgs
import CircleSVG from './CircleSVG/CircleSVG'
import ArrowSVG from './ArrowSVG/ArrowSVG'

function SVGNotes() {
return (
<>
    {/* <ArrowSVG /> */}
    <CircleSVG />

</>
)
}

export default SVGNotes

/*
scalable vector graphic
not limited by pixel information
made up of maths

"One of the biggest advantages of SVGs that I’ve found is its flexibility and an ability to modify particular internal elements with CSS."

You can find many JS libraries (SVGJS, Snap SVG) that can help you with making some advanced animations. However, I found that for most of the cases you can achieve some interesting effects by using only opacity, scale, translate, and colors.

opacity, 
scale, 
translate, 
colors

*/
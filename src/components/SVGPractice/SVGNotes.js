import React from 'react'

// svgs
import CircleSVG from './CircleSVG/CircleSVG'

function SVGNotes() {
return (
<>
    <CircleSVG />
    <svg><use href='#circle'></use></svg>
    <svg><use href='#circle'></use></svg>
    <svg><use href='#circle'></use></svg>
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
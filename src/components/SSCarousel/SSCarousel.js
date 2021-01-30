
import './_SSCarousel.css'
import React from 'react'

import ArrowSVG from './ArrowSVG'

const leftSVGStyle = 'rotate_left_svg'

function SSCarousel() {
return (
<>

<div className='sscarousel_main_wrapper'>
    <div className='sscarousel_main_cont'>
        <div className='sscarousel_side_cont'>
            <ArrowSVG side={leftSVGStyle} />
        </div>

        <div className='sscarousel_body_wrapper'>
            <div className='sscarousel_body_cont'></div>

        </div>
        
        <div className='sscarousel_side_cont'>
            <ArrowSVG />
        </div>

    </div>
    <div className='sscarousel_bottom_cont'>

        <div className='sscarouse_bottom_btnConts'>
            <div className='sscarousel_bottom_btns'></div>
        </div>
        <div className='sscarouse_bottom_btnConts'>
            <div className='sscarousel_bottom_btns'></div>
        </div>
        <div className='sscarouse_bottom_btnConts'>
            <div className='sscarousel_bottom_btns'></div>
        </div>
        <div className='sscarouse_bottom_btnConts'>
            <div className='sscarousel_bottom_btns'></div>
        </div>

    </div>
</div>
</>
)
}

export default SSCarousel

/* Notes:
One interesting issue is that their images/gifs
can sit in the background without being square shaped
even though it seems like the img src comes with a square shaped img
but the background just knows to in-take whatever the surrounding 
background is. They even do this with gifs. 
*/
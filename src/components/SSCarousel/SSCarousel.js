
import './_SSCarousel.css'
import React, { useState } from 'react'

import ArrowSVG from './ArrowSVG'
import { imgAssets } from './imgAssets.js'

const leftSVGStyle = 'rotate_left_svg'


function SSCarousel() {

    const [curPanda, setCurPanda] = useState(0)

    const handleSelectImg = (idx) => {
        setCurPanda(idx)
    }

    const handleDirectImg = (dir) => {
        console.log('do thing?', dir)
        if (dir > 0) {

            setCurPanda(idx => {
                if (idx === 2) {
                    return 0
                } else {
                    return idx + 1
                }
            })

        } else {

            setCurPanda(idx => {
                if (idx === 0) {
                    return 2
                } else {
                    return idx - 1
                }
            })

        }
    }

return (
<>

<div className='sscarousel_main_wrapper'>
    <div className='sscarousel_main_cont'>
        <div className='sscarousel_side_cont'
        onClick={() => handleDirectImg(-1)} >
            <ArrowSVG 
            side={leftSVGStyle} isEnd={false}
            />
        </div>

        <div className='sscarousel_body_wrapper'>
            <div className='sscarousel_body_cont' 
            style={{
                background: `url(${imgAssets[curPanda].src})`,
                backgroundSize: 'contain'
            }}>
        </div>

        </div>
        
        <div className='sscarousel_side_cont'
        onClick={() => handleDirectImg(1)} >
            <ArrowSVG isEnd={ curPanda === imgAssets.length-1 ? true : false } />
        </div>

    </div>
    <div className='sscarousel_bottom_cont'>
        {
            imgAssets.map((img, idx) => (
            <div className='sscarouse_bottom_btnConts' key={idx}>
                <div className='sscarousel_bottom_btns'
                onClick={() => handleSelectImg(idx)}
                style={
                    curPanda === idx
                    ?
                    {transform: 'scale(1.5)',
                    backgroundColor: 'rgba(0, 0, 0, 0.9)'}
                    :
                    null
                }

                ></div>
            </div>
            ))
        }


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
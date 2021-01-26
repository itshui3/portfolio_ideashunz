import './_carousel.sass'
import React, { useReducer, useEffect } from 'react'

import CarouselDot from './CarouselDot'

import {
    initImg,
    IMG_CAROUSEL_ACTIONS,
    imgSwitchReducer
} from './_imageSwitchReducer'

const { RIGHT, LEFT, SELECT } = IMG_CAROUSEL_ACTIONS

function Carousel({ imgAssets }) {

    const [img, dispatchImg] = useReducer(imgSwitchReducer, initImg)

    useEffect(() => {
        console.log('img src', imgAssets[img.idx].src)
    }, [])

    // I need handlers taht can go left/right

return (
<>
    <div className='carousel_cont'>

        <div className='img_cont'>
            <img src={imgAssets[img.idx].src} alt={imgAssets[img.idx].alt} />

            <div className='left_cont'></div>
            <div className='right_cont'></div>

            <div className='dots_cont'>
                {
                    imgAssets.map((img, idx) => (
                        <CarouselDot 
                        key={idx}
                        selectDot={() => dispatchImg({ type: SELECT, payload: idx })}
                        />
                    ))
                }
            </div>

        </div>
        


        <div className='carousel_subtext'>
        <h2>An array of pandas</h2>
        </div>

    </div>

</>
)
}

export default Carousel

import './_carousel.sass'
import React, { useReducer } from 'react'

import {
    initImg,
    IMG_CAROUSEL_ACTIONS,
    imgSwitchReducer
} from './_imageSwitchReducer'

const { RIGHT, LEFT, SELECT } = IMG_CAROUSEL_ACTIONS

const imgAssets = [
    { src: './img/pandacriminal.PNG', alt: 'criminalities' },
    { src: './img/pandagoggles.PNG', alt: 'steam-pans' },
    { src: './img/pandaworkman.PNG', alt: 'pan-salary-man' }
]

function Carousel() {

    const [img, dispatchImg] = useReducer(imgSwitchReducer, initImg)

    // I need handlers taht can go left/right

return (
<>
    <div className='carousel_cont'>

        {/* 
        img body 
            left arrow - right arrow
            bubble dots to indicate which image selected
        */}
        <img src={imgAssets[img.idx].src} alt={imgAssets[img.idx].alt} />


    </div>

</>
)
}

export default Carousel

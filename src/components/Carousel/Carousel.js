import './_carousel.sass'
import React, { useState } from 'react'

function Carousel({ imgs }) {
    // imgs prop should be some way to point to imgs

    const [curImgIdx, setCurImgIdx] = useState(0)
    // imgs[curImgIdx]

return (
<>
    <div className='carousel_cont'>
        hi, im a carousel
        {/* 
        img body 
            left arrow - right arrow
            bubble dots to indicate which image selected
        */}

    </div>

</>
)
}

export default Carousel

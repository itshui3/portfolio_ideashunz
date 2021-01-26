import React from 'react'

function CarouselDot({selectDot}) {
return (
<>
    <div className='dot_cont'>
        <div className='dot'
        onClick={selectDot}/>
   </div>

</>
)
}

export default CarouselDot

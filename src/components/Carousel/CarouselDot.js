import React from 'react'

const selectStyle = {
    transform: 'scale(1.6, 1.6)',
    opacity: '.9'
}

function CarouselDot({selectDot, selected}) {

return (
<>
    <div className='dot_cont'>
        <div className='dot'
        style={selected ? selectStyle : null}
        onClick={selectDot}/>
   </div>

</>
)
}

export default CarouselDot

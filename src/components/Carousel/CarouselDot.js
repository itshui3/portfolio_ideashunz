import React from 'react'

const selectStyle = {
    transform: 'scale(1.6, 1.6)',
    opacity: '1'
}

function CarouselDot({selectDot, selected, dotColor}) {

return (
<>
    <div className='dot_cont'>
        <div className='dot'
        style={selected ? {...selectStyle, backgroundColor: dotColor } : {backgroundColor: dotColor }}
        onClick={selectDot}/>
   </div>

</>
)
}

export default CarouselDot


import React from 'react'

function Component1({ title, text }) {

return (
<>
<div className='component_wrapper'>
    <div className='component_cont'
    style={{
        backgroundColor: 'steelblue',
        color: 'white',
    }}>
    <h2 className='component_title'>{title}</h2>
    <p className='component_text'>{text}
    </p>
    </div>
</div>
</>
)
}

export default Component1

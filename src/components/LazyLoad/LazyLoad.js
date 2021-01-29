import React from 'react'

import Typewriter from 'typewriter-effect'
// Typewriter div wrapper compo containing our methods

function LazyLoad() {
return (
<>
    <div className='typewriter_cont'>
        <Typewriter
            onInit={(typewriter) => {
                typewriter.typeString('hai gaiz')
            }}
        />
    </div>
</>
)
}

export default LazyLoad

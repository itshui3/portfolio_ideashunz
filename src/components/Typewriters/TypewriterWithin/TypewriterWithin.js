import React from 'react'

import Typewriter from 'typewriter-effect'

function TypewriterWithin() {
return (
<>
<div className='typewriterWithin_cont'>

<Typewriter 
onInit={typewriter => {
    typewriter.typeString('some string').start()
}}
/>

</div>
</>
)
}

export default TypewriterWithin

import React from 'react'
require('dotenv').config();
console.log('public_url', process.env.PUBLIC_URL);

// const center = {
//     position: 'absolute',
//     top: '50%',
//     left: '50%',
//     transform: 'translate(-50%, -50%)'
// }

const wrapper = {
    width: '100%',
    height: '100vh',
    position: 'relative',

    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
}

function CenterWrapper(props) {

return (
<>
<div style={wrapper}>
    {/* <div style={center}> */}
    {props.children}
    {/* </div> */}
</div>

</>
)
}

export default CenterWrapper

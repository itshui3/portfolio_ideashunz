import React from 'react'

function RoundedBox() {
return (
<>
    <div className='roundedBox_cont'>
        

    </div>
</>
)
}

export default RoundedBox
/* Notes:
Not sure what this is called. I saw this in google's UI first. 
They round the border to about 5px and underlay the container with a color
Then that color only shows as a sliver on the top of the cont
The color can display as a loading animation(not sure how to do this)
It can also change onClick. Stuff like that. 

Basic Idea: 
I underlay a background color under items in a container
Exposing just the top part by pushing items down with padding-top 2px

*/
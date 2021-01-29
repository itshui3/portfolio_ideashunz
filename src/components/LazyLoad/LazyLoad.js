
import './_LazyLoad.css'
import React, { useEffect } from 'react'

import Typewriter from 'typewriter-effect'
// Typewriter div wrapper compo containing our methods

function LazyLoad() {

return (
<>
<div className='typewriter_cont'>

    <Typewriter onInit={(typewriter) => {
        
        typewriter.typeString('hai gaiz\nlet\'s wrap').start()

    }}
    />

</div>
</>
)
}

export default LazyLoad

// typewriter controls: 
// [0] - I want to stabilize position such that 
// div doesn't expand width onTyping
// issue: spaces create newLine when Typewriter div
// abs pos within rel pos cont

// [1] - I want to familiarize with Typewriter methodology

// [2] - I want to come up with a set of interesting useCases 
// for migrating to portfolio

// Ideashunz(as a gud speeler): 
// so if you r like me and used to kicking ass 
// in speeling bi champeonshipz and not taking nems
// but speeling the names correctly when you do take names
// here's som ideeyaz foar yew

// [0] use typewriter to present "hi im hui, \n wanna see some [projects?]"
// have [projects] re-render itself into a clickable button 
// after the text fully renders! wa-wa-wee-wa

// [1] onClick [projects] make text backspace itself, then have the
// cursor blinker visually move to another spot before typing: 
// "take a look at some of my projects [notice me senpai]"

// [2] onClick [notice me senpai] 
// make a tiny 'kya' appear and disappear before
// Typewriter renders aboutMe text (make this text a tinyBoi to emphasize dere)
// this should render an 'about me' page with "wanna see some [projects] again?"
// then this state will switch back and forth with [1]! 
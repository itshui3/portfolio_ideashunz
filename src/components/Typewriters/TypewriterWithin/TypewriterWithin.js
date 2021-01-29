import React from 'react'

import Typewriter from 'typewriter-effect'

function TypewriterWithin() {
return (
<>
<div className='typewriterWithin_cont'>

<Typewriter 
onInit={typewriter => {

    typewriter.start()
    
    .typeString('hey im about to alert')

    .callFunction(() => {
        setTimeout(() => alert('hey'), .0001)
    })

    .typeString('does it wait for me to close?')

}}
/>

</div>
</>
)
}

export default TypewriterWithin

/*
Methods: 

Animation Configs:
we use animation configs to proceeding animation events
.changeDelay(number) <= adjust typing speed by ms
.changeDeleteSpeed(number) <= adjust deletion speed by ms

Animation Events: 
we use animation events to construct a sequence
of events that then occur as the .start() method is called
method1().method2().method3().start()

.typeString(string) <= types string provided in parameter
.deleteAll() <= deletes entire string inside typewriter wrapper
            ELEMENT. meaning, subsequent calls on typewriter 
            OBJECT will not be referred to separately by this
.deleteChars(number) <= deletes provided number of string characters
                        backspacing from end of string
.pasteString(string) <= pastes provided string arg. ie instantly

.pauseFor(number) <= pauses animation for specified ms

.callFunction(Function) <= callFunction receives a callback that 
            gets called in order of sequence according to where
            .callFunction is in the seq. if alert method is used
            it will block rest of chain from calling until alert
            is closed

Animation Render Call
.start() <= calling .start() somewhere in the chain of a 
            typewriter object will cause the chain to run
            separate typewriter chains can be written
            and they will occur in sequence

Questions: 
- .pause() && .stop() if called at some point on any
typewriter object ref seems to prevent typing entirely
I can't stutter it to occur after some text has written either
calling either of them seem to block typewriter functionality
to begin with. EVEN if I do so async. What's the purposes/use cases
of tehse two methods? 

- why does alert block proceeding events? does it have a similar
effect on things outside of Typewriter paradigm as well? 
*/
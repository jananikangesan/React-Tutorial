import React from 'react'

function Message() {
    const name="jana";

    if(name)
        return (
            <div>
                <h1>Hello {name}</h1>
            </div>
        )
    else
        return(
            <h1>Hello world</h1>
    )
}

export default Message
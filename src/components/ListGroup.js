import React, { useState } from 'react';
import { Fragment } from 'react';


function ListGroup() {
    const items=[
        'New York',
        'San Francisco',
        'London',
        'Tokyo'
    ];

    const msg=items.length===0 ?<p>no item found</p> : <p>item found</p>;
    let getMessage=() =>{
        return items.length===0 ?<p>no item</p> : <p>item </p>;
    }
    // event handler
    const handleClick=(event)=> console.log(event);
    //let selectedIndex=0;

    //hook
    const [selectedIndex, setSelectedIndex] =useState(-1); //setSeletedIndex is a funct
    
    
  return (
    <Fragment>
        <h1>List</h1>
        {msg}
        {getMessage()}
        <ul className="list-group">
        {
            items.map((item,index)=>(
                <li className={selectedIndex===index?"list-group-item active":'list-group-item '} key={item} onClick={()=>{setSelectedIndex(index);}}>
                    {item}</li>
            ) )
        }
        </ul>
    </Fragment>
    
  )
}

export default ListGroup
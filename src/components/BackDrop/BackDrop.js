import React, { Component } from 'react';
import './BackDrop.css';

class BackDrop extends Component{
render(props){
    return(
        <div className='back_drop' onClick={props.click}/>
    )
}
}


export default BackDrop;
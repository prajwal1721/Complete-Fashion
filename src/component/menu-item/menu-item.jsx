import React from 'react';
import {withRouter} from 'react-router-dom';
import './menu-item.scss';
const MenuItem = ({title,imageUrl,size,linkUrl,match,history})=>(
    <div  className= {`${size} menu-item`} onClick={()=>{history.push(`${match.url}${linkUrl}`,console.log(match.url))}}>
        <div style={
        {backgroundImage:`url(${imageUrl})`}}
            className='background-image'
        />

        <div className='content' >
            <h1 className='title'>{title}    </h1>
            <span className='subtitle'>SHOW NOW</span>
        </div>
        
    </div>
);

export default withRouter(MenuItem);
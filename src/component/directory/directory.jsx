import React from 'react';
import './directory.scss';
import {createStructuredSelector} from 'reselect';
import {connect} from 'react-redux';
import {selectDirectorySections} from '../../redux/directory/directory.selectors';
import MenuItem from '../menu-item/menu-item';
export  const Directory =({sections})=>
        (<div className='directory-menu'>
            {
                sections.map(({id, ...otherComponents})=>(<MenuItem key={id} {...otherComponents}></MenuItem>))
            }
        </div>
        )

const mapStateToProps=createStructuredSelector({section:selectDirectorySections})
export default connect(mapStateToProps)(Directory); 
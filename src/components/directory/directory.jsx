import React from 'react';
import './directory.scss'
import MenuItem from '../menu-item/menu-item'
import {sections} from '../../data'
class Directory extends React.Component{
  constructor(props){
   super(props);
   this.state={
       sections:sections
   }
  }

  render(){
      return(
          <div className="directory-menu">
             {
                 this.state.sections.map(({id,title,imageUrl,size})=>(
                    <MenuItem  key={id} title={title} imageUrl={imageUrl} size={size}/>
                 ))
             }
          </div>
      )
  }
}

export default Directory;
import React from 'react'
import './Card.css'

import Modal from '../../../Modal/Modal'

  const Card = (props) => {
    let newData = {
      id: props.id,
      url: props.url,
      comment: []
    }
  
  
  // add comment
  
  // props.updateState(newData)
  return (
		<div className="card">
			{/* <img onClick={()=>{
        console.log('click to', newData)
        return <Modal />
        }
      } src={props.url} alt={props.id}/> */}
      <Modal url={newData.url} id={newData.id}/>
			
		</div>
	);
}

export  default Card
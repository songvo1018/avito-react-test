import React from 'react'
import Card from './Card/Card'

const List = (props) => {
  let data = props.data;  
	let cardArray = data.data.map((card) => {
		return <Card key={card.id} id={card.id} url={card.url} />;
	});
  return (
    <div>
      {cardArray}
    </div>
  )
}

export default List

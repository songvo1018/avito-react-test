import React from 'react'
import Card from './Card/Card'

const List = (props) => {
  let data = props.data;  
	let cardArray = data.data.map((card) => {
		return <Card key={card.id} updateState={props.updateState} id={card.id} url={card.url} />;
	});
  return <>{cardArray}</>;
}

export default List

import React, { Component } from 'react'

export default class Form extends Component {
  constructor(props) {
    super()
    this.state = {

    }
  }
  handleChangeValue(event) {
    let name = event.placeholder
    let value = event.value
    
    this.setState({
			[name]: value,
		});
  }

  addNew() {
    this.props.addNewComment(this.state)
  }

  handleAddNewComment() {
    let date = new Date();
    let lengthCommentsArray = this.props.lastComment.comments.length;
    let lastId = this.props.lastComment.comments[lengthCommentsArray - 1].id;
    
		this.setState({
      date: date.getTime(),
      id: lastId + 1
    });
    if (this.state.id) {
      console.log(true);
      
    }
    this.addNew()
  }

  render() {
    return (
			<div className="form">
				<input placeholder="name" type="text" onChange={event => this.handleChangeValue(event.target)} />
				<input placeholder="text" type="text" onChange={event => this.handleChangeValue(event.target)}/>
				<button onClick={() => this.handleAddNewComment()}>Comment</button>
			</div>
		);
  }
}

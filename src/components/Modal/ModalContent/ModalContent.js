import React, { Component } from 'react'
import './ModalContent.css'
import isNil from "lodash/fp/isNil";
import axios from 'axios'
import Form from './Form/Form'

export default class ModalContent extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      data: this.props.data,
    }
    this.handleKeyUp = this.handleKeyUp.bind(this);
    this.handleOutsideClick = this.handleOutsideClick.bind(this);
    this.addNewComment = this.addNewComment.bind(this)
  }

  async axiosBigSizeRequest() {
		await axios
				.get(
					`https://boiling-refuge-66454.herokuapp.com/images/${this.props.id}`
				)
				.then((response) => {
					this.setState({
						data: response.data,
						bigImgUrl: response.data.url,
						isGetting: true,
						commentList: response.data.comments,
					});
				})
				.catch((error) => {
					console.log(error);
				});
	}
  	
	componentDidMount() {
    this.axiosBigSizeRequest();
    window.addEventListener("keyup", this.handleKeyUp, false);
    document.addEventListener("click", this.handleOutsideClick, false);
  }

  componentWillUnmount() {
    window.removeEventListener("keyup", this.handleKeyUp, false);
    document.removeEventListener("click", this.handleOutsideClick, false);
  }

  handleKeyUp(e) {
    const { onCloseRequest } =  this.props;
    const keys = {
      27: () => {
        e.preventDefault();
        onCloseRequest();
        window.removeEventListener("keyup", this.handleKeyUp, false);
      }
    };

    if (keys[e.keyCode]) {
      keys[e.keyCode]();
    }
  }

  handleOutsideClick(e) {
    const { onCloseRequest } =  this.props;

    if (!isNil(this.modal)) {
      if (!this.modal.contains(e.target)) {
        onCloseRequest();
        document.removeEventListener("click", this.handleOutsideClick, false);
      }
    }
  }
  
  commentList() {
    let {comments}  = this.state.data;
    let commentList = []
    for (let i = 0; i < comments.length; i++) {
      const comment = comments[i];
      commentList.push(
        <p key={comment.id}>
				{comment.date} <br />
				{comment.text}
			</p>
      )
    }
    return commentList;
  }

  addNewComment(newComment) {
    let prevList = this.state.commentList
    let newList = prevList.push(newComment)
    this.setState({
      commentList: newList
    })
    console.log(this.state.commentList);
    
  }
  
  render() {
    let { onCloseRequest } = this.props;
    let lastComment = this.state.data;    
		return (
			<div>
				{this.state.isGetting ? (
					<div className="modal">
						<div className="modal-content" ref={(node) => (this.modal = node)}>
							<div className="">
								<img
									className="modal-image"
									src={this.state.bigImgUrl}
									alt={this.state.id}
								/>
								<Form
									lastComment={lastComment}
									addNewComment={this.addNewComment}
								/>
							</div>
							<div className="comment-list">{this.commentList()}</div>

							<button className="close-btn" onClick={() => onCloseRequest()}>
								X
							</button>
						</div>
					</div>
				) : (
					"Loading..."
				)}
			</div>
		);
  }
}

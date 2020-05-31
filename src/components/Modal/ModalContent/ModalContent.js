import React, { Component } from 'react'
import './ModalContent.css'


export default class ModalContent extends Component {
  
  
  checkIsGettingBigPhoto() {
    let isGetting = this.props.isGetting
    return (
			<>{isGetting ? <img src={this.props.bigImgUrl} alt={this.props.id} /> : "Loading..."}</>
		);
  }

  render() {
    return (
      <div className="modal-content">
        {this.checkIsGettingBigPhoto()}
      </div>
    )
  }
}

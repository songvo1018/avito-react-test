import React, { Component } from 'react'
import axios from 'axios'

import './Modal.css'
import ModalContent from './ModalContent/ModalContent';

export default class Modal extends Component {
  constructor() {
		super()
		this.handleToggleModal = this.handleToggleModal.bind(this)
    this.state = {
			showModal: false
		};
  }

  handleToggleModal() {
    this.setState({ showModal: !this.state.showModal });
  }

  

  render() {
    return (
			<div >
				<img
					src={this.props.url}
					alt={this.props.id}
					onClick={() => {
						this.handleToggleModal();
					}}
				/>
				{this.state.showModal && (
					<ModalContent
						onCloseRequest={() => this.handleToggleModal()}
					
						id={this.props.id}
					/>
				)}
			</div>
		);
  }
}

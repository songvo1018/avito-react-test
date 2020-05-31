import React, { Component } from 'react'
import axios from 'axios'
import './Modal.css'
import ModalContent from './ModalContent/ModalContent';

export default class Modal extends Component {
  constructor() {
    super()
    this.state = {
			isOpen: false,
			showModal: false
		};
  }

  handleToggleModal() {
    this.setState({ showModal: !this.state.showModal });
  }

  axiosBigSizeRequest() {
    axios
			.get(`https://boiling-refuge-66454.herokuapp.com/images/${this.props.id}`)
			.then((response) => {
        this.setState({
          data: response.data,
          bigImgUrl: response.data.url,
          isGetting: true
         });
         console.log(response);
         
			})
			.catch((error) => {
				console.log(error);
			});
  }


  // openModal() {
  //   return (
	// 		<div className="overlay">
				
	// 		</div>
	// 	);
  // }

  render() {
    return (
			<div>
				<img
					src={this.props.url}
					alt={this.props.id}
					onClick={() => {
						this.setState({ isOpen: true });
						this.axiosBigSizeRequest();
					}}
				/>
				{this.state.isOpen 
          ? <ModalContent isGetting={this.state.isGetting} bigImgUrl={this.state.bigImgUrl} id={this.props.id}/>
				  : null}
			</div>
		);
  }
}

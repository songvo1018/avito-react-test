import React, { Component } from 'react'
import axios from 'axios'

import List from './List/List'
import './Gallery.css'

export class Gallery extends Component {
  constructor(props) {
        super(props);
        this.state = {
          isGetting: false
        };
        this.updateState = this.updateState.bind(this)
  }

  async axiosSmallSizeRequest() {
    await axios
			.get("https://boiling-refuge-66454.herokuapp.com/images")
			.then((response) => {
        this.setState({
          response,
          isGetting: true
         });
			})
			.catch((error) => {
				console.log(error);
			});
  }

  checkIsGetting() {
    let isGetting = this.state.isGetting
    return (
			<>{isGetting ? <List updateState={this.updateState} data={this.state.response} /> : "Loading..."}</>
		);
  }

  

  updateState(newData) {
    let prevData = this.state.response.data
    console.log(prevData, newData);
    
    // this.setState({
    //   response: newData
    // })
  }

  componentDidMount () {
    this.axiosSmallSizeRequest()
  }
  
  render() {
    return(
      <div className="gallery">
        {this.checkIsGetting()}

      </div>
    )
  }
}

export default Gallery

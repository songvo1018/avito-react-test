import React, { Component } from 'react'
import axios from 'axios'

import List from './List/List'

export class Gallery extends Component {
  constructor(props) {
        super(props);
        this.state = {
          isGetting: false
        };
  }

  axiosRequest() {
    axios
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
    return(
      <>{isGetting ? this.renderListPhotos() : 'Loading...'}</>
    )
  }

  componentDidMount () {
    console.log('before axios');
    this.axiosRequest()
    console.log('after axios');
    
  }

  renderListPhotos() {
    return (
			<div>
				<List data={this.state.response} />
			</div>
		);
    
  }
  
  render() {
    return(
      <div>
        {this.checkIsGetting()}

      </div>
    )
  }
}

export default Gallery

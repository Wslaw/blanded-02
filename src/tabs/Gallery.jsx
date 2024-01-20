import { Component } from 'react';

import * as ImageService from 'service/image-service';
import { Button, SearchForm, Grid, GridItem, Text, CardItem } from 'components';

export class Gallery extends Component {
  state = {
    search: '',
    page: 1,
    
  }
  componentDidUpdate(prevProps, prevState) {
    if (this.state.search !== prevState.search || this.state.page !== prevState.page) {
      this.getImages();
    }
  }
  getImages = async () => {
    try {
      const response = await ImageService.getImages(this.state.search, this.state.page);
      console.log(response)
      
    } catch (error) {
      
    }
  }

  handleSubmit = (search) => {
    this.setState({search});
  }
  render() {
console.log(this.state)

    return (
      <>
        <SearchForm onSubmit={this.handleSubmit} />
        {/* <Text textAlign="center">Sorry. There are no images ... 😭</Text> */}
      </>
    );
  }
}

import { Component } from 'react';

import * as ImageService from 'service/image-service';
import { Button, SearchForm, Grid, GridItem, Text, CardItem } from 'components';

export class Gallery extends Component {
  state = {
    search: '',
    page: 1,
    photos: [],
  };
  componentDidUpdate(prevProps, prevState) {
    if (
      this.state.search !== prevState.search ||
      this.state.page !== prevState.page
    ) {
      this.getImages();
    }
  }
  getImages = async () => {
    try {
      const response = await ImageService.getImages(
        this.state.search,
        this.state.page
      );
      this.setState(prevState => ({
        photos: [...prevState.photos, ...response.photos],
      }));
      console.log(response);
    } catch (error) {}
  };

  handleSubmit = search => {
    this.setState({
      search,
      photos: [],
      page: 1,
    });
  };

  loadMore = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };
  render() {
    console.log(this.state);

    return (
      <>
        <SearchForm onSubmit={this.handleSubmit} />
        <Grid>
          {this.state.photos.map(({ id, avg_color, alt, src }) => {
            return (
              <GridItem key={id}>
                <CardItem color={avg_color}>
                  <img src={src.large} alt={alt} />
                </CardItem>
              </GridItem>
            );
          })}
        </Grid>
        {this.state.photos.length > 0 && (
          <Button onClick={this.loadMore} type="button">
            Load more
          </Button>
        )}
        {this.state.photos.length === 0 && (
          <Text textAlign="center">Sorry. There are no images ... 😭</Text>
        )}
      </>
    );
  }
}

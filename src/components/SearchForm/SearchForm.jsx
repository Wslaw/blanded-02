import { Component } from 'react';

import { FiSearch } from 'react-icons/fi';
import { FormBtn, InputSearch, SearchFormStyled } from './SearchForm.styled';

export class SearchForm extends Component {
  state = {
    search: '',
  };
  onSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state.search);
    this.setState({ search: '' });
  };

  onChange = e => {
    this.setState({ search: e.target.value });
  };
  render() {
    console.log(this.state.search)
    return (
      <SearchFormStyled onSubmit={this.onSubmit}>
        <FormBtn type="submit">
          <FiSearch size="16px" />
        </FormBtn>
        <InputSearch
          onChange={this.onChange}
          placeholder="What do you want to write?"
          name="search"
          value={this.state.search}
          required
          autoFocus
        />
      </SearchFormStyled>
    );
  }
}

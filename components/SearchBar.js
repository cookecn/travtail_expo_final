import * as React from 'react';
import { Searchbar } from 'react-native-paper';

class SearchBarComponent extends React.Component {
  state = {
    searchQuery: '',
  };

  _onChangeSearch = query => this.setState({ searchQuery: query });

  render() {
    const { searchQuery } = this.state;
    return (
      <Searchbar
        placeholder="Search"
        onChangeText={this._onChangeSearch}
        value={searchQuery}
      />
    );
  }
}

export default SearchBarComponent;
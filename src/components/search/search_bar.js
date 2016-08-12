import React, {Component} from 'react';
import ResultList from './result_list';

class SearchBar extends Component{
  constructor(props){
    super(props);

    this.state = {term: '', results: [
      {
        id: 1,
        name: 'Xavier',
        comments: 'Hi'
      },
      {
        id: 2,
        name: 'Martin',
        comments: 'Hello'
      },
      {
        id: 3,
        name: 'Karan',
        comments: 'Olla'
      },
      {
        id: 4,
        name: 'XM',
        comments: 'Namaskar'
      }
    ]};
    /*
    this.setState({
      results: [
        {
          id: 1,
          name: 'Xavier',
          comments: 'Hi'
        },
        {
          id: 2,
          name: 'Martin',
          comments: 'Hello'
        },
        {
          id: 3,
          name: 'Karan',
          comments: 'Olla'
        },
        {
          id: 4,
          name: 'XM',
          comments: 'Namaskar'
        }
      ]
    });
    */
  }

  render(){

    return (
      <div>
        <ResultList results={this.state.results} />
      </div>
    );
  }
}

export default SearchBar;

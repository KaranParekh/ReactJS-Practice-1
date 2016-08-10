import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './SearchBar';

class App extends Component{
  constructor(props){
    super(props);
    this.state = {label: 'Search Term: '};
  }

  render(){
    return (
      <div>
        <SearchBar label={this.state.label}/>
      </div>
    );
  }
}

ReactDOM.render(<App/>, document.getElementById('app'));

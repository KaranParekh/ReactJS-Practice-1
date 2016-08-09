import React, {Component} from 'react';

class SearchBar extends Component{
  constructor(props){
    super(props);
    this.onInputChange = this.onInputChange.bind(this);
    this.state = {term: ''};
  }

  onInputChange(event){
    //console.log(event.target.value);

    //if (isNaN(event.target.value))
      this.setState({term: event.target.value});
  }

  render(){
    return (
      <div>
        <span>{this.props.label}</span>
        <input type="text" name="Search" placeholder="Enter Search Text"
          onChange={this.onInputChange} value={this.state.term}/>

        <span class="label label-info">
            Value of the Input:
        </span>
         {this.state.term}
      </div>
    );
  }
}

export default SearchBar;

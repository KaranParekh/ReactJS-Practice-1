import React, {Component} from 'react';
import Comment from './comment';

class ResultItem extends Component{
  constructor(props){
    super(props);
  }

  render(){
    return(


      <div class="media">
        <div class="media-left">
          Name: {this.props.name}
        </div>
        <div class="media-body">
          <h4 class="media-heading">
            <p>Comment: {this.props.comments}</p>
          </h4>
          <Comment />
        </div>
        <hr/>
      </div>
    );
  }
}

export default ResultItem;

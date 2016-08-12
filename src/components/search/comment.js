import React, {Component} from 'react';
import Likes from './likes';

class Comment extends Component{
  constructor(props){
    super(props);
    this.onClick = this.onClick.bind(this);
    this.state = {commentInput: ''};
  }

  onClick(event){
    if(document.getElementById('commentHere').value.trim() !== '')
      alert(document.getElementById('commentHere').value.trim());

    this.setState({commentInput: document.getElementById('commentHere').value.trim()});
  }

  render(){
    return(
      <div className="media">
        <input id="commentHere" type="text" placeholder="Enter Comments" />
        <button className="glyphicon glyphicon-pencil" onClick={this.onClick}>Comment</button>

        <Likes />
      </div>
    );
  }
}

export default Comment;

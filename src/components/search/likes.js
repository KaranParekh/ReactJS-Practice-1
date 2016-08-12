import React, {Component} from 'react';

class Like extends Component{
  constructor(props){
    super(props);
    this.onClick = this.onClick.bind(this);
    this.state = {likes: ''};
  }

  onClick(event){
    if(!isNaN(document.getElementById('Numlikes').value.trim()))
    {
      alert(document.getElementById('Numlikes').value.trim());
      this.setState({likes: document.getElementById('Numlikes').value.trim()});
    }
  }

  render(){
    return(
      <div className="media">
        <a className="btn btn-default glyphicon glyphicon-thumbs-up"
          style={{float: 'left'}}/>
        <p id="Numlikes">{this.state.likes}</p>
      </div>
    );
  }
}

export default Like;

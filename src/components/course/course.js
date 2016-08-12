import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as courseActions from '../../action/courseActions';

class CoursePage extends Component{
  constructor(props){
    super(props);
    this.onTitleChange = this.onTitleChange.bind(this);
    this.onClickSave = this.onClickSave.bind(this);
    this.state = {
      course: {title: ''}
    };
  }

  onTitleChange(event){
    const course = this.state.course;
    course.title = event.target.value;
    this.setState({course: course});
    //or this.setSate({course});
    //since key and value have same names .... 'ES 6' feature
  }

  onClickSave(event){
    this.props.dispatch(courseActions.createCourse(this.state.course));
  }

  courseRow(course,index){
      return (
        <div key={index}>
          {course.title}
        </div>
      );
  }


  render(){
    return (
      <div>
        <h1>Courses</h1>
        {this.props.courses.map(this.courseRow)}
        <h2>Add Courses</h2>
        <input type="text" onChange={this.onTitleChange}
          value={this.state.course.title} />

        <input type="submit" value="Save" onClick={this.onClickSave} />
      </div>
    );
  }
}

//this state below is the Redux State
function mapStoreToProps(state, ownProps){
  return {
    courses: state.courses
  };
}


export default connect(mapStoreToProps)(CoursePage);

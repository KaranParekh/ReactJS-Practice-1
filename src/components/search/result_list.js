import React, {Component} from 'react';
import ResultItem from './result_item';

class ResultList extends Component{
  constructor(props){
    super(props);
  }

  render(){
    const results = this.props.results.map((result) => {
      return(
        <div>
          <ResultItem name={result.name} comments={result.comments}
            key={result.id} />
        </div>
      );
    });

    //const data = this.props.results;

    return(
      <div>
        {results}
      </div>
    );
  }
}

export default ResultList;

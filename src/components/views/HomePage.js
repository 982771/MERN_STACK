import React, {Component} from 'react';
import {connect} from 'react-redux';

class HomePage extends Component{
  constructor(props,context){
    super(props,context);
    this.state={
    };
  }

  render(){
    return(
      <div>
        <h1>Home Page</h1>
      </div>
    );
  }
}

function mapStateToProps(state,ownProps){
  return {
    logs: state.logs
  };
}

export default connect(mapStateToProps)(HomePage);

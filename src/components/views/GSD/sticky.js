import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as StickyActions from '../../../actions/stickyActions';

class Sticky extends Component {
  constructor(props, context) {
    super(props, context);
    this.state={
      text: ''
    }
  }
  render(){
    return(
      <div className="sticky" style={{height: '200px', width: '200px'}}>
      </div>
    )
  }
}

function mapStateToProps(state,ownProps){
  return {
    text: state.text,
  }
}

export default connect(mapStateToProps, StickyActions)(Sticky);

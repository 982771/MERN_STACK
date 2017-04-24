import React, {Component} from 'react';
import {connect} from 'react-redux';
import $ from 'jquery';
import {browserHistory} from 'react-router';
let activeGameid = false;

class EnsureLoggedInContainer extends Component {
  constructor(props, context) {
    super(props, context);
    const {currentURL } = this.props;
    $.when(
      $.get('api/retro/'+currentURL.query.gameid, function(data){
        console.log(data);
        if (data !=null)
          activeGameid = true;
      })
    ).then(function (){
      if(!activeGameid)
          browserHistory.replace('/');
    });

  }

  render() {
      return this.props.children
  }
}

// Grab a reference to the current URL. If this is a web app and you are
// using React Router, you can use `ownProps` to find the URL. Other
// platforms (Native) or routing libraries have similar ways to find
// the current position in the app.
function mapStateToProps(state, ownProps) {
  return {
    currentURL: ownProps.location
  }
}

export default connect(mapStateToProps)(EnsureLoggedInContainer)

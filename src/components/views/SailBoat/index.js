import React, {Component} from 'react';
import {connect} from 'react-redux';
import $ from 'jquery';
import * as SailBoatActions from '../../../actions/gsdActions';
//import env from '../../environment';
//import init from '../../../tools/init';
//import ComingSoonImg from '../../images/wip.png';
const divStyle = {
	display: 'block',
  backgroundColor: '#FAD1B7'
};


class GSDIndexPage extends Component{
  constructor(props, context) {
    super(props, context);
    this.state = {
      dataFetchComplete: false
    };
  }
  componentDidMount() {
    const propObject = this;
    $.get('api/sailboat/'+this.props.currentURL.query.gameid, function(data){
      propObject.props.getGSD(data);
      propObject.setState({dataFetchComplete: true});
    })
  }

  render(){
    console.log(this.props.sailboat);
    if(this.state.dataFetchComplete)
    {
      return (
        <div>Sailboat
          <div>{this.props.sailboat.retro.project_name}</div>
        </div>

      )
    }
    else return null;

  }
}

function mapStateToProps(state,ownProps){
  return {
    sailboat: state.sailboat,
    currentURL: ownProps.location
  }
}

export default connect(mapStateToProps, SailBoatActions)(GSDIndexPage);

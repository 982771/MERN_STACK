import React, {Component} from 'react';
import {connect} from 'react-redux';
import { findDOMNode } from 'react-dom';
import $ from 'jquery';
import * as GSDActions from '../../../actions/gsdActions';
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
      dataFetchComplete: false,
			glad: {
				story: '',
				created_by: '',
			}
    };
		this.gladList = this.gladList.bind(this);
		this.onCommentChange = this.onCommentChange.bind(this);
		this.onGladSubmit =this.onGladSubmit.bind(this);
  }

  componentDidMount() {
    const propObject = this;
    $.get('api/gsd/'+this.props.currentURL.query.gameid, function(data){
      propObject.props.getGSD(data);
      propObject.setState({dataFetchComplete: true});
    })

		$.ajax({
            url: 'http://home.intranet.mckinsey.com/ksapi/person/current_user?callback=JSON_CALLBACK',
            method: 'GET',
            dataType: 'JSONP',
            success: function(response) {
							const glad = propObject.state.glad;
							glad.created_by = response.ads_login_name;
							propObject.setState({glad: glad});
            }
        })
  }

	gladList(glad, index){
		return(
			<li  key={index} className="list-group-item">{glad.story}</li>
		);
	}
	onCommentChange(event){
		const glad = this.state.glad;
		glad.story = event.target.value;
		this.setState({glad: glad});

	}

	onGladSubmit(){
		const propObject = this.props;
		$.ajax({
			type: "POST",
			url: "api/glad/"+this.props.currentURL.query.gameid,
			data: this.state.glad,
			success: function (response){
				propObject.createGlad(response);
			}
		})
	}

  render(){
    if(this.state.dataFetchComplete)
    {
      return (
				<div className="gladSadMadContainer">
					<div className="modal fade" ref="gladSubmit" id="myModal" role="dialog">
						<div className="modal-dialog">
							<div className="modal-content">
							  <div className="modal-header">
							    <button type="button" className="close" data-dismiss="modal">&times;</button>
							  	<h4 className="modal-title">Add a GLAD comment</h4>
							  </div>
							  <div className="modal-body">
							    <div className="form-group">
							      <label htmlFor="comment">Comment:</label>
							      <input type="textarea" className="form-control" id="comment" ref="comment" onChange={this.onCommentChange} />
							    </div>
							    <button id="submitSolarCellForm" type="submit" className="btn btn-default" data-dismiss="" onClick={this.onGladSubmit}>	Submit
							    </button>
							  </div>
							</div>
						</div>
					</div>
			    <div className="GSDBody">
		    		<div className="row col-md-12 projectName ">
			      		<h1>{this.props.gsd.retro.project_name}</h1>
			      </div>

				    <div className="row">
					    <div className="col-md-5 gladContainer">
						    <div className="gladHeader">
						      <h2 className="glad">
						      	GLAD
						      </h2>
						      <button type="button" className="btn btn-default btn-sm"  data-toggle="modal" data-target="#myModal">
						        <span className="glyphicon glyphicon-plus"></span> Plus
						      </button>
						    </div>
						    <div className="gladList">
									<ul className="list-group">
										{this.props.gsd.glad.map(this.gladList)}
									</ul>
						    </div>
							</div>
				    	<div className="col-md-offset-2 col-md-5" >
								<div className="sadHeader">
				      		<h2 className="sad">
				      			SAD
				      		</h2>
									<button type="button" className="btn btn-default btn-sm" data-toggle="modal" data-target="#myModal">
							     	<span className="glyphicon glyphicon-plus"></span> Plus
							    </button>
								</div>
			      		<div className="sadList">
			      		</div>
				    	</div>
				    </div>

				    <div className="row col-md-12 house">
						</div>

						<div className="row">
					    <div className="col-md-offset-4 col-md-5" >
								<div className="madHeader">
									<h2 className="mad">
										MAD
									</h2>
									<button type="button" className="btn btn-default btn-sm" data-toggle="modal" data-target="#myModal">
							     	<span className="glyphicon glyphicon-plus"></span> Plus
							    </button>
								</div>
					      <div className="madList">
					      </div>
					    </div>
				    </div>
				</div>
			</div>
      )


    }
    else return null;

  }
}

function mapStateToProps(state,ownProps){
  return {
    gsd: state.gsd,
    currentURL: ownProps.location
  }
}

export default connect(mapStateToProps, GSDActions)(GSDIndexPage);

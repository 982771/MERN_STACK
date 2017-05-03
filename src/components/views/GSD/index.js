import React, {Component} from 'react';
import {connect} from 'react-redux';
import { findDOMNode } from 'react-dom';
import $ from 'jquery';
import * as GSDActions from '../../../actions/gsdActions';
import {Sticky} from './sticky';
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
			},
			sad: {
				story: '',
				created_by: '',
			},
			mad: {
				story: '',
				created_by: '',
			}
    };
		this.gladList = this.gladList.bind(this);
		this.onGladCommentChange = this.onGladCommentChange.bind(this);
		this.onGladSubmit =this.onGladSubmit.bind(this);

		this.sadList = this.sadList.bind(this);
		this.onSadCommentChange = this.onSadCommentChange.bind(this);
		this.onSadSubmit =this.onSadSubmit.bind(this);

		this.madList = this.madList.bind(this);
		this.onMadCommentChange = this.onMadCommentChange.bind(this);
		this.onMadSubmit = this.onMadSubmit.bind(this);

		this.showSticky = this.showSticky.bind(this);
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

	showSticky(event) {
		alert('sticky');
		event.preventDefault();
	}

	gladList(glad, index){
		return(
			<li key={index} className="list-group-item gladListItem">
				<a className="gladLink" href="#" onClick={this.showSticky}>
	        <p className="gladText">{glad.story}</p>
	      </a>
			</li>
		);
	}
	onGladCommentChange(event){
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
		this.setState({glad: {story:'', created_by:''}});
	}

	sadList(sad, index){
		return(
			<li key={index} className="list-group-item sadListItem">
			<a className="sadLink" href="#">
				<p className="sadText">{sad.story}</p>
			</a>
			</li>
		);
	}
	onSadCommentChange(event){
		const sad = this.state.sad;
		sad.story = event.target.value;
		this.setState({sad: sad});

	}

	onSadSubmit(){
		const propObject = this.props;
		$.ajax({
			type: "POST",
			url: "api/sad/"+this.props.currentURL.query.gameid,
			data: this.state.sad,
			success: function (response){
				propObject.createSad(response);
			}
		})
		this.setState({sad: {story:'', created_by:''}});
	}


	madList(mad, index){
		return(
			<li  key={index} className="list-group-item madListItem">
			<a className="madLink" href="#">
				<p className="madText">{mad.story}</p>
			</a>
			</li>
		);
	}
	onMadCommentChange(event){
		const mad = this.state.mad;
		mad.story = event.target.value;
		this.setState({mad: mad});

	}

	onMadSubmit(){
		const propObject = this.props;
		$.ajax({
			type: "POST",
			url: "api/mad/"+this.props.currentURL.query.gameid,
			data: this.state.mad,
			success: function (response){
				propObject.createMad(response);
			}
		})
		this.setState({mad: {story:'', created_by:''}});
	}

  render(){
    if(this.state.dataFetchComplete)
    {
      return (
				<div className="gladSadMadContainer">
					<div className="modal fade" ref="gladSubmit" id="jerryModal" role="dialog">
	          <div className="modal-dialog">
	            <img src={require("../../../images/gsd/images/Jerry_2.png")} id="jerryModal"/>
	            <div className="modal-content">
	              <div className="modal-header">
	                  <button type="button" className="close" data-dismiss="modal">&times;</button>
	                  <h4 className="modal-title">Add a GLAD comment</h4>
	              </div>
	              <div className="modal-body">
	                  <div className="form-group">
	                    <label htmlFor="gladComment">Comment:</label>
											<input type="textarea" className="form-control" value={this.state.glad.story} id="gladComment" onChange={this.onGladCommentChange} />
										</div>
										<button id="onGladSubmit" type="submit" className="btn btn-default" data-dismiss="modal" onClick={this.onGladSubmit}>	Submit
  							    </button>
	              </div>
	            </div>
	          </div>
	        </div>
	        <div className="modal fade" ref="sadSubmit" id="tomModal" role="dialog">
	          <div className="modal-dialog">
	            <img src={require("../../../images/gsd/images/Tom_2.png")} id="tomModal"/>
	            <div className="modal-content">
	              <div className="modal-header">
	                  <button type="button" className="close" data-dismiss="modal">&times;</button>
	                  <h4 className="modal-title">Add a SAD comment</h4>
	              </div>
	              <div className="modal-body">
	                  <div className="form-group">
	                    <label htmlFor="sadComment">Comment:</label>
	                    <input type="textarea" className="form-control" value={this.state.sad.story} id="sadComment" onChange={this.onSadCommentChange} />
	                  </div>
	                  <button id="onSadSubmit" type="submit" className="btn btn-default" data-dismiss="modal" onClick={this.onSadSubmit}>  Submit
										</button>
	              </div>
	            </div>
	          </div>
	        </div>
	        <div className="modal fade" ref="madSubmit" id="brunoModal" role="dialog">
	          <div className="modal-dialog">
	            <img src={require("../../../images/gsd/images/Bruno_2.png")} id="brunoModal"/>
	            <div className="modal-content">
	              <div className="modal-header">
	                  <button type="button" className="close" data-dismiss="modal">&times;</button>
	                  <h4 className="modal-title">Add a MAD comment</h4>
	              </div>
	              <div className="modal-body">
	                  <div className="form-group">
	                    <label htmlFor="madComment">Comment:</label>
	                    <input type="textarea" className="form-control" value={this.state.mad.story} id="madComment"  onChange={this.onMadCommentChange} />
	                  </div>
	                  <button id="onMadSubmit" type="submit" className="btn btn-default" data-dismiss="modal" onClick={this.onMadSubmit}>  Submit
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
							<div className="col-md-1">
								<img src={require("../../../images/gsd/images/jerry.png")} className="jerryImage"/>
							</div>
					    <div className="col-md-4 gladContainer">
						    <div className="gladHeader">
						      <h2 className="glad">
						      	GLAD
						      </h2>
						      <button type="button" className="btn btn-default btn-sm"  data-toggle="modal" data-target="#jerryModal">
						        <span className="glyphicon glyphicon-plus"></span> Plus
						      </button>
						    </div>
						    <div className="gladList">
									<ul className="list-group">
										{this.props.gsd.glad.map(this.gladList)}
									</ul>
						    </div>
							</div>
				    	<div className="col-md-offset-1 col-md-4" >
								<div className="sadHeader">
				      		<h2 className="sad">
				      			SAD
				      		</h2>
									<button type="button" className="btn btn-default btn-sm" data-toggle="modal" data-target="#tomModal">
							     	<span className="glyphicon glyphicon-plus"></span> Plus
							    </button>
								</div>
			      		<div className="sadList">
									<ul className="list-group">
										{this.props.gsd.sad.map(this.sadList)}
									</ul>
			      		</div>
				    	</div>
							<div className="col-md-1" >
			        	<img src={require("../../../images/gsd/images/tom.png")} className="tomImage"/>
			        </div>
				    </div>

						<div className="row madRow">
							<div className=" col-md-1" >
								<img src={require("../../../images/gsd/images/bruno.gif")} className="brunoImage"/>
							</div>
					    <div className="col-md-offset-3 col-md-4" >
								<div className="madHeader">
									<h2 className="mad">
										MAD
									</h2>
									<button type="button" className="btn btn-default btn-sm" data-toggle="modal" data-target="#brunoModal">
							     	<span className="glyphicon glyphicon-plus"></span> Plus
							    </button>
								</div>
					      <div className="madList">
									<ul className="list-group">
										{this.props.gsd.mad.map(this.madList)}
									</ul>
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

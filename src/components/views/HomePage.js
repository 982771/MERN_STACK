
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {browserHistory} from 'react-router';

class HomePage extends Component{
  constructor(props,context){
    super(props,context);
    this.state={
      retro:{
        type: '',
        created_by: '',
        project_name: ''
      }
    };
    this.onSelectChange = this.onSelectChange.bind(this);
    this.createSession = this.createSession.bind(this);
    this.onProjectNameChange = this.onProjectNameChange.bind(this);
  }

  componentDidMount() {
    const propObject = this;
    $.ajax({
            url: 'http://home.intranet.mckinsey.com/ksapi/person/current_user?callback=JSON_CALLBACK',
            method: 'GET',
            dataType: 'JSONP',
            success: function(response) {
              let retro = propObject.state.retro;
              retro.created_by = response.ads_login_name;
              propObject.setState({retro: retro});
            }
        })
  }

  onSelectChange (event) {
    let retro = this.state.retro;
    retro.type = event.target.value;
    this.setState({retro: retro});
  }

  onProjectNameChange(event){
    let retro = this.state.retro;
    retro.project_name = event.target.value;
    this.setState({retro: retro});
  }

  createSession(){
    $.ajax({
      type: "POST",
      url: 'api/retro',
      data: this.state.retro,
      success: function(data){
        $.ajax({
          type: "POST",
          url: 'api/'+data.type+'/'+data._id,
          success: function(response){
            browserHistory.replace(data.type+'?gameid='+data._id);
          }
        })
      },
      error: function(data){
        alert('error');
      }
    });
  }

  render(){
    return(
      <div>
        <h1>Home Page</h1>
        <div className="form-group">
          <input className="form-control project_name" ref="projectName" id="projectName" onChange={this.onProjectNameChange} />
          <label>Choose from the available themes for retrodea:</label>
          <select className="form-control" id="themes" onChange = {this.onSelectChange}>
            <option>Select</option>
            <option value="gsd" >GLAD SAD MAD</option>
            <option value="sailboat">Sailboat</option>
          </select>
        </div>
        <button className="btn btn-primary" onClick={this.createSession}  id="save" value="save" >Create</button>
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

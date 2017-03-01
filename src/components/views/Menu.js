import React, {Component} from 'react';
import {Link, IndexLink} from 'react-router';
import $ from 'jquery';

class ComponentName extends Component{
  constructor(props, context) {
    super(props, context);
    this.state = {
      active: ' '
    };
    this.toggle = this.toggle.bind(this);
  }

  componentDidMount() {
    this.setState({
      active: 'home'
    });
  }

  toggle(value) {
    this.setState({
      active: value
    });
  }

  render(){
    return(
          <div>
            <ul className="nav nav-pills">
              <li className={(this.state.active === 'home') ? "active" : ""} onClick={()=>{this.toggle('home')}}><IndexLink to="/">Home</IndexLink></li>
              <li className={(this.state.active === 'admin') ? "active" : ""} onClick={()=>{this.toggle('admin')}}><Link to="/admin">Admins</Link></li>
              <li><Link to="">Menu 2</Link></li>
              <li><Link to="">Menu 3</Link></li>
            </ul>
          </div>
          );
  }
}

export default ComponentName;

import React, {Component} from 'react';
//import Menu from './views/Menu';
import styles from '../css/main.css';
import $ from 'jquery';

class App extends Component{
  render() {
    return(
      <div>
        <header className="container-fluid col-md-12">
            <h1>Welcome to Mern Stack</h1>
        </header>
        <div className = "col-md-12 col-xs-12 col-xl-12 mainContainer">
            {this.props.children}
        </div>

      </div>
    );
  }
}

export default App;

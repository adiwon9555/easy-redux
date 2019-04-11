import React, { Component } from 'react';
import './App.css';
import List from './js/components/List';
import Form from './js/components/Form';
import Posts from './js/components/Posts';

class App extends Component {
  render() {
    return (
      <div className="row mt-5">
        <div className="col-md-4 offset-md-1">
          <h2>Articles</h2>
          <List/>
        </div>
        <div className="col-md-4 offset-md-1">
          <h2>Add new Article</h2>
          <Form/>
        </div>
        <div className="col-md-4 offset-md-1">
          <h2>Remote Articles</h2>
          <Posts/>
        </div>
        
      </div>
    );
  }
}

export default App;

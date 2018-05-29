import React, { Component } from 'react';
import Stream from './Stream';
import Collection from './Collection';

const Application = () => (
  <div className="container-fluid">
    <div className="row">
      <div className="col-md-4 text-center">
        <Stream />
      </div>
      <div className="col-md-8">
        <Collection />
      </div>
    </div>
  </div>
);

export default Application;

/* class Application extends Component {
  render() {
    console.log("Application.js has been rendered");

    const {
      collectionTweets
    } = this.state;

    console.log("Application.js is rendering both Stream.js and Collection.js");

    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-4 text-center">
            <Stream />
          </div>
          <div className="col-md-8">
            <Collection />
          </div>
        </div>
      </div>
    );
  }
}

export default Application;
*/
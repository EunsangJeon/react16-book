import React, { Component } from 'react';
import Stream from './Stream';
import Collection from './Collection';

class Application extends Component {
  state = {
    collectionTweets: {}
  }

  addTweetToCollection = (tweet) => {
    const { collectionTweets } = this.state;

    collectionTweets[tweet.id] = tweet;

    this.setState({
      collectionTweets: collectionTweets
    });
  }

  removeTweetFromCollection = (tweet) => {
    const { collectionTweets } = this.state;

    delete collectionTweets[tweet.id];

    this.setState({
      collectionTweets: collectionTweets
    });
  }

  removeAllTweetsFromCollection = () => {
    this.setState({
      collectionTweets: {}
    });
  }

  render() {
    console.log("Application.js has been rendered");
    const {
      addTweetToCollection,
      removeTweetFromCollection,
      removeAllTweetsFromCollection
    } = this;
    console.log("Application.js is rendering both Stream.js and Collection.js");
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-4 text-center">
            <Stream onAddTweetToCollection={addTweetToCollection}/>
          </div>
          <div className="col-md-8">
            <Collection
              tweets={this.state.collectionTweets}
              onRemoveTweetFromCollection={removeTweetFromCollection}
              onRemoveAllTweetsFromCollection={removeAllTweetsFromCollection}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Application;

import React, { Component } from 'react';
import SnapkiteStreamClient from 'snapkite-stream-client';
import StreamTweet from './StreamTweet';
import Header from './Header';

class Stream extends Component {
  state = {
    tweet: null
  }

  componentDidMount() {
    SnapkiteStreamClient.initializeStream(this.handleNewTweet);
    console.log("SnapkiteStreamClient.initializeStream(this.handleNewTweet) on Stream.js");
  }

  componentWillUnmount() {
    SnapkiteStreamClient.destroyStream();
  }

  handleNewTweet = (tweet) => {
    this.setState({
      tweet: tweet
    });
  }

  render() {
    console.log("Stream.js has been rendered");
    const { tweet } = this.state;
    const { onAddTweetToCollection } = this.props;
    const headerText = 'Waiting for public photos from Twitter...';

    if (tweet) {
      console.log("Stream.js renders StreamTweet as it has [tweet]");
      return (
        <StreamTweet
          tweet={tweet}
          onAddTweetToCollection={onAddTweetToCollection}
        />
      );
    }
    console.log("Stream.js renders Header.js with 'waiting photo' message since it doesn't have [tweet]");
    return (
      <Header text={headerText}/>
    );
  }
}

export default Stream;

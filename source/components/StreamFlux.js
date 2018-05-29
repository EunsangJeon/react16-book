import React, { Component } from 'react';
import StreamTweet from './StreamTweet';
import Header from './Header';
import TweetStore from '../stores/TweetStore'

class Stream extends Component {
  state = {
    tweet: TweetStore.getTweet()
  }

  componentDidMount() {
    TweetStore.addChangeListener(this.onTweetChange);
  }

  componentWillUnmount() {
    TweetStore.removeChangeListener(this.onTweetChange);
  }

  onTweetChange = () => {
    this.setState({
      tweet: TweetStore.getTweet()
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
        <StreamTweet tweet={tweet}/>
      );
    }
    console.log("Stream.js renders Header.js with 'waiting photo' message since it doesn't have [tweet]");
    return (
      <Header text={headerText}/>
    );
  }
}

export default Stream;

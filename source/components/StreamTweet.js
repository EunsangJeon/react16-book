import React, { Component } from 'react';
import Header from './Header';
import Tweet from './Tweet';
import ReactDOM from 'react-dom';

class StreamTweet extends Component {
  componentWillMount() {
    console.log('[Snapterest] StreamTweet: 1. RunningcomponentWillMount()');
    
    this.setState({
      numberOfCharactersIsIncreasing: true,
      headerText: 'Latest public photo from Twitter'
    });
    
    window.snapterest = {
      numberOfReceivedTweets: 1,
      numberOfDisplayedTweets: 1
    }
  }
  
  componentDidMount = () => {
    console.log('[Snapterest] StreamTweet: 3. Running componentDidMount()');

    const componentDOMRepresentation = ReactDOM.findDOMNode(this);

    window.snapterest.headerHtml = componentDOMRepresentation.children[0].outerHTML;
    window.snapterest.tweetHtml = componentDOMRepresentation.children[1].outerHTML;
  }

  componentWillUnmount() {
    console.log('[Snapterest] StreamTweet: 8. Running componentWillUnmount()');

    delete window.snapterest;
  }

  render() {
    console.log('[Snapterest] StreamTweet: Running render()');
    
    const { headerText } = this.state;
    const { tweet, onAddTweetToCollection } = this.props;

    return (
      <section>
        <header text={headerText} />
        <Tweet
          tweet={tweet}
          onImageClick={onAddTweetToCollection}
        />
      </section>
    );
  }
}

export default StreamTweet

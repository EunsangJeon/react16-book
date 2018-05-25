import React, { Component } from 'react';
import ReactDOMServer from 'react-dom/server';
import CollectionControls from './CollectionControls';
import TweetList from './TweetList';
import Header from './Header';

class Collection extends Component {

  createHtmlMarkupStringOfTweetList() {
    const htmlString = ReactDOMServer.renderToStaticMarkup(
      <TweetList tweets={this.props.tweets}/>
    );

    const htmlMarkup = {
      html: htmlString
    };

    return JSON.stringify(htmlMarkup);
  }

  getListOfTweetIds = () =>
    Object.keys(this.props.tweets)

  getNumberOfTweetsInCollection = () =>
    this.getListOfTweetIds().length

  render() {
    console.log("Collection.js has been rendered");
    const numberOfTweetsInCollection = this.getNumberOfTweetsInCollection();

    if (numberOfTweetsInCollection > 0) {
      console.log("Collection.js is rendering CollectionControls.js and TweetList.js as [numberOfTweetsInCollection] is bigger than 0");
      const htmlMarkup = this.createHtmlMarkupStringOfTweetList();
      const tweets = this.props.tweets;
      const removeAllTweetsFromCollection = this.props.onRemoveAllTweetsFromCollection;
      const handleRemoveTweetFromCollection = this.props.onRemoveTweetFromCollection;

      return (
        <div>
          <CollectionControls
            numberOfTweetsInCollection={numberOfTweetsInCollection}
            htmlMarkup={htmlMarkup}
            onRemoveAllTweetsFromCollection={removeAllTweetsFromCollection}
          />
          <TweetList
            tweets={tweets}
            onRemoveTweetFromCollection={handleRemoveTweetFromCollection}
          />
        </div>
      );
    }
    console.log("Collection.js is rendering Header.js with message 'empty' as [numberOfTweetsInCollection] is 0");
    return <Header text="Your collection is empty"/>;
  }
}

export default Collection;

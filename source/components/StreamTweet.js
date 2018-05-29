import React from 'react';
import {connect} from 'react-redux';
import ReactDOM from 'react-dom';
import Header from './Header';
import Tweet from './Tweet';
import store from '../stores';
import { addTweetToCollection } from '../actions';

class StreamTweet extends React.Component {
  render() {
    const { tweet, onImageClick } = this.props;

    return (
      <section>
        <Header text="Latest public photo from Twiiter"/>
        <Tweet
          tweet={tweet}
          onImageClick={onImageClick}
        />
      </section>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = (dispatch, ownProps) => {
  onImageClick: () => {
    dispatch(addTweetToCollection(ownProps.tweet));
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StreamTweet);
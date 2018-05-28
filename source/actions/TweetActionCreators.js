import AppDispatcher from '../dispatcher/AppDispatcher';

function receiveTweet(tweet) {
  console.log("I've received a new tweet and now will dispatch it together with a new action.");
  const action = {
    type: 'receive_tweet',
    tweet
  };

  AppDispatcher.dispatch(action);
}

export { receiveTweet };

import TweetUtils from './TweetUtils';

function getNumberOfTweetsInCollection(collection) {
  const listOfCollectionTweetsIds = TweetUtils.getListOfTweetIds(collection);

  return listOfCollectionTweetsIds.length;
}

function isEmptyCollection(collection) {
  return getNumberOfTweetsInCollection(collection) === 0;
}

export default {
  getNumberOfTweetsInCollection,
  isEmptyCollection
};

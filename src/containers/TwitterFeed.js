import React from 'react';
import Tweet from '../components/Tweet'

const TwitterFeed = (props) => {
  const twitterMap = props.data.map((twitterObj) => {
    return(
      <Tweet
        key={twitterObj.id_str}
        text={twitterObj.text}
        user={twitterObj.user}
        retweet_count={twitterObj.retweet_count}
        favorite_count={twitterObj.favorite_count}
        entities={twitterObj.entities}
        liked={twitterObj.liked}
        retweeted={twitterObj.retweeted}
        timestamp_ms={twitterObj.timestamp_ms}
      />
    );
  })
  return(
    <div className="container">
      {twitterMap}
    </div>
  )
};

export default TwitterFeed;

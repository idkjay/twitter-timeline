import React from 'react';


const Tweet = (props) => {
  let media;
  let url;
  let userText;
  let retweetIcon;
  let likeIcon;

  const pfp = props.user.profile_image_url
  const name = props.user.name
  const handle = props.user.screen_name
  const text = props.text
  const entities = props.entities
  const retweet_count = props.retweet_count
  const favorite_count = props.favorite_count
  const date = new Date(parseInt(props.timestamp_ms))
  const postDate = date.toLocaleString('default', {month: 'short', day: 'numeric'})

  const reply = event => {
    prompt('Leave a reply.')
  };

  const retweet = event => {
    alert('Retweeted!')
  };

  const like = event => {
    alert('Liked!')
  };

  const more = event => {
    alert('More.')
  };

  if (props.retweeted === true) {
    retweetIcon = <i className="fas fa-retweet retweeted" onClick={retweet}><span>{props.retweet_count}</span></i>
  } else {
    retweetIcon = <i className="fas fa-retweet" onClick={retweet}><span>{props.retweet_count}</span></i>
  }

  if (props.liked === true) {
    likeIcon = <i className="fas fa-heart heart liked" onclick={like}><span> {props.favorite_count}</span></i>
  } else {
    likeIcon = <i className="fas fa-heart" onClick={like}><span>{props.favorite_count}</span></i>
  }


  if(props.entities.media !== undefined) {
    props.entities.media.forEach(mediaObj => {
      url = mediaObj.display_url
      media = <img src={mediaObj.media_url} width="100%"/>
    })
  }

  if(props.text.includes(url)) {
    userText = props.text.replace(url, '')
  } else {
    userText = props.text
  }

  return (
    <div className="bigdiv">
      <div className="row callout" >
        <div className="media-object">
          <div className="media-object-section">

            <div className="thumbnail">
              <img src={pfp} />
            </div>

          </div>

          <div className="media-object-section">
            <span>{name}</span>
            <span className="handle"> @{handle} • {postDate} </span>

            <p>{userText}</p>
            {media}
          </div>

          <div className="icon">
            <div className="columns small-8">

              <div className="columns small-3">
                <i className="fas fa-reply" onClick={reply}></i>
              </div>

              <div className="columns small-3">
                {retweetIcon}
              </div>

              <div className="columns small-3">
                {likeIcon}
              </div>

              <div className="columns small-3">
                <i className="fas fa-ellipsis-h" onClick={more}></i>
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  )
}


export default Tweet;

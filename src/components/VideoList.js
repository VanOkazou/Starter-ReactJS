import React from 'react';

import VideoListItem from './VideoListItem';

function VideoList(props) {

  const videoItems = props.videos.map((video, key) => {
    return(
      <VideoListItem
        active={`${props.indexCurrentVideo == key ? 'yes' : 'no'}`}
        key={video.etag}
        video={video}
        changeVideo={props.changeVideo}
        changeIndexCurrentVideo={props.changeIndexCurrentVideo}
        index={key}
      />
    );
  });

  return (
    <div className="col-md-4">
      <ul className="list-group">
        {videoItems}
      </ul>
    </div>
  );
}

export default VideoList;

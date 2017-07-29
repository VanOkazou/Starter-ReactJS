import React from 'react';

const VideoListItem = ({video, changeVideo, active, index, changeIndexCurrentVideo}) => {

  const handleClick = () => {
    changeVideo(video);
    changeIndexCurrentVideo(index);
  }

  return (
    <li className={`list-group-item ${active === 'yes' ? 'active' : ''}`} onClick={() => handleClick()}>
      <div className="video-list media">
        <div className="media-left">
          <img src={video.snippet.thumbnails.default.url} alt={video.snippet.title} className="media-object"/>
        </div>
        <div className="media-body">
          <div className="media-heading">
            {video.snippet.title}
          </div>
        </div>
      </div>
    </li>
  );
}

export default VideoListItem;

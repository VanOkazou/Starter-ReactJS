import React from 'react';

function VideoDetail({video}) {

  if(!video){
    return <div>Loading...</div>
  }

  const url = `https://www.youtube.com/embed/${video.id.videoId}`;
  return (
    <div className="video-detail col-md-8">
      <div className="embed-responsive embed-responsive-16by9">
        <iframe src={url} frameBorder="0" className="embed-responsive-item"></iframe>
      </div>
      <br/>
      <div className="details">
        <h2>
          {video.snippet.title}
        </h2>
        <p className="description">
          {video.snippet.description}
        </p>
      </div>
    </div>
  );
}

export default VideoDetail;

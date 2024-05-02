import React from 'react';
import './VideoYoutube.css';

const VideoYoutube = ({ titre, videoId, footerText }) => {
  return (
    <div className="conteneur-video">
      <div className="titleVideo">
        <h2>Inspirez-vous des meilleurs !</h2>
      </div>
      <div className="video">
        <iframe
          width="100%" 
          height="500" 
          src={`https://www.youtube.com/watch?v=54SjaE0Z29c`}
          title={titre} 
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
      <div className="video-footer">
        {footerText} Video exclusive des débuts d’Usain Bolt
      </div>
    </div>
  );
}

export default VideoYoutube;

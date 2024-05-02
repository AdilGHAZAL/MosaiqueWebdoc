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
          width="100%" // Use percentage for responsive width
          height="500" // Set a fixed height or use CSS to control
          src={`https://www.youtube.com/embed/${videoId}`}
          title={titre} // Use dynamic title
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

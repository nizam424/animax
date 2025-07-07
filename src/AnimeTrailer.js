import React, { useState, useEffect } from 'react';
import YouTube from 'react-youtube';

const AnimeTrailer = ({ animeName }) => {
  const [trailerKey, setTrailerKey] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTrailer = async () => {
      try {
        setLoading(true);
        const YOUTUBE_API_KEY = process.env.REACT_APP_YOUTUBE_API_KEY;
        const searchQuery = `${animeName} anime trailer`;
        
        const response = await fetch(
          `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=1&q=${encodeURIComponent(searchQuery)}&type=video&key=${YOUTUBE_API_KEY}`
        );
        
        const data = await response.json();
        
        if (data.items && data.items.length > 0) {
          setTrailerKey(data.items[0].id.videoId);
        } else {
          setError('No trailer found');
        }
      } catch (err) {
        setError('Failed to fetch trailer');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    if (animeName) {
      fetchTrailer(); 
    }
  }, [animeName]);

  const opts = {
    height: '390',
    width: '640',
    playerVars: {
      autoplay: 0,
    },
  };

  if (loading) return <div>Loading trailer...</div>;
  if (error) return <div>{error}</div>;
  if (!trailerKey) return null;

  return (
    <div className="anime-trailer">
      <h3 className = "h1">Trailer</h3>
      <YouTube 
        videoId={trailerKey} 
        opts={opts} 
      />
    </div>
  );
};

export default AnimeTrailer;
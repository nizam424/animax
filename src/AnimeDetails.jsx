import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import AnimeTrailer from "./AnimeTrailer"; 

const AnimeDetails = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const anime = location.state?.anime;
    const [isPlaying, setIsPlaying] = useState(false);
    const [showTrailer, setShowTrailer] = useState(false);

    if (!anime) {
        return <p>No anime data found</p>;
    }

    const handlePlayClick = () => {
        setShowTrailer(true);
        setIsPlaying(true);
    };

    return (
        <div className={`anime-details ${isPlaying ? 'playing' : ''}`}>
            <h2>{anime.title}</h2>
            <img src={anime.poster} alt={anime.title} />
            <p><strong>Year:</strong> {anime.year}</p>
            <p><strong>Type:</strong> {anime.type}</p>
            <p><strong>Synopsis:</strong> {anime.synopsis}</p>
            <button onClick={() => navigate(-1)}>Back</button>
            <button onClick={handlePlayClick}>Play</button>
            {showTrailer && <AnimeTrailer animeName={anime.title} />}
        </div>
    );
};

export default AnimeDetails;

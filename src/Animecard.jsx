import React from "react";
import { useNavigate } from "react-router-dom";

const AnimeCard = ({ animeDetails}) => {
    const navigate = useNavigate();

    const handleCardClick = () =>{
        navigate(`/anime/${encodeURIComponent(animeDetails.title)}`,{ state: { anime: animeDetails } })
    }
    return (
        <div className="movie" onClick={handleCardClick}>  
            <div>
                <p><strong>Year:</strong> {animeDetails.year}</p>
            </div>

            <div>
                <img 
                    src={animeDetails.poster !== 'N/A' ? animeDetails.poster : 'https://via.placeholder.com/400'} 
                    alt={animeDetails.title} 
                />
            </div>

            <div>
                <span>{animeDetails.type}</span>
                <h3>{animeDetails.title}</h3>
            </div>
        </div>
    );
};

export default AnimeCard; 


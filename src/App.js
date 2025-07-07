    import React, { useEffect, useState } from "react";
    import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
    import './App.css';
    import AnimeCard from './Animecard';
    import AnimeDetails from './AnimeDetails';
    import AnimeTrailer from './AnimeTrailer';
    import SearchIcon from './Search.svg';

    const API_URL = "https://api.jikan.moe/v4/anime?q=";

    const App = () => {
        const [animes,setAnimes] = useState([]);
        const [animeDetails, setAnimeDetails] = useState([]);
        const [searchTitle, setSearchTitle] = useState("");

        useEffect(() => {
            SearchAnime("Demon Slayer");
        }, []);

    


        const SearchAnime = async (title) => {
            if (!title) return;

            try {
                const response = await fetch(`${API_URL}${title}`);
                const data = await response.json();

                if (data.data && data.data.length > 0) {
                    const requiredDetails = data.data.map(anime => ({
                        title: anime.title,
                        poster: anime.images.jpg.image_url,
                        year: anime.aired && anime.aired.from ? anime.aired.from.split("-")[0] : "Unknown",
                        synopsis: anime.synopsis,
                        type: anime.type,
                        mal_id: anime.mal_id,
                    }));

                    setAnimeDetails(requiredDetails);
                } else {
                    setAnimeDetails([]);
                }
            } catch (error) {
                console.error("Error fetching anime data:", error);
            }
        };

        const handleSearch = () => {
            SearchAnime(searchTitle);
        };

        return (
            <Router>
                <div className="app">
                    <h1>Animax</h1>
                    <Routes>
                        <Route
                            path="/"
                            element={
                                <div className="container">
                                    <div className="search">
                                        <input
                                            type="text"
                                            placeholder="Search for animes"
                                            value={searchTitle}
                                            onChange={(e) => setSearchTitle(e.target.value)}
                                            onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
                                        />
                                        <img src={SearchIcon} alt="Search" onClick={handleSearch} />
                                    </div>

                                    <div className="container">
                                        {animeDetails.length > 0 ? (
                                            animeDetails.map((anime, index) => (
                                                <AnimeCard
                                                    key={index}
                                                    animeDetails={anime}
                                                />
                                            ))
                                        ) : (
                                            <div className="empty">
                                                <h2>No anime found.</h2>
                                            </div>
                                        )}
                                    </div>
                                </div>

                            }

                            
                        />
                        <Route path="/anime/:title" element={<AnimeDetails />} /> 
                    </Routes>
                </div>
            </Router>
        );
    };

    export default App;

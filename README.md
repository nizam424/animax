# 🎮 Animax

Animax is a React-based anime exploration app where users can view anime details and watch trailers directly via YouTube integration. It provides an elegant and responsive UI to browse anime and learn more about each series before watching.

## 🚀 Features

* 🔍 **Anime Search & Explore** – Search and explore anime details powered by the Jikan API.
* 🎞️ **YouTube Trailers** – Automatically fetches the latest trailers based on the anime title.
* 📱 **Responsive Design** – Works across desktops and mobile devices.
* 💡 **Dynamic Trailer Component** – Automatically displays the most relevant trailer for each anime using the YouTube API.
* ⚛️ Built with **React** using modern best practices (hooks, routing, clean UI).

---

## 🧰 Tech Stack

* **React**
* **React Router DOM**
* **YouTube Data API v3**
* **Jikan API (Unofficial MyAnimeList API)**
* **react-youtube** for embedded trailer playback

---

## 🔧 Getting Started

### 1. Clone the repo

```bash
git clone https://github.com/yourusername/animax.git
cd animax
```

### 2. Install dependencies

```bash
npm install
```

### 3. Set up your `.env` file

Create a `.env` file in the root directory and add your YouTube API key like so:

```env
REACT_APP_YOUTUBE_API_KEY=your_youtube_api_key_here
```

> ⚠️ Make sure the key starts with `REACT_APP_` — this is required for Create React App (CRA) to expose the variable to the frontend.

### 4. Start the development server

```bash
npm start
```

The app will run locally at `http://localhost:3000`.

---

## 📸 Screenshots

> *(Add some screenshots or GIFs here if possible to show UI and trailer playback in action)*

---

## 📁 Project Structure

```plaintext
src/
├── components/
│   └── AnimeTrailer.js      # Trailer component with YouTube integration
├── pages/
│   └── AnimeDetails.jsx     # Anime details page using Jikan API
├── App.jsx                  # Main routes and layout
├── index.js                 # Entry point
.env                         # (not committed) contains API keys
```

---

## 💠 Notes

* This app uses the **YouTube Data API** to search trailers. Be aware of rate limits (10,000 units/day for free tier).
* You must **provide your own YouTube API key** via `.env`.

---

## 🧪 Future Enhancements

* Add a watchlist feature
* Enable direct streaming using third-party APIs
* Improve trailer matching using video relevance filters
* Add genres, filters, and trending sections

---

## 🤝 Contributing

Pull requests are welcome! For major changes, please open an issue first to discuss what you’d like to change.

---

## 🛡️ License

This project is licensed under the [MIT License](LICENSE).

---

## 💌 Acknowledgments

* [Jikan API](https://jikan.moe/)
* [YouTube Data API](https://developers.google.com/youtube/v3)
* [react-youtube](https://github.com/tjallingt/react-youtube)

---

import "./App.css";

import Axios from "axios";
import { useState } from "react";
import Header from "./components/Header";
import Image from "./components/Image";
function App() {
  const [characterData, setCharacterData] = useState("empty");
  console.log(characterData);
  const getRandomAnime = () => {
    Axios.get("https://api.catboys.com/img").then((res) => {
      setCharacterData(res.data);
    });
  };
  return (
    <div className="App">
      <Header />
      <button className="button" onClick={getRandomAnime}>
        Random Anime Character
      </button>
      {characterData == "empty" ? (
        <div className="empty"> Click the Button to Start seeing Anime Characters</div>
      ) : (
        <Image
          imgPath={characterData.url}
          artist={characterData.artist}
          profile={characterData.artist_url}
        />
      )}
    </div>
  );
}
export default App;

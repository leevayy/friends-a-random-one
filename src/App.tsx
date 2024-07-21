import { useEffect, useState } from "react";
import React from "react";

import styles from "./App.module.css";
import { EpisodeCard } from "./components/EpisodeCard/EpisodeCard";

export interface EpisodeEntity {
  id: number;
  episode: number;
  season: number;
  name_EN: string;
  name_RU: string;
  date: string;
}

const App: React.FC = () => {
  const [episodes, setEpisodes] = useState<EpisodeEntity[]>([]);
  const [randomEpisode, setRandomEpisode] = useState<EpisodeEntity | null>(
    null,
  );

  useEffect(() => {
    fetch("/friends-a-random-one/episodes.json")
      .then((response) => response.json())
      .then((data: EpisodeEntity[]) => {
        setEpisodes(data);
      })
      .catch((error) => {
        // eslint-disable-next-line no-console
        console.error("Error fetching the data:", error);
      });
  }, []);

  const handleRandomEntity = () => {
    if (episodes.length > 0) {
      const randomIndex = Math.floor(Math.random() * episodes.length);

      setRandomEpisode(episodes[randomIndex]);
    }
  };

  return (
    <div className={styles.container}>
      {randomEpisode && (
        <img
          src={`https://serialfriends.online/wp-content/uploads/2021/09/druzya-${randomEpisode.season}-sezon-${randomEpisode.episode}-seriya.jpg`}
        />
      )}
      {!randomEpisode && (
        <h1>
          A Random One x{" "}
          <a
            href="https://serialfriends.online/"
            target="_blank"
            rel="noreferrer"
          >
            serialfriends.online
          </a>
        </h1>
      )}
      {randomEpisode && (
        <>
          <h1>{randomEpisode.name_EN}</h1>
          <h2 className={styles.episodeName_RU}>{randomEpisode.name_RU}</h2>
        </>
      )}
      <button className={styles.nextEpisode} onClick={handleRandomEntity}>
        Next
      </button>
      {randomEpisode ? (
        <EpisodeCard episode={randomEpisode} />
      ) : (
        <div>Push the button!</div>
      )}
    </div>
  );
};

export default App;

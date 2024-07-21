import classNames from "classnames";
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
    <div
      className={classNames(!randomEpisode && styles.empty, styles.container)}
    >
      {randomEpisode && (
        <img
          className={styles.image}
          src={`https://serialfriends.online/wp-content/uploads/2021/09/druzya-${randomEpisode.season}-sezon-${randomEpisode.episode}-seriya.jpg`}
        />
      )}
      {!randomEpisode && (
        <div className={styles.emptyStateHeadline}>
          <h1>The Random One</h1>
          <h1> x </h1>
          <h1>
            <a
              href="https://serialfriends.online/"
              target="_blank"
              rel="noreferrer"
            >
              serialfriends.online
            </a>
          </h1>
        </div>
      )}
      {randomEpisode && (
        <div className={styles.emptyStateHeadline}>
          <h1>{randomEpisode.name_EN}</h1>
          <h1 className={styles.episodeName_RU}>{randomEpisode.name_RU}</h1>
        </div>
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

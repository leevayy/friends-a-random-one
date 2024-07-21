import React from "react";

import { EpisodeEntity } from "../../App";
import styles from "./EpisodeCard.module.css";

interface EpisodeCardProps {
  episode: EpisodeEntity;
}

export const EpisodeCard: React.FC<EpisodeCardProps> = ({ episode }) => {
  return (
    <div className={styles.episodeData}>
      {episode && (
        <div>
          <p>
            S{episode.season}E{episode.episode}{" "}
            {episode.season !== 1 ? `(${episode.id})` : ""}
          </p>
          <p>
            <a
              href={`https://serialfriends.online/episodes/${episode.season}-seasone-${episode.episode}-episode/`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <strong>Смотреть</strong>
            </a>
          </p>
          <p>
            <strong>Вышел: </strong> {episode.date}
          </p>
        </div>
      )}
    </div>
  );
};

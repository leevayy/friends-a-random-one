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
            <strong>N</strong> S{episode.season}E{episode.episode} ({episode.id}
            )
          </p>
          <p>
            <a
              href={`https://serialfriends.online/episodes/${episode.season}-seasone-${episode.episode}-episode/`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <strong>link</strong>
            </a>
          </p>
          <p>
            <strong>EN</strong> {episode.name_EN}
          </p>
          <p>
            <strong>RU</strong> {episode.name_RU}
          </p>
          <p>
            <strong>date</strong> {episode.date}
          </p>
        </div>
      )}
    </div>
  );
};

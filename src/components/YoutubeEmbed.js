import React from "react";
import PropTypes from "prop-types";
import styles from './YoutubeEmbed.module.css'; 
import { Box } from "@mui/system";

const YoutubeEmbed = ({ embedId }) => (
  <div className={styles.videoResponsive}>
    <iframe
      width="600"
      height="400"
      src={`https://www.youtube.com/embed/${embedId}`}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
    />
  </div>
);

YoutubeEmbed.propTypes = {
  embedId: PropTypes.string.isRequired
};

export default YoutubeEmbed;

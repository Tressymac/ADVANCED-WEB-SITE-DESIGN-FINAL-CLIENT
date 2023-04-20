import React from 'react';
import '../map/UsMap.scss';
import usMapImage from '../../assets/images/us-map.webp';

const UsMap = () => {
  return (
    <div className="us-map-container">
        <h2>Map Of The Country</h2>
        <img src={usMapImage} alt="US map" className="us-map-image" />
        <p><em>Image by: <a href='https://upload.wikimedia.org/wikipedia/commons/a/a5/Map_of_USA_with_state_names.svg'>wikimedia.org</a></em></p>
    </div>
  );
};

export default UsMap;

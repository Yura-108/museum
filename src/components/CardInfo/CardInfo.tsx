import React from 'react';
import logo from '@images/favoriteIcon.svg';
import './CardInfo.scss';

interface CardInfoProps {
  title: string;
  artist: string;
}

const CardInfo: React.FC<CardInfoProps> = ({ title, artist }) => {
  return (
    <div className="info">
      <div className="text">
        <h4>{title}</h4>
        <h6>{artist}</h6>
        <h5>Public</h5>
      </div>
      <div className="favorite">
        <img src={logo} alt="favorite" />
      </div>
    </div>
  );
};

export default CardInfo;

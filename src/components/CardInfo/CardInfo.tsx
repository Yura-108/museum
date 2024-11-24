import React from 'react';
import logo from '@images/favoriteIcon.svg';
import './CardInfo.scss';

interface CardInfoProps {
  title: string | null;
  artist: string | null;
  on_loan_display: string | null;
}

const CardInfo: React.FC<CardInfoProps> = ({
  title,
  artist,
  on_loan_display,
}) => {
  return (
    <div className="info">
      <div className="text">
        <h4>{title}</h4>
        <h6>{artist}</h6>
        <h5>{on_loan_display ? 'Public' : 'Private'}</h5>
      </div>
      <div className="favorite">
        <img src={logo} alt="favorite" />
      </div>
    </div>
  );
};

export default CardInfo;

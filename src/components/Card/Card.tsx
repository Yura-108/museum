import './Card.scss';
import React from 'react';
import CardInfo from '../CardInfo/CardInfo.tsx';

interface ICard {
  title: string;
  artist: string;
  imageUrl: string;
}

const Card: React.FC<ICard> = ({ title, artist, imageUrl }) => {
  return (
    <div className="card">
      <img className={'backgroundImage'} src={imageUrl} alt="image" />
      <CardInfo title={title} artist={artist} />
    </div>
  );
};

export default Card;

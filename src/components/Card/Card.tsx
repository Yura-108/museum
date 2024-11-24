import './Card.scss';
import React from 'react';
import CardInfo from '../CardInfo/CardInfo.tsx';
import plugImage from '@images/plug.png';
import { IMAGE_URL } from '@constants/API.ts';
import { Link } from 'react-router-dom';
import { Artwork } from '@utils/artworkSchema.ts';

interface CardProps {
  artwork: Artwork;
}

const Card: React.FC<CardProps> = ({ artwork }) => {
  const handleImageError = (
    event: React.SyntheticEvent<HTMLImageElement, Event>,
  ) => {
    event.currentTarget.src = plugImage;
    event.currentTarget.alt = 'Placeholder image';
  };

  return (
    <Link to={`/artwork/${artwork.id}`} state={artwork}>
      <div className="card">
        <img
          className={'backgroundImage'}
          src={IMAGE_URL(artwork.image_id)}
          alt="image"
          onError={handleImageError}
        />
        <CardInfo
          on_loan_display={artwork.on_loan_display}
          title={artwork.title}
          artist={artwork.artist_title}
        />
      </div>
    </Link>
  );
};

export default Card;

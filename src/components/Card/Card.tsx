import './Card.scss';
import React from 'react';
import CardInfo from '../CardInfo/CardInfo.tsx';
import { IMAGE_URL } from '@constants/API.ts';
import { Link } from 'react-router-dom';
import { Artwork } from '@utils/artworkSchema.ts';
import handleImageError from '../../utils/handleImageError.ts';

interface CardProps {
  artwork: Artwork;
}

const Card: React.FC<CardProps> = ({ artwork }) => {
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
          id={artwork.id}
          on_loan_display={artwork.on_loan_display}
          title={artwork.title}
          artist={artwork.artist_title}
        />
      </div>
    </Link>
  );
};

export default Card;

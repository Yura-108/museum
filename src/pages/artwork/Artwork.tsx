import React from 'react';
import { Navigate, useLocation, useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { getArtWork } from '@utils/APIFunctions.ts';
import { IMAGE_URL } from '@constants/API.ts';
import './Artwork.scss';
import ArtworkSkeleton from '../../components/Skeletons/ArtworkSkeleton.tsx';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage.tsx';
import handleImageError from '../../utils/handleImageError.ts';

const Artwork: React.FC = () => {
  const { id } = useParams();
  let { state } = useLocation();

  const artworkId = Number(id);
  if (!id || isNaN(artworkId)) {
    return <Navigate to={'/404'} replace />;
  }
  let artwork;

  if (!state) {
    const { data, isError, isPending, error } = useQuery({
      queryKey: ['artwork', artworkId],
      queryFn: () => getArtWork(artworkId),
    });

    if (isError) return <ErrorMessage>{error.message}</ErrorMessage>;
    if (isPending) return <ArtworkSkeleton />;
    artwork = data;
  } else {
    artwork = state;
  }
  return (
    <div className={'artwork'}>
      <img
        src={IMAGE_URL(artwork.image_id)}
        onError={handleImageError}
        alt=""
      />
      <div className="text">
        <div className="title">
          <h2>{artwork.title}</h2>
          <h4>{artwork.artist_title}</h4>
          <h5>{artwork.date_display}</h5>
        </div>
        <div className="overview">
          <h2>Overview</h2>
          <h6>
            Artist nationality: <span>{artwork.artist_display}</span>
          </h6>
          <h6>
            Dimensions: Sheet: <span>{artwork.dimensions}</span>
          </h6>
          <h6>
            Credit Line: <span>{artwork.credit_line}</span>
          </h6>
          <h6>
            Repository: <span>{artwork.thumbnail.alt_text}</span>
          </h6>
          <h6 className={'on_loan_display'}>
            {artwork.on_loan_display ? 'Public' : 'Private'}
          </h6>
        </div>
      </div>
    </div>
  );
};

export default Artwork;

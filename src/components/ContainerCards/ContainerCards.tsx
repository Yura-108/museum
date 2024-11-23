import Card from '../Card/Card.tsx';
import './ContainerCards.scss';
import React from 'react';
import { usePaintings } from '../../store/usePaintings.ts';

interface Props {
  activePage: number;
}

const ContainerCards: React.FC<Props> = ({ activePage }) => {
  const {
    data: paintings,
    isLoading,
    error,
  } = usePaintings(activePage, 3, 387);

  if (isLoading) return <p>Loading paintings...</p>;
  if (error) return <p>Error: {error.message}</p>;
  return (
    <>
      <div className="containerCards">
        {paintings?.map((painting: any) => (
          <Card
            key={painting.id}
            title={painting.title}
            artist={painting.artist}
            imageUrl={painting.imageUrl}
          />
        ))}
      </div>
    </>
  );
};

export default ContainerCards;

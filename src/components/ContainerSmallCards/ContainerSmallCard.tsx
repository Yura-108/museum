import Card from '../Card/Card.tsx';
import React from 'react';
import { usePaintings } from '../../store/usePaintings.ts';
import './ContainerSmallCard.scss';

const ContainerCards: React.FC = () => {
  //const [page, setPage] = useState(1);

  const { data: paintings, isLoading, error } = usePaintings(1, 9, 80);

  if (isLoading) return <p>Loading paintings...</p>;
  if (error) return <p>Error: {error.message}</p>;
  return (
    <>
      <div className="containerSmallCards">
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

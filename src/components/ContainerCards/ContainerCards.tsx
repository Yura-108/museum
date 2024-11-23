import Card from '../Card/Card.tsx';
import './ContainerCards.scss';
import React, { useState } from 'react';
import { usePaintings } from '../../store/usePaintings.ts';

const ContainerCards: React.FC = () => {
  const [page] = useState(1);

  const { data: paintings, isLoading, error } = usePaintings(page, 3, 387);

  // const handlePrevPage = () => {
  //   setPage((page) => (page > 1 ? page - 1 : page));
  // };
  //
  // const handleNextPage = () => {
  //   setPage((page) => page + 1);
  // };

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
      {/*<button onClick={handlePrevPage} disabled={page === 1}>*/}
      {/*  Previous*/}
      {/*</button>*/}
      {/*<button onClick={handleNextPage}>Next</button>*/}
    </>
  );
};

export default ContainerCards;

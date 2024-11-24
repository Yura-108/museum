import Card from '../Card/Card.tsx';
import './ContainerCards.scss';
import React, { useState } from 'react';
import { getPage } from '../../utils/APIFunctions.ts';
import SectionTitle from '../SectionTitle/SectionTitle.tsx';
import Pagination from '../Pagination/Pagination.tsx';
import { useQuery } from '@tanstack/react-query';
import CardContainerSkeleton from '../Skeletons/CardContainerSkeleton.tsx';

interface Props {
  activePage: number;
  sortMethod: number;
}

const ContainerCards: React.FC<Props> = () => {
  const [activePage, setActivePage] = useState(0);

  const { data, isPending } = useQuery({
    queryKey: ['page', activePage],
    queryFn: () => getPage({ page: activePage }),
  });
  return (
    <>
      <SectionTitle h2={'Our special gallery'} h4={'Topics for you'} />
      {isPending && <CardContainerSkeleton />}
      {!isPending && (
        <div className="containerCards">
          {data?.map((artwork: any) => (
            <Card key={artwork.id} artwork={artwork} />
          ))}
        </div>
      )}
      <Pagination activePage={activePage} setActivePage={setActivePage} />
    </>
  );
};

export default ContainerCards;

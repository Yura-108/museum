import React from 'react';
import './Favorites.scss';
import { useFavoritesContext } from '../../store/FavoritesContext.tsx';
import { getArtWorks, getPage } from '../../utils/APIFunctions.ts';
import ContainerSmallCards from '../../components/ContainerSmallCards/ContainerSmallCard.tsx';
import { useQuery } from '@tanstack/react-query';
import SmallCardContainerSkeleton from '../../components/Skeletons/SmallCardContainerSkeleton.tsx';
import ErrorMessage from '@components/ErrorMessage/ErrorMessage.tsx';

const Favorites: React.FC = () => {
  const { favorites } = useFavoritesContext();
  const { data, isPending, isError, error } = useQuery({
    queryKey: ['page', favorites],
    queryFn: () => getArtWorks(favorites),
  });
  if (isError) return <ErrorMessage>{error.message}</ErrorMessage>;
  return (
    <>
      {isPending ? (
        <SmallCardContainerSkeleton />
      ) : (
        <ContainerSmallCards data={data} />
      )}
    </>
  );
};

export default Favorites;

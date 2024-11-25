import React from 'react';
import './Favorites.scss';
import { useFavoritesContext } from '../../store/FavoritesContext.tsx';
import { getArtWorks, getPage } from '../../utils/APIFunctions.ts';
import ContainerSmallCards from '../../components/ContainerSmallCards/ContainerSmallCard.tsx';
import { useQuery } from '@tanstack/react-query';
import SmallCardContainerSkeleton from '../../components/Skeletons/SmallCardContainerSkeleton.tsx';
import ErrorMessage from '@components/ErrorMessage/ErrorMessage.tsx';
import Title from '../../components/Title/Title.tsx';
import favoriteIcon from '@images/favoriteIcon.svg'
import SectionTitle from '../../components/SectionTitle/SectionTitle.tsx';

const Favorites: React.FC = () => {
  const { favorites } = useFavoritesContext();
  const { data, isPending, isError, error } = useQuery({
    queryKey: ['page', favorites],
    queryFn: () => getArtWorks(favorites),
  });
  if (isError) return <ErrorMessage>{error.message}</ErrorMessage>;
  return (
    <>
      <Title>
        here are your <br />
        <div>
          <img width={'64px'} src={favoriteIcon} alt="favorite icon" /> <span>Favorites</span>
        </div>
      </Title>
      <SectionTitle h2={"Your favorites list"} h4={"Saved by you"} />
      {isPending ? (
        <SmallCardContainerSkeleton length={favorites.length} />
      ) : (
        <ContainerSmallCards data={data} />
      )}
    </>
  );
};

export default Favorites;

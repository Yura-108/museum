import React from 'react';
import './MainPage.scss';
import Title from '@components/Title/Title.tsx';
import Search from '@components/Search/Search.tsx';
import ContainerCards from '@components/ContainerCards/ContainerCards.tsx';
import RandomGallery from '@components/FandomGallery/RandomGallery.tsx';

const MainPage: React.FC = () => {
  return (
    <section id={'main'}>
      <Title />
      <Search />
      <ContainerCards />
      <RandomGallery />
    </section>
  );
};

export default MainPage;

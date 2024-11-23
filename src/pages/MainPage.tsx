import React from 'react';
import Title from '../components/Title/Title.tsx';
import Search from '../components/Search/Search.tsx';
import SectionTitle from '../components/SectionTitle/SectionTitle.tsx';
import ContainerCards from '../components/ContainerCards/ContainerCards.tsx';
import ContainerSmallCard from '../components/ContainerSmallCards/ContainerSmallCard.tsx';
import './MainPage.scss';

const MainPage: React.FC = () => {
  return (
    <section id={'main'}>
      <Title />
      <Search />
      <SectionTitle h2={'Our special gallery'} h4={'Topics for you'} />
      <ContainerCards />
      <SectionTitle h2={'Our special gallery'} h4={'Topics for you'} />
      <ContainerSmallCard />
    </section>
  );
};

export default MainPage;

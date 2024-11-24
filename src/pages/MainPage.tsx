import React from 'react';
import Title from '../components/Title/Title.tsx';
import Search from '../components/Search/Search.tsx';
import SectionTitle from '../components/SectionTitle/SectionTitle.tsx';
// @ts-ignore
import ContainerCards from '@components/ContainerCards/ContainerCards.tsx';
import './MainPage.scss';

const MainPage: React.FC = () => {
  return (
    <section id={'main'}>
      <Title />
      <Search />
      <ContainerCards />
      <SectionTitle h2={'Other works for you'} h4={'Here some more'} />
      {/*<ContainerSmallCard />*/}
    </section>
  );
};

export default MainPage;

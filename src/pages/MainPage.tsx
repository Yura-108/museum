import React, { useState } from 'react';
import Title from '../components/Title/Title.tsx';
import Search from '../components/Search/Search.tsx';
import SectionTitle from '../components/SectionTitle/SectionTitle.tsx';
import ContainerCards from '../components/ContainerCards/ContainerCards.tsx';
import ContainerSmallCard from '../components/ContainerSmallCards/ContainerSmallCard.tsx';
import './MainPage.scss';
import Pagination from '../components/Pagination/Pagination.tsx';

const MainPage: React.FC = () => {
  const [activePage, setActivePage] = useState(0);
  return (
    <section id={'main'}>
      <Title />
      <Search />
      <SectionTitle h2={'Our special gallery'} h4={'Topics for you'} />
      <ContainerCards activePage={activePage} />
      <Pagination activePage={activePage} setActivePage={setActivePage} />
      <SectionTitle h2={'Our special gallery'} h4={'Topics for you'} />
      <ContainerSmallCard />
    </section>
  );
};

export default MainPage;

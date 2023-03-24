import React, { useEffect } from 'react';
import useGetLaunches from 'hooks/useGetLaunches/useGetLaunches';

import Card from 'components/Card/Card';
import SideBar from 'components/SideBar/SideBar';
import AppContainer from 'components/AppContainer/AppContainer';
import { DashBoard } from 'components/AppContainer/AppContainerStyled';

function App() {
  const { data: launches, setLimit, setFilters } = useGetLaunches();

  const handleScroll = () => {
    const windowHeight = window.innerHeight + window.scrollY;
    if (document.body.offsetHeight <= windowHeight) {
      setLimit((prev) => prev + 50);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <AppContainer>
      <DashBoard>
        {launches.map((item, idx) => (
          <Card key={idx} {...item} />
        ))}
      </DashBoard>
      <SideBar setFilters={setFilters} />
    </AppContainer>
  );
}

export default App;

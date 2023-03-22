import React from 'react';
import useGetLaunches from 'hooks/useGetLaunches/useGetLaunches';
import Card from 'components/Card/Card';
import AppContainer from 'components/AppContainer/AppContainer';

function App() {
  const launches = useGetLaunches();
  console.log(launches);
  return (
    <AppContainer>
      {launches.map((item, idx) => (
        <Card key={idx} {...item} />
      ))}
    </AppContainer>
  );
}

export default App;

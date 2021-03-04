import React, { memo, useEffect } from 'react';
import { Switch, Redirect, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import Aside from './components/Aside';
import ScenicSpot from './pages/ScenicSpot';
import CityOfScenicSpot from './pages/CityOfScenicSpot';

const App = memo(() => {
  const city = useSelector((state) => state.city);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [city]);

  return (
    <div>
      <Aside />
      <StyledContentWrapper>
        <Switch>
          <Redirect exact path="/" to="/ScenicSpot" />
          <Route exact path="/ScenicSpot" component={ScenicSpot} />
          <Route path="/ScenicSpot/:city" component={CityOfScenicSpot} />
        </Switch>
      </StyledContentWrapper>
    </div>
  );
});

const StyledContentWrapper = styled.div`
  margin-left: 200px;
`;

export default App;

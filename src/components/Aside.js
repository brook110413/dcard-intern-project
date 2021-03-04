import React, { Fragment, memo } from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Aside = memo(() => {
  const cities = useSelector((state) => state.cities);

  return (
    <StyledCitiesList>
      {cities.map((city) => (
        <li key={city.id}>
          {city.value === 'all' ? (
            <Link to="/ScenicSpot">{city.label}</Link>
          ) : (
            <Link to={`/ScenicSpot/${city.value}`}>{city.label}</Link>
          )}
        </li>
      ))}
    </StyledCitiesList>
  );
});

const StyledCitiesList = styled.ul`
  position: fixed;
  width: 175px;
`;

export default Aside;

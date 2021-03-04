import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { Card } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { fetchCityOfScenicSpotList, setCity } from '../actions/fetchScenicSpotAction';
import useScenicSpot from '../hooks/useScenicSpot';

const CityOfScenicSpot = () => {
  const dispatch = useDispatch();
  const loader = useRef(null);
  const cityOfScenicSpotList = useSelector((state) => state.cityOfScenicSpotList);
  const [count, add] = useScenicSpot(30);
  const { city } = useParams();

  const addCount = (entries) => {
    if (entries[0].isIntersecting) {
      add(30);
    }
  };

  useEffect(() => {
    dispatch(setCity(city));
  }, [city]);

  useEffect(() => {
    const observer = new IntersectionObserver(addCount);

    if (loader.current) {
      observer.observe(loader.current);
    }
  }, []);

  useEffect(() => {
    dispatch(fetchCityOfScenicSpotList(city, count));
  }, [count, city]);

  return (
    <div>
      {cityOfScenicSpotList.map((s) => (
        <Card key={s.ID}>
          <Card.Body>
            <Card.Title>{s.Name}</Card.Title>
          </Card.Body>
        </Card>
      ))}

      <StyledLoadMore ref={loader} isScrolled={cityOfScenicSpotList.length}>
        Load More
      </StyledLoadMore>
    </div>
  );
};

const StyledLoadMore = styled.div`
  visibility: hidden;
  margin-top: ${(props) => (props.isScrolled === 0 ? '1000px' : 0)};
`;

export default CityOfScenicSpot;

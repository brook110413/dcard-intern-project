import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { Card } from 'react-bootstrap';
import { fetchScenicSpotList, setCity } from '../actions/fetchScenicSpotAction';
import useScenicSpot from '../hooks/useScenicSpot';

const ScenicSpot = () => {
  const dispatch = useDispatch();
  const loader = useRef(null);
  const scenicSpotList = useSelector((state) => state.scenicSpotList);
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
    dispatch(fetchScenicSpotList(count));
  }, [count]);

  return (
    <div>
      {scenicSpotList.map((s) => (
        <Card key={s.ID}>
          <Card.Body>
            <Card.Title>{s.Name}</Card.Title>
            <Card.Text>{s.Description}</Card.Text>
          </Card.Body>
        </Card>
      ))}

      <StyledLoadMore ref={loader} isScrolled={scenicSpotList.length}>
        Load More
      </StyledLoadMore>
    </div>
  );
};

const StyledLoadMore = styled.div`
  visibility: hidden;
  margin-top: ${(props) => (props.isScrolled === 0 ? '1000px' : 0)};
`;

export default ScenicSpot;

import { useState } from 'react';

const useScenicSpot = (initCount) => {
  const [count, setCount] = useState(initCount);

  const add = (num) => {
    setCount(count + num);
  };

  return [count, add];
};

export default useScenicSpot;

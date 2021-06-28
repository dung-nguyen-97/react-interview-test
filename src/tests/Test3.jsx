import React, { useState } from 'react';

import { getActivityValue } from '../lib';

const Test3 = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  /**
   * Edit this function to fix freezing of UI
   */

  const onRender = () => {
    setIsLoading(true);
    const tempData = [];
    for (let i = 0; i < 365; i++) {
      tempData.push(getActivityValue(i + 1));
    }
    setData(data);
    setIsLoading(false);
  };

  return (
    <div>
      <button onClick={onRender}>Render</button>
      <h3>Activity board:</h3>
      {!isLoading && <Board data={data} />}
      {isLoading && <Loading />}
    </div>
  );
};

const Board = ({ data = [] }) => {
  const cells = [];
  for (let i = 0; i < 365; i++) {
    cells.push(<Cell value={data?.[i]} />);
  }
  return <div className="Board">{cells}</div>;
};

const Cell = ({ value }) => {
  const bg = value ? `rgba(255, 68, 0, ${value})` : '#fff';
  return <div className="Cell" style={{ backgroundColor: bg }}></div>;
};

const Loading = () => (
  <img
    className="loading"
    src="https://cdnjs.cloudflare.com/ajax/libs/galleriffic/2.0.1/css/loader.gif"
    alt="loading..."
  />
);

export default Test3;

import React, { useEffect, useState } from 'react';

const Test2 = () => {
  const [size, setSize] = useState(14);
  const [step, setStep] = useState(1);
  const [interval, setInterval] = useState(1000);

  return (
    <div>
      <h1>Counter</h1>
      <div className="flex">
        <span className="w100">Size:</span>
        <input
          type="range"
          min={10}
          max={50}
          value={size}
          onChange={(e) => setSize(parseInt(e.target.value))}
        />
        <span>{size}px</span>
      </div>
      <div className="flex">
        <span className="w100">Step:</span>
        <input
          type="range"
          min={0}
          max={10}
          value={step}
          onChange={(e) => setStep(parseInt(e.target.value))}
        />
        <span>{step}</span>
      </div>
      <div className="flex">
        <span className="w100">Interval:</span>
        <input
          type="range"
          min={500}
          step={100}
          max={3000}
          value={interval}
          onChange={(e) => setInterval(parseInt(e.target.value))}
        />
        <span>{interval}ms</span>
      </div>
      <div style={{ fontSize: size }}>
        <Counter config={{ step, interval }} />
      </div>
    </div>
  );
};

const Counter = ({ config }) => {
  const [value, setValue] = useState(0);
  useEffect(() => {
    setInterval(() => {
      setValue((value) => value + config.step);
    }, config.interval);
  }, [config]);
  return <h1>{value}</h1>;
};

export default Test2;

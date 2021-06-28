import React, { Suspense, useState } from 'react';
import './tests/Test1';
import './tests/Test2';
import './tests/Test3';

const numTests = 3;

const App = () => {
  const tests = [];
  for (let i = 0; i < numTests; i++) {
    tests.push(`Test${i + 1}`);
  }
  const [test, selectTest] = useState(tests[0]);
  const Component = React.lazy(() => import(`./tests/${test}`));

  return (
    <div className="wrapper">
      <div className="header">
        <h2>{test}</h2>
        <select value={test} onChange={(e) => selectTest(e.target.value)}>
          {tests.map((t) => (
            <option value={t}>{t}</option>
          ))}
        </select>
      </div>
      <div className="main">
        <Suspense fallback="loading...">
          <Component />
        </Suspense>
      </div>
    </div>
  );
};

export default App;

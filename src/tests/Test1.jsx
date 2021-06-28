import React, { useState } from 'react';

const Test1 = () => {
  const [items, setItems] = useState([]);
  const [input, setInput] = useState('');

  const addItem = () => {
    input && setItems([input, ...items]);
    setInput('');
  };
  const deleteItem = (i) => {
    items.splice(i, 1);
    setItems([...items]);
  };

  return (
    <div>
      <h3>Todo List</h3>
      <input
        type="text"
        onChange={(e) => setInput(e.target.value)}
        value={input}
      />
      <button onClick={addItem}>Add</button>
      <ul>
        {items.map((i, k) => (
          <Item>
            {i}
            <button className="ml-1" onClick={() => deleteItem(k)}>
              Delete
            </button>
          </Item>
        ))}
      </ul>
      <p>
        Add 3 items (1, 2, 3), check the item 1 then delete item 3, item 1
        should keep be checked
      </p>
    </div>
  );
};

const Item = ({ children }) => {
  const [checked, setChecked] = useState(false);
  return (
    <li className="mt-1">
      <input
        type="checkbox"
        checked={checked}
        onClick={() => setChecked(!checked)}
      />
      {children}
    </li>
  );
};

export default Test1;

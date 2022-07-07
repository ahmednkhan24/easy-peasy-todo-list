import React, { useState } from 'react';
import { useStoreState, useStoreActions } from './store/hooks';

const App: React.FC = () => {
  const { name, age } = useStoreState((stores) => stores.personStore);
  const { setName } = useStoreActions((stores) => stores.personStore);
  const [inputName, setInputName] = useState('');

  const onSubmit = () => {
    setName(inputName);
    setInputName('');
  };

  return (
    <div>
      <h1>name: {name}</h1>
      <h1>age: {age}</h1>
      <input
        placeholder="Update the name"
        value={inputName}
        onChange={(e) => setInputName(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === 'Enter') onSubmit();
        }}
      />
      <button onClick={() => setName(inputName)}>Submit</button>
    </div>
  );
};

export default App;

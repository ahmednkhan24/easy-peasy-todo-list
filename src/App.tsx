import React, { useState } from 'react';
import { useStoreState, useStoreActions } from './store/hooks';

const App: React.FC = () => {
  const { name, age } = useStoreState((stores) => stores.personStore);
  const { setName, setAge } = useStoreActions((stores) => stores.personStore);
  const [inputName, setInputName] = useState('');
  const [inputAge, setInputAge] = useState<number>();

  const onNameSubmit = () => {
    setName(inputName);
    setInputName('');
  };

  const onAgeSubmit = () => {
    if (inputAge || inputAge === 0) {
      setAge(inputAge);
      setInputAge(undefined);
    }
  };

  return (
    <div>
      <h1>name: {name}</h1>
      <input
        placeholder="Update the name"
        value={inputName}
        onChange={(e) => setInputName(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === 'Enter') onNameSubmit();
        }}
      />
      <button onClick={onNameSubmit}>Submit</button>

      <h1>age: {age}</h1>
      <input
        placeholder="Update the age"
        value={inputAge?.toString() ?? ''}
        onChange={(e) => {
          if (!e.target.value) {
            setInputAge(undefined);
          } else {
            const parsed = parseInt(e.target.value);
            if (!isNaN(parsed)) {
              setInputAge(parsed);
            }
          }
        }}
        onKeyDown={(e) => {
          if (e.key === 'Enter') onAgeSubmit();
        }}
      />
      <button onClick={onAgeSubmit}>Submit</button>
    </div>
  );
};

export default App;

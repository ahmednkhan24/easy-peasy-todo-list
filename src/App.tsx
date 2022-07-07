import React, { useState } from 'react';
import { useStoreState, useStoreActions } from './store/hooks';

const App: React.FC = () => {
  const { name, age } = useStoreState((stores) => stores.personStore);
  const { updateDataThunk } = useStoreActions((stores) => stores.personStore);
  const [inputName, setInputName] = useState('');
  const [inputAge, setInputAge] = useState<number>();

  const onSubmit = () => {
    if (inputName && (inputAge || inputAge === 0)) {
      // update store
      updateDataThunk({ name: inputName, age: inputAge });

      // update local state
      setInputAge(undefined);
      setInputName('');
    }
  };

  return (
    <div>
      <h1>name: {name}</h1>
      <input
        placeholder="Update the name"
        value={inputName}
        onChange={(e) => setInputName(e.target.value)}
      />
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
      />
      <br />
      <br />
      <br />
      <button onClick={onSubmit}>Submit</button>
    </div>
  );
};

export default App;

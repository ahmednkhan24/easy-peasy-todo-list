import React from 'react';
import { useStoreState } from './store/hooks';

const App: React.FC = () => {
  const personStore = useStoreState((store) => store.personStore);
  console.log('personStore: ', personStore);

  return (
    <div>
      <h1>helllo world</h1>
    </div>
  );
};

export default App;

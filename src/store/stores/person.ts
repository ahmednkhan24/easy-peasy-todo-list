import { action, Action } from 'easy-peasy';

export interface PersonStore {
  name: string;
  age: number;
  setName: Action<this, string>;
}

const personStore: PersonStore = {
  name: 'Ahmed',
  age: 25,
  setName: action((state, payload: string) => {
    state.name = payload;
  }),
};

export default personStore;

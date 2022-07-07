import { action, Action, thunk, Thunk } from 'easy-peasy';

interface UpdateDataPayload {
  name: string;
  age: number;
}

export interface PersonStoreState {
  name: string;
  age: number;
}

export interface PersonStoreActions {
  setName: Action<this, string>;
  setAge: Action<this, number>;
}

export interface PersonStoreThunks {
  updateDataThunk: Thunk<this, UpdateDataPayload>;
}

export interface PersonStore
  extends PersonStoreState,
    PersonStoreActions,
    PersonStoreThunks {}

const personStore: PersonStore = {
  // state
  name: 'Ahmed',
  age: 25,

  // actions
  setName: action((state, payload: string) => {
    state.name = payload;
  }),
  setAge: action((state, payload: number) => {
    state.age = payload;
  }),

  // thunks
  updateDataThunk: thunk((actions, payload) => {
    actions.setName(payload.name);
    actions.setAge(payload.age);
  }),
};

export default personStore;

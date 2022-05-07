import personStore, { PersonStore } from './person';

export type Stores = {
  personStore: PersonStore;
};

const stores: Stores = {
  personStore,
};

export default stores;

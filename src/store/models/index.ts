import personModel, { PersonModel } from './person';

export type StoreModels = {
  personModel: PersonModel;
};

const models: StoreModels = {
  personModel,
};

export default models;

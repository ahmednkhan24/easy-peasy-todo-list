import { createTypedHooks } from 'easy-peasy';
import { StoreModels } from './models';

export const { useStore, useStoreState, useStoreActions, useStoreDispatch } =
  createTypedHooks<StoreModels>();

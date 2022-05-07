import { createTypedHooks } from 'easy-peasy';
import { Stores } from './stores';

export const { useStore, useStoreState, useStoreActions, useStoreDispatch } =
  createTypedHooks<Stores>();

import { configureStore } from '@reduxjs/toolkit';
import catalogsucer from './slices/catalogSlice';

export const store = configureStore({
  reducer: {
    catalog: catalogsucer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
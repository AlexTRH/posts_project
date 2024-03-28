
import { configureStore } from '@reduxjs/toolkit';
import {slices} from "./slices";
export const store = configureStore(slices);


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

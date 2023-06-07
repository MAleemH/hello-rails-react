import { configureStore } from '@reduxjs/toolkit';
import greetingSlice from './greeting/greetingSlice';

const store = configureStore({
  reducer: {
    greetings: greetingSlice,
  },
});

export default store;

// import React from 'react';
// import { configureStore, createSlice } from '@reduxjs/toolkit';
// import { Provider, useSelector, useDispatch } from 'react-redux';

// export const counterSlice = createSlice({
//   name: 'counter',
//   initialState: {
//     count: 0,
//   },
//   reducers: {
//     increment: (state) => {
//       state.count += 1;
//     },
//     clear: (state) => {
//       state.count = 0;
//     },
//   },
// });

// const { increment, clear } = counterSlice.actions;

// const store = configureStore({
//   reducer: {
//     counter: counterSlice.reducer,
//   },
// });

// export function useStore() {
//   const count = useSelector((state) => state.counter.count);
//   const dispatch = useDispatch();
//   return {
//     count,
//     increment: () => dispatch(increment()),
//     clear: () => dispatch(clear()),
//   };
// }

// export function StoreProvider({ children }) {
//   return <Provider store={store}>{children}</Provider>;
// }

import { configureStore } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface CounterState {
  value: number;
}

const initialState: CounterState = {
  value: 0,
};

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export default counterSlice.reducer;

export const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

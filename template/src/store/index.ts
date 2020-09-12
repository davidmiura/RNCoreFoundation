import {configureStore, Action} from '@reduxjs/toolkit';
import {ThunkAction} from 'redux-thunk';

import rootReducer, {RootState} from './rootReducer';

const store = configureStore({
  reducer: rootReducer,
});

if (process.env.NODE_ENV === 'development' && module.hot) {
  module.hot.accept('./rootReducer', () => {
    const newRootReducer = require('./rootReducer').default;
    store.replaceReducer(newRootReducer);
  });
}

export type AppDispatch = typeof store.dispatch;

export type AppThunk = ThunkAction<void, RootState, unknown, Action<string>>;

export default store;

// import { init, RematchDispatch, RematchRootState } from '@rematch/core';

// import { models } from './models';

// export const store = init({
//   models,
// });

// export const { dispatch, getState } = store;

// export type AppState = RematchRootState<typeof models>;
// export type Dispatch = RematchDispatch<typeof models>;

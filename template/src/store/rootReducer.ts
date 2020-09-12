import {combineReducers} from '@reduxjs/toolkit';

import profileReducer from 'features/Profile/profileSlice';
// import signInReducer from 'features/Authentication/signInSlice';
// import issuesDisplayReducer from 'features/issuesDisplay/issuesDisplaySlice'
// import repoDetailsReducer from 'features/repoSearch/repoDetailsSlice'
// import issuesReducer from 'features/issuesList/issuesSlice'
// import commentsReducer from 'features/issueDetails/commentsSlice'

const rootReducer = combineReducers({
  profile: profileReducer,
  //   signIn: signInReducer,
  //   issuesDisplay: issuesDisplayReducer,
  //   repoDetails: repoDetailsReducer,
  //   issues: issuesReducer,
  //   comments: commentsReducer
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;

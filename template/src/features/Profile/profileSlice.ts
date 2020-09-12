import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface Profile {
  id: number;
  user: string;
  avatar: string;
}

type ProfileState = Profile;

const initialState: ProfileState = {
  id: 0,
  user: 'Default',
  avatar: 'Undefined',
};

const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    setProfile(state, action: PayloadAction<Profile>) {
      const {id, user, avatar} = action.payload;
      state.id = id;
      state.user = user;
      state.avatar = avatar;
    },
  },
});

export const {setProfile} = profileSlice.actions;
export default profileSlice.reducer;

import React, {useMemo, useReducer} from 'react';
import {
  createSlice,
  PayloadAction,
  combineReducers,
  Reducer,
} from '@reduxjs/toolkit';

import axios from 'axios';
import SecureStorage from 'react-native-secure-storage';

import {BASE_URL, TestConfig} from '../../config';
import {sleep} from '../sleep';

type UserToken = {
  email: string;
  token: string | undefined;
};

type UserStatus = UserToken;

type LoadingStatus = {isLoading: boolean};

type AuthState = {
  user: {
    email: string;
    token: string | undefined;
  };
  isLoading: boolean;
};

type Auth = {
  login: (email: string, password: string) => void;
  altlogin: (email: string, password: string) => void;
  logout: () => void;
  altlogout: () => void;
  register: (email: string, password: string) => void;
  altregister: (email: string, password: string) => void;
};

const initialAuthState: AuthState = {
  user: {
    email: 'test@test.org',
    token: undefined,
  },
  isLoading: true,
};

const authSlice = createSlice({
  name: 'auth1',
  initialState: initialAuthState,
  reducers: {
    setUser: (state, action: PayloadAction<UserStatus>) => {
      state.user.email = action.payload.email;
      state.user.token = action.payload.token;
      state.isLoading = false;
    },
    removeUser: (state) => {
      state.user = {email: '', token: undefined};
    },
    setLoading: (state, action: PayloadAction<LoadingStatus>) => {
      state.isLoading = action.payload.isLoading;
    },
  },
});

const {actions} = authSlice;
export const {setUser, removeUser, setLoading} = actions;

const reducer = combineReducers({
  auth1: authSlice.reducer,
});

type ReducerType = ReturnType<typeof reducer>;

export function useAuth<Auth>() {
  const [state, dispatch] = useReducer<Reducer<ReducerType>>(reducer, {
    auth1: initialAuthState,
  });

  const auth = useMemo(
    () => ({
      login: async (email: string, password: string) => {
        var userEmail;
        var userToken;
        if (TestConfig.UseAuth) {
          const {data} = await axios.post(`${BASE_URL}/auth/local`, {
            identifier: email,
            password: password,
          });
          userEmail = data.user.email;
          userToken = data.jwt;
        }

        if (!TestConfig.UseAuth) {
          userEmail = 'test@test.org';
          userToken = 'test_jwt';
        }

        const user: UserToken = {
          email: userEmail,
          token: userToken,
        };
        await SecureStorage.setItem('user', JSON.stringify(user));
        dispatch(authSlice.actions.setUser(user));
      },
      altlogin: async (email: string, password: string) => {
        const {data} = await axios.post(`${BASE_URL}/auth/local`, {
          identifier: email,
          password: password,
        });
        const user: UserToken = {
          email: data.user.email,
          token: data.jwt,
        };
        await SecureStorage.setItem('user', JSON.stringify(user));
        dispatch(authSlice.actions.setUser(user));
      },
      logout: async () => {
        await SecureStorage.removeItem('user');
        dispatch(authSlice.actions.removeUser());
      },
      altlogout: async () => {
        await SecureStorage.removeItem('user');
        dispatch(authSlice.actions.removeUser());
      },
      register: async (email: string, password: string) => {
        await sleep(2000);
        await axios.post(`${BASE_URL}/auth/local/register`, {
          username: email,
          email: email,
          password: password,
        });
      },
      altregister: async (email: string, password: string) => {
        await sleep(2000);
        await axios.post(`${BASE_URL}/auth/local/register`, {
          username: email,
          email: email,
          password: password,
        });
      },
    }),
    [],
  );

  React.useEffect(() => {
    sleep(2000).then(() => {
      SecureStorage.getItem('user').then(
        (user: {email: string; token: string}) => {
          if (user) {
            dispatch(authSlice.actions.setUser(user));
          }
          dispatch(authSlice.actions.setLoading({isLoading: false}));
        },
      );
    });
  }, []);

  return [auth, state] as const;
}

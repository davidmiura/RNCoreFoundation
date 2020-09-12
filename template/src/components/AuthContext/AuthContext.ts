import {createContext} from 'react';

type Auth = {
  login: (email: string, password: string) => void;
  altlogin: (email: string, password: string) => void;
  logout: () => void;
  altlogout: () => void;
  register: (email: string, password: string) => void;
  altregister: (email: string, password: string) => void;
};

export const AuthContext = createContext<Partial<Auth>>({});

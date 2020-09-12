import {createContext} from 'react';

//export const UserContext = createContext(undefined);
export const UserContext = createContext<
  {email: string | undefined; token: string | undefined} | undefined
>(undefined);

import {DefaultTheme} from '@react-navigation/native';

export const lightTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: 'orange',
    primary: 'darkblue',
    text: 'black',
    card: 'orange',
    border: 'brown',
  },
};

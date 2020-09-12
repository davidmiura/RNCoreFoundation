import {DarkTheme} from '@react-navigation/native';

export const darkTheme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    background: 'darkblue',
    primary: 'orange',
    text: 'white',
    card: 'darkblue',
    border: 'blue',
  },
};

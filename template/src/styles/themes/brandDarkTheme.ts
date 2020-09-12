import {DarkTheme} from 'react-native-paper';

export const brandDarkTheme = {
  ...DarkTheme,
  mode: 'adaptive',
  colors: {
    ...DarkTheme.colors,
    primary: '#f57f17',
    accent: '#bc5100',
    background: '#4a0072',
    surface: '#ffb04c',
    text: '#ffffff',
    disabled: 'lightgray',
    placeholder: 'gray',
    backdrop: '#b1fa2',
    card: '#f57f17',
    border: '#b1fa2',
  },
};

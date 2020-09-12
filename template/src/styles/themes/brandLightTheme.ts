import {DefaultTheme} from 'react-native-paper';

export const brandLightTheme = {
  ...DefaultTheme,
  mode: 'adaptive',
  colors: {
    ...DefaultTheme.colors,
    primary: '#7b1fa2',
    accent: '#ffb04c',
    background: '#f57f17',
    surface: '#ae52d4',
    text: '#000000',
    disabled: 'lightgray',
    placeholder: 'gray',
    backdrop: '#f57f17',
    card: '#7b1fa2',
    border: '#7b1fa2',
  },
};

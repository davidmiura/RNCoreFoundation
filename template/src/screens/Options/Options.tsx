import React from 'react';
import {View, StyleSheet} from 'react-native';

import {Button, Title, Subheading} from 'react-native-paper';

import {RouteProp} from '@react-navigation/native';
import {MaterialBottomTabNavigationProp} from '@react-navigation/material-bottom-tabs';
import {MaterialBottomTabParamList} from 'components/BottomTabs';
import {AuthContext} from 'components/AuthContext';
import {ThemeContext} from 'components/ThemeContext';
import {Screen} from '../../constants';

type OptionsScreenNavigationProps = MaterialBottomTabNavigationProp<
  MaterialBottomTabParamList,
  Screen.Splash
>;

type OptionsScreenRouteProps = RouteProp<MaterialBottomTabParamList, 'Options'>;

type Props = {
  route: OptionsScreenRouteProps;
  navigation: OptionsScreenNavigationProps;
};

export const OptionsScreen = ({}: Props): React.ReactElement => {
  const {toggleTheme} = React.useContext(ThemeContext);
  const {logout} = React.useContext(AuthContext);

  return (
    <View style={styles.container}>
      <Title>Options</Title>
      <Subheading>Adjust your modes and settings</Subheading>
      <Button
        icon="moon-waning-crescent"
        mode="contained"
        style={styles.button}
        onPress={() => toggleTheme!()}>
        Dark Mode
      </Button>
      <Button
        icon="magnify"
        mode="contained"
        style={styles.button}
        onPress={() => ({})}>
        Search settings
      </Button>
      <Button
        icon="logout-variant"
        mode="outlined"
        style={styles.button}
        onPress={() => logout!()}>
        Logout
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    marginLeft: 20,
    marginRight: 20,
  },
  title: {},
  subheading: {},
  button: {
    marginTop: 5,
    marginBottom: 5,
  },
  text: {
    fontSize: 16,
  },
  optionsContainer: {
    paddingVertical: 8,
    marginHorizontal: 8,
  },
});

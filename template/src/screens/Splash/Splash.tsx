import React from 'react';
import {View, StyleSheet} from 'react-native';
import {RouteProp, useTheme} from '@react-navigation/native';
import {RootStackParamList} from 'App';
import {StackNavigationProp} from '@react-navigation/stack';
import {Screen} from '../../constants';

type SplashScreenNavigationProps = StackNavigationProp<
  RootStackParamList,
  Screen.Splash
>;

type SplashScreenRouteProps = RouteProp<RootStackParamList, 'Splash'>;

type Props = {
  fun: string;
  route: SplashScreenRouteProps;
  navigation: SplashScreenNavigationProps;
};

export const SplashScreen = ({}: Props): React.ReactElement => {
  const {colors} = useTheme();
  return <View style={[styles.container, {backgroundColor: colors.primary}]} />;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {StyleSheet, StatusBar, View} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';

declare const global: {HermesInternal: null | {}};

import {NavigationContainer} from '@react-navigation/native';

import {createStackNavigator} from '@react-navigation/stack';
import {Screen} from './constants';
import {AuthStackNavigator} from 'navigators/AuthStackNavigator';
import {AuthContext} from 'components/AuthContext';
import {useAuth} from 'components/AuthHook';
import {UserContext} from 'components/UserContext';
import {SplashScreen} from 'screens/Splash';
import {brandLightTheme, brandDarkTheme} from 'styles/themes';
import {TopicDrawerNavigator} from 'navigators/TopicDrawerNavigator';
import {useTheme} from 'react-native-paper';

export type RootStackParamList = {
  AuthStackNavigator: undefined;
  TopicDrawerNavigator: undefined;
  [Screen.Splash]: undefined;
  [Screen.Login]: undefined;
  [Screen.Options]: undefined;
};

const RootStack = createStackNavigator<RootStackParamList>();

const App = () => {
  const [auth, state] = useAuth();
  const [isDarkMode] = React.useState(false);
  const theme = useTheme();
  const navigationTheme = theme.dark ? brandDarkTheme : brandLightTheme;

  function renderScreens() {
    if (state.auth1.isLoading) {
      return <RootStack.Screen name={Screen.Splash} component={SplashScreen} />;
    }

    return state.auth1.user.token ? (
      <RootStack.Screen name={'TopicDrawerNavigator'}>
        {() => (
          <UserContext.Provider value={state.auth1.user}>
            <TopicDrawerNavigator />
          </UserContext.Provider>
        )}
      </RootStack.Screen>
    ) : (
      <RootStack.Screen
        name={'AuthStackNavigator'}
        component={AuthStackNavigator}
        options={{title: 'Sign In'}}
      />
    );
  }

  return (
    <View style={[styles.container]}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <AuthContext.Provider value={auth}>
        <NavigationContainer theme={navigationTheme}>
          <RootStack.Navigator
            screenOptions={{
              headerShown: false,
              animationEnabled: false,
            }}>
            {renderScreens()}
          </RootStack.Navigator>
        </NavigationContainer>
      </AuthContext.Provider>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;

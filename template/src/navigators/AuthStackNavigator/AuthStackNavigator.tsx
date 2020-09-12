import React from 'react';
import {useTheme, Appbar} from 'react-native-paper';
import {createStackNavigator} from '@react-navigation/stack';
import {useSelector} from 'react-redux';
import {LoginScreen} from 'screens/Login';
import {RegistrationScreen} from 'screens/Registration';
import {Screen} from '../../constants';

const Header = ({navigation}) => {
  const theme = useTheme();

  return (
    <Appbar.Header theme={{colors: {primary: theme.colors.primary}}}>
      <Appbar.BackAction onPress={navigation.pop} />
      <Appbar.Content title={navigation.route} />
      <Appbar.Action icon="dots-horizontal" onPress={() => {}} />
    </Appbar.Header>
  );
};

const AuthStack = createStackNavigator();
const LoginStack = createStackNavigator();

export const AuthStackNavigator = (): React.ReactElement => {
  const chatTitle = useSelector((state) => state.chatTitle);

  return (
    <AuthStack.Navigator
      mode={'card'}
      headerMode="screen"
      screenOptions={{
        header: ({scene, previous, navigation}) => (
          <Header scene={scene} previous={previous} navigation={navigation} />
        ),
      }}>
      <AuthStack.Screen name={'LoginStack'}>
        {() => (
          <LoginStack.Navigator
            mode={'card'}
            screenOptions={{
              headerShown: false,
            }}>
            <LoginStack.Screen
              name={Screen.Login}
              component={LoginScreen}
              options={{title: chatTitle, headerShown: false}}
            />
          </LoginStack.Navigator>
        )}
      </AuthStack.Screen>
      <AuthStack.Screen
        name={Screen.Registration}
        component={RegistrationScreen}
        options={{
          headerShown: true,
        }}
      />
    </AuthStack.Navigator>
  );
};

import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Button, Title, TextInput} from 'react-native-paper';

import {AuthContext} from 'components/AuthContext';
import {Loading} from 'components/Loading';

import {Error} from 'components/Error';
import {RouteProp} from '@react-navigation/native';
import {TopicDrawerStackParamList} from 'navigators/TopicDrawerNavigator';
import {StackNavigationProp} from '@react-navigation/stack';
import {Screen} from '../../constants';

type RegistrationScreenNavigationProps = StackNavigationProp<
  TopicDrawerStackParamList,
  Screen.Registration
>;

type RegistrationScreenRouteProps = RouteProp<
  TopicDrawerStackParamList,
  'Registration'
>;

type Props = {
  route: RegistrationScreenRouteProps;
  navigation: RegistrationScreenNavigationProps;
};

export const RegistrationScreen = ({navigation}: Props): React.ReactElement => {
  const {register} = React.useContext(AuthContext);
  const [email, setEmail] = React.useState('test@test.org');
  const [password, setPassword] = React.useState('password');
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState('');

  return (
    <View style={styles.container}>
      <Title style={styles.title}>Register</Title>
      <Error error={error} />
      <TextInput
        style={styles.textinput}
        mode="outlined"
        label="email"
        value={email}
        onChangeText={setEmail}
        keyboardType={'email-address'}
        placeholder={'email'}
      />
      <TextInput
        style={styles.textinput}
        mode="outlined"
        label="password"
        value={password}
        onChangeText={setPassword}
        keyboardType={'ascii-capable'}
        secureTextEntry
        placeholder={'password'}
      />
      <Button
        style={styles.button}
        mode="contained"
        icon="account-plus-outline"
        onPress={async () => {
          try {
            setLoading(true);
            await register!(email, password);
            navigation.pop();
          } catch (e) {
            setError(e.message);
            setLoading(false);
          }
        }}>
        Register
      </Button>
      <Loading loading={loading} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  title: {
    alignSelf: 'center',
    padding: 50,
  },
  button: {
    margin: 20,
    padding: 10,
  },
  textinput: {
    padding: 10,
  },
});

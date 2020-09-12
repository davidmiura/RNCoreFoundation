import React from 'react';
import {StyleSheet, View} from 'react-native';

import {Button, Title, TextInput} from 'react-native-paper';

import {Error} from 'components/Error';
import {AuthContext} from 'components/AuthContext';
import {Loading} from 'components/Loading';
import {Screen} from '../../constants';

export function LoginScreen({navigation}): React.ReactElement {
  const {login} = React.useContext(AuthContext);
  const [email, setEmail] = React.useState('test@test.org');
  const [password, setPassword] = React.useState('password123');
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState('');

  return (
    <View style={styles.container}>
      <Title style={styles.title}>Sign In</Title>
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
        icon="login-variant"
        onPress={async () => {
          try {
            setLoading(true);
            await login!(email, password);
          } catch (e) {
            setError(e.message);
            setLoading(false);
          }
        }}>
        Login
      </Button>
      <Button
        style={styles.button}
        icon="account-plus-outline"
        onPress={() => {
          navigation.navigate(Screen.Registration);
        }}>
        Registration
      </Button>
      <Loading loading={loading} />
    </View>
  );
}

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

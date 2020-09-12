/**
 * @format
 */

import 'react-native-gesture-handler';
import React from 'react';
import {AppRegistry} from 'react-native';
import App from './src/App';
import {name as appName} from './app.json';
import {Provider} from 'react-redux';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {AppearanceProvider, useColorScheme} from 'react-native-appearance';
import {ThemeContext} from 'components/ThemeContext';
import {Provider as PaperProvider} from 'react-native-paper';
import {brandLightTheme, brandDarkTheme} from 'styles/themes';
import store from 'store';

require('react-native').unstable_enableLogBox();

const MainApp = () => {
  const colorScheme = useColorScheme();
  const [theme, setTheme] = React.useState<'light' | 'dark'>(
    colorScheme === 'dark' ? 'dark' : 'light',
  );

  function toggleTheme() {
    setTheme((appTheme) => (appTheme === 'light' ? 'dark' : 'light'));
  }

  const themePreferences = React.useMemo(
    () => ({
      toggleTheme,
      theme,
    }),
    [theme],
  );

  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <AppearanceProvider>
          <ThemeContext.Provider value={themePreferences}>
            <PaperProvider
              theme={
                theme === 'light'
                  ? {
                      ...brandLightTheme,
                    }
                  : {
                      ...brandDarkTheme,
                    }
              }>
              <App />
            </PaperProvider>
          </ThemeContext.Provider>
        </AppearanceProvider>
      </SafeAreaProvider>
    </Provider>
  );
};

AppRegistry.registerComponent(appName, () => MainApp);

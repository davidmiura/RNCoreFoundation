import React from 'react';
import {StyleSheet} from 'react-native';
import color from 'color';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {useTheme, Portal, FAB} from 'react-native-paper';
import {useSafeArea} from 'react-native-safe-area-context';
import {useIsFocused, RouteProp} from '@react-navigation/native';
import {getFocusedRouteNameFromRoute} from '@react-navigation/core';
import overlay from './overlay';
import {TopicDrawerStackParamList} from 'navigators/TopicDrawerNavigator';
import {ProductsScreen} from 'screens/Products';
import {ChatScreen} from 'screens/Chat';
import {OptionsScreen} from 'screens/Options';
import {MaterialBottomTabParamList} from 'components/BottomTabs';

const Tab = createMaterialBottomTabNavigator<MaterialBottomTabParamList>();

type BottomTabsProps = {
  route: RouteProp<TopicDrawerStackParamList, 'Products'>;
};

export const BottomTabs = (props: BottomTabsProps) => {
  const routeName = getFocusedRouteNameFromRoute(props.route);
  const theme = useTheme();
  const safeArea = useSafeArea();
  const isFocused = useIsFocused();

  let icon = 'feather';

  switch (routeName) {
    case 'Messages':
      icon = 'chat-plus-outline';
      break;
    default:
      icon = 'account-outline';
      break;
  }

  const tabBarColor = theme.dark
    ? (overlay(6, theme.colors.surface) as string)
    : theme.colors.surface;

  return (
    <React.Fragment>
      <Tab.Navigator
        initialRouteName="Products"
        backBehavior="initialRoute"
        shifting={true}
        activeColor={theme.colors.primary}
        inactiveColor={color(theme.colors.text).alpha(0.6).rgb().string()}
        sceneAnimationEnabled={false}>
        <Tab.Screen
          name="Products"
          component={ProductsScreen}
          options={{
            tabBarIcon: 'shopping',
            tabBarColor,
          }}
        />
        <Tab.Screen
          name="Messages"
          component={ChatScreen}
          options={{
            tabBarIcon: 'message-text-outline',
            tabBarColor,
          }}
        />
        <Tab.Screen
          name="Options"
          component={OptionsScreen}
          options={{
            tabBarIcon: 'cog-outline',
            tabBarColor,
          }}
        />
      </Tab.Navigator>
      <Portal>
        <FAB
          visible={isFocused}
          icon={icon}
          style={[styles.fab, {bottom: safeArea.bottom + 65}]}
          color="white"
          theme={{
            colors: {
              accent: theme.colors.primary,
            },
          }}
          onPress={() => {}}
        />
      </Portal>
    </React.Fragment>
  );
};

const styles = StyleSheet.create({
  fab: {
    position: 'absolute',
    bottom: 65,
    right: 16,
  },
});

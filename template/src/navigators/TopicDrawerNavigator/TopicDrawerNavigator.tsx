import * as React from 'react';
import {View, StyleSheet} from 'react-native';
import {
  Avatar,
  Title,
  Caption,
  Drawer,
  Text,
  TouchableRipple,
  Switch,
} from 'react-native-paper';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {
  createDrawerNavigator,
  DrawerItem,
  DrawerContentScrollView,
  DrawerNavigationProp,
  DrawerContentComponentProps,
} from '@react-navigation/drawer';
import type {TopicDrawerStackParamList} from './types';
import {MainStack} from 'navigators/MainStackNavigator';
import {ThemeContext} from 'components/ThemeContext';

type DrawerProps = DrawerContentComponentProps<DrawerNavigationProp>;

function DrawerContent(props: DrawerProps) {
  const {theme, toggleTheme} = React.useContext(ThemeContext);

  return (
    <DrawerContentScrollView {...props}>
      <View style={styles.drawerContent}>
        <View style={styles.userInfoSection}>
          <TouchableRipple
            onPress={() => {
              props.navigation.closeDrawer();
            }}>
            <View style={styles.title}>
              <Avatar.Image
                source={{
                  uri: 'file:///mug.jpg',
                }}
                size={50}
              />
            </View>
          </TouchableRipple>
          <Title style={styles.title}>Me</Title>
          <Caption style={styles.caption}>@me</Caption>
        </View>
        <Drawer.Section style={styles.drawerSection}>
          <DrawerItem
            icon={({color, size}) => (
              <Icon name="account-outline" color={color} size={size} />
            )}
            label="Account"
            onPress={() => {}}
          />
          <DrawerItem
            icon={({color, size}) => (
              <Icon name="account-group-outline" color={color} size={size} />
            )}
            label="Groups"
            onPress={() => {}}
          />
          <DrawerItem
            icon={({color, size}) => (
              <Icon name="bookmark-outline" color={color} size={size} />
            )}
            label="Bookmarks"
            onPress={() => {}}
          />
        </Drawer.Section>
        <Drawer.Section title="Preferences">
          <TouchableRipple
            onPress={() => {
              toggleTheme();
            }}>
            <View style={styles.preference}>
              <Text style={styles.text}>Theme</Text>
              <View pointerEvents="none">
                <Switch value={theme === 'dark'} />
              </View>
            </View>
          </TouchableRipple>
        </Drawer.Section>
      </View>
    </DrawerContentScrollView>
  );
}

// https://stackoverflow.com/questions/59638040/multiple-drawers-in-react-navigation-5-0
const DrawerNav = createDrawerNavigator<TopicDrawerStackParamList>();

export const TopicDrawerNavigator = (): React.ReactElement => {
  return (
    <DrawerNav.Navigator
      drawerPosition="left"
      drawerStyle={[styles.drawer]}
      drawerContent={(props) => <DrawerContent {...props} />}>
      <DrawerNav.Screen name="Main" component={MainStack} />
    </DrawerNav.Navigator>
  );
};

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  drawer: {
    width: '80%',
  },
  userInfoSection: {
    paddingLeft: 20,
  },
  title: {
    marginTop: 20,
    fontWeight: 'bold',
  },
  text: {
    padding: 2,
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
  },
  row: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  section: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 15,
  },
  paragraph: {
    fontWeight: 'bold',
    marginRight: 3,
  },
  drawerSection: {
    marginTop: 15,
  },
  preference: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
});

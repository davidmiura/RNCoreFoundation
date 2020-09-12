import React from 'react';
import {TouchableOpacity, StyleSheet} from 'react-native';
import {useTheme, Appbar, Avatar} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {createStackNavigator} from '@react-navigation/stack';
import {getFocusedRouteNameFromRoute} from '@react-navigation/core';
import {BottomTabs} from 'components/BottomTabs';
import {TopicDrawerStackParamList} from 'navigators/TopicDrawerNavigator';

const Header = ({scene, previous, navigation}): React.ReactElement => {
  const {options} = scene.descriptor;
  const theme = useTheme();

  const title =
    options.headerTitle !== undefined
      ? options.headerTitle
      : options.title !== undefined
      ? options.title
      : scene.route.name;

  return (
    <Appbar.Header theme={{colors: {primary: theme.colors.surface}}}>
      {previous ? (
        <Appbar.BackAction
          onPress={navigation.pop}
          color={theme.colors.primary}
        />
      ) : (
        <TouchableOpacity
          onPress={() => {
            navigation.openDrawer();
          }}>
          <Avatar.Image
            size={40}
            source={{
              uri: 'file:///mug.jpg',
            }}
          />
        </TouchableOpacity>
      )}
      <Appbar.Content
        title={
          title === 'Feed' ? (
            <Icon
              style={[styles.icon]}
              name="twitter"
              size={40}
              color={theme.colors.primary}
            />
          ) : (
            title
          )
        }
        titleStyle={[
          styles.title,
          {
            color: theme.colors.primary,
          },
        ]}
      />
      <Appbar.Action icon="magnify" onPress={() => {}} />
      <Appbar.Action
        icon="menu"
        onPress={() => {
          navigation.openDrawer();
        }}
      />
    </Appbar.Header>
  );
};

const TocStack = createStackNavigator<TopicDrawerStackParamList>();

export const MainStack = () => {
  return (
    <TocStack.Navigator
      initialRouteName="FeedList"
      headerMode="screen"
      screenOptions={{
        header: ({scene, previous, navigation}) => (
          <Header scene={scene} previous={previous} navigation={navigation} />
        ),
      }}>
      <TocStack.Screen
        name="FeedList"
        component={BottomTabs}
        options={({route}) => {
          const routeName = getFocusedRouteNameFromRoute(route);
          return {headerTitle: routeName};
        }}
      />
    </TocStack.Navigator>
  );
};

const styles = StyleSheet.create({
  icon: {
    marginRight: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Title} from 'react-native-paper';
import {MaterialBottomTabNavigationProp} from '@react-navigation/material-bottom-tabs';
import {MaterialBottomTabParamList} from 'components/BottomTabs';
import {RouteProp} from '@react-navigation/native';

type ProductsScreenRouteProp = RouteProp<
  MaterialBottomTabParamList,
  'Products'
>;

type ProductsScreenNavigationProp = MaterialBottomTabNavigationProp<
  MaterialBottomTabParamList,
  'Products'
>;

type ProductsScreenProps = {
  route: ProductsScreenRouteProp;
  navigation: ProductsScreenNavigationProp;
};

export const ProductsScreen = ({}: ProductsScreenProps): React.ReactElement => {
  return (
    <View style={styles.container}>
      <Title style={styles.title}>Products</Title>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 3,
  },
});

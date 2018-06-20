import React from 'react';
import { Text, View, StyleSheet } from 'react-native';


const listItem = (props) => (
  <View>
    <Text style={styles.listItem}>{props.placeName}</Text>
  </View>
);

const styles = StyleSheet.create({
  listItem: {
    width: '100%',
    marginBottom: 5,
    padding: 10,
    backgroundColor: '#eee'
  }
});

export default listItem;

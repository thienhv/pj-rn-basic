import React from 'react';
import { Text, View, StyleSheet, TouchableWithoutFeedback } from 'react-native';


const listItem = (props) => (
  <TouchableWithoutFeedback onPress={props.onItemPressed}>
    <View>
      <Text style={styles.listItem}>{props.placeName}</Text>
    </View>
  </TouchableWithoutFeedback>
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

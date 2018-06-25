import React from 'react';
import { StyleSheet, View, TextInput, Button } from 'react-native';

const placeInput = props => {
  return(
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.placeInput}
        value={props.placeName}
        placeholder='Enter a text'
        onChangeText={props.onChangeText}/>
      <Button
        title='Add'
        style={styles.placeButton}
        onPress={props.onPress}/>
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  placeInput: {
    width: '70%'
  },
  placeButton: {
    width: '30%'
  }
});

export default placeInput;

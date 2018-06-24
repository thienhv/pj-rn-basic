import React from 'react';
import { StyleSheet, Modal, View, Image, Text, Button } from 'react-native';

const placeDetail = props => {
  let modalContent = null;
  if (props.selectedPlace) {
    modalContent = (
      <View>
        <Image resizeMode={Image.resizeMode.contain} source={props.selectedPlace.image} style={styles.placeImage}/>
        <Text style={styles.placeName}>{props.selectedPlace.name}</Text>
      </View>
    );
  }
  return(
    <Modal
      visible={props.selectedPlace !== null}
      animationType='slide'
      onRequestClose={() => {
        alert('Modal has been closed.');
      }}>
      <View style={styles.modalContainer}>
        {modalContent}
        <View>
          <Button onPress={props.onItemDeleted} title='Delete' color='red'/>
          <Button onPress={props.onModalClosed} title='Close' />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    margin: 22,
  },
  placeImage: {
    width: '100%',
    height: 200
  },
  placeName: {
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 28
  }
});

export default placeDetail;

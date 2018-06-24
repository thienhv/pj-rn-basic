import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import PlaceList from './src/components/PlaceList/PlaceList';
import PlaceDetail from './src/components/PlaceDetail/PlaceDetail';

export default class App extends React.Component {
  state = {
    placeName: '',
    places: [],
    selectedPlace: null
  }
  placeNameChangeHandler = val => {
    this.setState({placeName: val});
  }
  placeSubmitHandler = () => {
    if(this.state.placeName.trim() === '') {
      return;
    }
    this.setState(prevState => {
      return {
        places: prevState.places.concat({
          key: Math.random().toString(),
          name: prevState.placeName,
          image: {
            uri: 'http://www.watchoutladies.net/wp-content/uploads/2015/07/Beautiful-girl-makeup-for-blue-eyes.jpg'
          }
        })
      }
    });
  }
  placeDeleteHandler = () => {
    this.setState(prevState => {
      return {
        places: prevState.places.filter((place) => {
          return place.key !== prevState.selectedPlace.key;
        }),
        selectedPlace: null
      }
    });
  }
  onModalClosedHandler = () => {
    this.setState({
      selectedPlace: null
    });
  }
  placeSelectedHandler = key => {
    this.setState(prevState => {
      return {
        selectedPlace: prevState.places.find((place) => {
          return key === place.key;
        })
      }
    });
  }
  render() {
    return (
      <View style={styles.container}>
        <PlaceDetail
          onItemDeleted={this.placeDeleteHandler}
          onModalClosed={this.onModalClosedHandler}
          selectedPlace={this.state.selectedPlace}/>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.placeInput}
            value={this.state.placeName}
            placeholder='Enter a text'
            onChangeText={this.placeNameChangeHandler}/>
          <Button
            title='Add'
            style={styles.placeButton}
            onPress={this.placeSubmitHandler}/>
        </View>
        <PlaceList
          onItemSelected={this.placeSelectedHandler}
          places={this.state.places}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  inputContainer: {
    // flex: 1,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  listContainer: {
    width: '100%'
  },
  placeInput: {
    width: '70%'
  },
  placeButton: {
    width: '30%'
  }
});

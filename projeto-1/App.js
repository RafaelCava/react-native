import React from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';
  
export default class App extends React.Component {


  render(){
    return (
      <>
        <View style={styles.container}>

        </View>
      </>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  colorInitial: {
    backgroundColor: '#fff',
    color: 'red'
  },
  image: {
    width:150,
    height:150,
  }
});


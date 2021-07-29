import React from 'react';
import { View } from 'react-native';
import Body from './components/Body';
import Header from './components/Header'
import styles from './styles/styles';
export default class App extends React.Component {


  render() {
    return (
      <>
        <View style={styles.container}>
          <Header />
          <Body />
        </View>
      </>
    );
  }
}


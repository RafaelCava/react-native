import React from 'react';
import { ScrollView, View } from 'react-native';
import Body from './components/Body';
import Header from './components/Header'
import styles from './styles/styles';
export default class App extends React.Component {


  render() {
    return (
      <>
        <ScrollView style={styles.container}>
          <Header />
          <Body />
        </ScrollView>
      </>
    );
  }
}


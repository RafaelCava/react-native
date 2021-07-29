import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
 
const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.colorInitial}>
        Funcionando aqui
        </Text>
      <Text>Vamos lá</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  colorInitial: {
    color: 'red'
  }
});

export default App
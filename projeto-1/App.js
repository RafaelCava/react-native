import React from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';
  
export default class App extends React.Component {

  Header = () => {
    return (
      <Text>Home | Sobre | Contato</Text>
      )
  }
  Body = () => {
    return (
      <Text>Conteudo do meu app</Text>
      )
  }

  Footer = () => {
    return (
      <Text>Rodapé do meu app</Text>
      )
  }

  render(){
    return (
      <>
        <View style={styles.container}>
            <this.Header />
            <this.Body />
            <this.Footer />
            <Botao style={styles.colorInitial}/>
        </View>
      </>
    );
  }
}

const Botao = () =>{
  return (
    <Button title="Clique" />
  )
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
  },
  image: {
    width:150,
    height:150,
  }
});


import React, {Component} from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

class WelcomeComponent extends Component {
  
  render(){
    let nome = 'Lucas'
    return(
      <>
          <Text style={styles.boaVindas}>Olá, seja bem vindo!</Text>

          <Text><Text style={styles.textVariable}>{nome}</Text>, estamos felizes que está em nosso Aplicativo Expo</Text>
      </>
    )
  }
}

const styles = StyleSheet.create({
  boaVindas:{
    color: 'blue',
    fontSize: 20,
    padding: 20,
    fontWeight: 'bold'
  },
  textVariable:{
    fontWeight: 'bold',
    fontSize: 18
  }
})


export default WelcomeComponent
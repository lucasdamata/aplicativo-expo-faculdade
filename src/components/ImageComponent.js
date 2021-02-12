import React, {Component} from 'react';
import { StyleSheet, Text, Image } from 'react-native';
import {Feather} from '@expo/vector-icons'

class ImageComponent extends Component {
  render(){
    let img = 'https://reactnative.dev/img/header_logo.svg'
    return(
      <>
      <Image 
          source={{uri: img}}
          style= {{width: 300, height: 300, marginVertical:20}}
      />
      <Text style={styles.styleText}>Clique aqui para acessar</Text>
      <Feather size={50} name="arrow-down" style={{color: '#7F6DF3'}} />
      </>
    )
  }
}

const styles = StyleSheet.create({
    styleText:{
        fontSize: 15
    }
})


export default ImageComponent
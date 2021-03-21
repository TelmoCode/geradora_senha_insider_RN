import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,

} from 'react-native';

import Slider from '@react-native-community/slider';

import Clipboard from 'expo-clipboard'


export default function App() {

  let charset = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890/?><@#$%&*()!'

  const [passWord, setPassWord] = useState('');
  const [size, setSize] = useState(5)

  function gerarSenha() {

    let pass = '';
    for (let i = 0, n = charset.length; i < size; i++) {
      pass += charset.charAt(Math.floor(Math.random() * n))
    }

    setPassWord(pass)

  }

  function copiarSenha(){
    Clipboard.setString(passWord)
    alert('Senha copiada ')
  }

  return (
    <View style={styles.container}>

      <Image
        style={styles.logo}
        source={require('./src/assets/logo.png')}
      />
      <Text style={styles.titulo}>{size} Caracteres</Text>
      <View style={styles.area}>

        <Slider
          style={{ height: 50 }}
          minimumValue={5}
          maximumValue={15}
          minimumTrackTintColor="#FF0000"
          maximumTrackTintColor="#22222f"
          value={size}
          onValueChange={(valor) => setSize(valor.toFixed(0))}
        />

      </View>


      <TouchableOpacity style={styles.btnArea} onPress={gerarSenha}>
        <Text style={styles.btnText} >Gerar Senha</Text>
      </TouchableOpacity>

      {passWord !== '' &&(

        <View style={styles.area} >
          <Text style={styles.senha} onLongPress={copiarSenha}>
            {passWord}
          </Text>
        </View>

      )}



    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f3f2ff',
    alignItems: 'center',
    justifyContent: 'center',

  },

  logo: {
    marginBottom: 60

  },
  titulo: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 15,
    marginTop: 15

  },
  area: {
    backgroundColor: '#fff',
    width: '90%',
    height: 50,


  },
  btnArea: {
    width: '90%',
    height: 60,
    backgroundColor: '#f59b0a',
    margin: 10,
    borderRadius: 10,



  },
  btnText: {
    fontSize: 40,
    fontWeight: 'bold',
    color: "#ffffff",
    textAlign: 'center'

  },
  senha: {
    color: 'blue',
    textAlign: 'center',
    fontSize: 30

  }
})
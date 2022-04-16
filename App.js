import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Slider } from "@miblanchard/react-native-slider";
import * as Clipboard from "expo-clipboard";

let charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
export default function App() {

  const [password, setPassword] = useState("");
  const [size, setSize] = useState(5);


  function generatePass() {
    let pass = '';
    for (let i = 0, n = charset.length; i < size; i++) {
      pass += charset.charAt(Math.floor(Math.random() * n));
    }
    setPassword(pass);
  }

  function copyPass(){
    Clipboard.setString(password);
    alert("Password copied with success!");
  }

  return (
    <View style={styles.container}>
      <Image
        source={require('./src/assets/cadeado.png')}
        style={styles.logo}
      />
      <Text style={styles.title}>{size} caracteres</Text>
      <View style={styles.area}>
        <Slider
          style={{ width: 50 }}
          minimumValue={5}
          maximumValue={15}
          minimumTrackTintColor="#Ff0000"
          maximumTrackTintColor="#000000"
          value={size}
          onValueChange={(value) => setSize(Number(value).toFixed(0))}
        />
      </View>
      <TouchableOpacity style={styles.button} onPress={generatePass}>
        <Text style={styles.buttonText}>Gerar senha</Text>
      </TouchableOpacity>

      {
        password !== '' && (
          <View style={styles.area}>
            <Text style={styles.password} onLongPress={copyPass}>{password}</Text>
          </View>
        )
      }


    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F3F3FF'
  },
  logo: {
    marginBottom: 60,
    width: 300,
    height: 300
  },
  title: {
    fontSize: 30,
  },
  area: {
    marginTop: 15,
    marginBottom: 15,
    backgroundColor: '#FFF',
    width: '80%',
    borderRadius: 7,
  },
  button: {
    backgroundColor: '#FFa200',
    width: '80%',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 7,
    marginBottom: 25
  },
  buttonText: {
    color: '#FFF',
    fontSize: 20,
    fontWeight: 'bold'
  },
  password: {
    padding: 10,
    textAlign: 'center',
    color: 'black',
    fontSize: 20,
  }

});
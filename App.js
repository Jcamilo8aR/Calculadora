import { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity } from 'react-native';
import Banner from './components/Banner';
import Footer from './components/Footer';
import {styles, myimage} from './assets/styles/styles1'

export default function App() {
  
  //STATES
  const [value1, setValue1] = useState('');
  const [value2, setValue2] = useState('');
  const [result, setResult] = useState('')

  let mymess = "Este es el pie de la GUI";
  let mImage="Calculadora.png"
  return (
    <View style={styles.container}>
      <Banner imgName={mImage}></Banner>
      <View style={{flex:4, borderWidth:2, borderColor:'black', width:'100%', alignItems:'center', justifyContent:'center' }}>
        <Text>Calculadora</Text>
        <Text>Valor 1</Text>
        <TextInput 
          placeholder='Ingrese valor 1'
          onChangeText={value1 => setValue1(value1)} //Capturamos el valor ingresado
          value={value1}
          style={styles.tInputs}
        />

        <Text>Valor 2</Text>
        <TextInput 
          placeholder='Ingrese valor 1'
          onChangeText={value2 => setValue2(value2)} //Capturamos el valor ingresado
          value={value2}
          style={styles.tInputs}
        />

        <View style={{flexDirection:'row'}}>
          <TouchableOpacity
          style={{padding:5, borderRadius:2, margintTop:20, backgroundColor:'gray'}}
          >
            <Text>+</Text>
          </TouchableOpacity>
          
          <TouchableOpacity
          style={{padding:5, borderRadius:2, margintTop:20, backgroundColor:'gray'}}
          >
            <Text>-</Text>
          </TouchableOpacity>

          <TouchableOpacity
          style={{padding:5, borderRadius:2, margintTop:20, backgroundColor:'gray'}}
          >
            <Text>*</Text>
          </TouchableOpacity>

          <TouchableOpacity
          style={{padding:5, borderRadius:2, margintTop:20, backgroundColor:'gray'}}
          >
            <Text>/</Text>
          </TouchableOpacity>
        </View>
      </View>

      

    
      <View style={{flex:1, alignItems:'center', justifyContent:'center'}}> 
        <Footer message="Footer"/>
      </View> 
    </View>
  );
}






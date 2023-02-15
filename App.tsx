/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';
import {
  Button,
  Text,
  TextInput,
  StyleSheet,
  View,
} from 'react-native';


import { registerRootComponent } from 'expo';

registerRootComponent(App);



function App(): JSX.Element {

  const [count, setCount] = useState(0);
  const [txt, setTxt] = useState('');

  return (
    <View style={Mystyles.container}>
      <Text style={Mystyles.heading}>Type Something in the Input field Below, It will apear here...</Text>
      <Text style={Mystyles.heading}>{txt}</Text>
      <View style={Mystyles.btn}>
        <TextInput style={Mystyles.inputField} placeholder='Type Something' onChangeText={(e)=>setTxt(e)} 
        value={txt}
        />
      </View>
      <Text style={Mystyles.heading}>{count}</Text>
      <View style={Mystyles.btn}>
        <Button title='Click Me' onPress={()=>setCount(count+1)} />
      </View>
      <View style={Mystyles.btn}>
        <Button title='Reset Input Field' onPress={()=>setTxt('')} />
      </View>

    </View>
  );
}

const Mystyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  heading: {
    fontSize: 25,
    color: '#222',
    fontWeight: 'bold'
  },
  btn: {
    marginVertical: 8
  },
  inputField: {
    borderRadius: 6,
    width: 200,
    borderWidth: 2,
    borderStyle: 'solid',
    borderColor: '#333',
    paddingVertical: 4,
    paddingHorizontal: 10
  }
});

export default App;

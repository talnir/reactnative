import React, {useState} from 'react';
import {View, Text, Button, FlatList, StyleSheet, TextInput} from 'react-native';

export default function App() {

  return (
     <View style={styles.screen} >
         <View style={styles.inputContainer}>
           <TextInput style={styles.input} placeholder="Goal"/>
           <Button  title="ADD"/>
         </View>
     </View>
  );
}

const styles  = StyleSheet.create({
  screen: {
   padding: 50
  },
  inputContainer: {
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'    
  },
  input: {
    width: '80%',
    borderWidth: 1,
    borderColor: 'black'
  }
});
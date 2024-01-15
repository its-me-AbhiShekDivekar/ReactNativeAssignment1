import React, { useState } from 'react'
import { Button, StyleSheet, Text, TextInput, View } from 'react-native'

const EvenOdd = () => {
  const [num, setNum] = useState('');
  function checkNum() {

    if (+num || num == 0) {
      if (num % 2 == 0) {
        return (`THE GIVEN NUMBER ${num} IS EVEN NUMBER`);
      }
      else {
        return (`THE GIVEN NUMBER ${num} IS ODD NUMBER`);
      }
    }
    else {
      return (`PLEASE GIVE VALID INPUT`);
    }

  }
  
  return (
    <View style={styling.mainbody}>
      <Text style={styling.title}>FIND THE NUMBER IS EVEN OR ODD</Text>
      <TextInput style={styling.inp} placeholder='ENTER A NUMBER HERE' onChangeText={(value) => setNum(value)}></TextInput>
      <Text style={ styling.output}>THE ENTERED NUM IS {num}</Text>
      <View style={styling.buttonstyle}>
      <Button title='CHECK_NUMBER' onPress={() => { console.warn(checkNum()), styling.inp.marginBottom = 0 }}></Button>
      </View>
     
    </View>

  )
}
const styling = StyleSheet.create({
  inp: {
    borderWidth: 2,
    borderColor: 'blue',
    marginBottom: 20,
    textAlign:'center',
    width:200,
    marginLeft:100
  },
  title: {
    margin: 50,
    fontSize: 20,
    color: 'blue',
    textAlign: 'center',
  },
  output: {
    fontSize: 20,
    margin: 15,
    marginLeft:60
  },
  mainbody:{
    height:400,
    width:400,
    borderWidth:2,
    borderColor:'black',
    marginLeft:5,
    marginTop:200
  },
  buttonstyle:{
    padding:50,
  }
})

export default EvenOdd;

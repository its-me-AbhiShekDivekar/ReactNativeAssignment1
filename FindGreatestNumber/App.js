import React, { useState } from 'react'
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

 function GreatestNumAssignment() {

    const [num1, setNum1] = useState('');
    const [num2, setNum2] = useState('');
    const [gnum, setGnum] = useState('');

    function greatestNumber() {
        if ((+num1 || num1 == 0) && (+num2 || num2 == 0)) {
            if (+num1 > Number(num2)) {
                setGnum(num1);
            }
            else {
                setGnum(num2);
            }
        }
        else {
            setGnum("GIVE VALID INPUT");
        }
        setNum1('');
        setNum2('');
    }

   

    return (
      
        <View style={styles.outerbox} >
          
            <Text style={styles.heading}>FIND THE GREATEST NUMBER FROM TWO NUMBERS</Text>

            <TextInput style={styles.viewstyle} placeholder='first num' value={num1} onChangeText={(value1) => { setNum1(value1); }} onFocus={() => setGnum('')}></TextInput>
            
            <TextInput style={styles.viewstyle} placeholder='second num' value={num2} onChangeText={(value2) => { setNum2(value2); }} onFocus={() => setGnum('')}></TextInput>
           
            <View style={styles.buttonStyle}>
                <Button color={'red'} title='SUBMIT' onPress={() => greatestNumber()}></Button>
                <Text style={styles.result}>RESULT :{gnum}</Text>
            </View>
            
        </View>
       
       
    )}

    const styles = StyleSheet.create({
        heading: {
            margin: 40,
            color: 'red',
            fontSize: 20,
            fontStyle: 'italic',
            textAlign: 'center',
            fontWeight: '600'
        }
        ,
        viewstyle: {
            borderWidth: 3,
            borderColor: 'black',
            borderRadius: 10,
            marginTop: 15,
            textAlign: 'center',
            width: 100,
            alignSelf: 'center',
            color:'black'
        },
        buttonStyle: {
            padding: 90
        },
        result: {
            fontSize: 20,
            marginTop:20,
            color:'white',
            backgroundColor:'black'
        },
        outerbox:{
            height:500,
            width:300,
            borderWidth:2,
            borderColor:'red',
            backgroundColor:'skyblue',
            margin:'auto',
            marginLeft:55,
            marginTop:150,
        },
        img: { 
           
            justifyContent: 'center', 
            alignItems: 'center', 
          }
    })

    export default GreatestNumAssignment;

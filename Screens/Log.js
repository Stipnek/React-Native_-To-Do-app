import { KeyboardAvoidingView, Text, TouchableOpacity, View } from 'react-native'
import React, { useState, useEffect } from 'react'
import { TextInput } from "react-native-gesture-handler";
import { globalStyles } from '../globalStyles';
import { auth } from '../firebase';
import { useNavigation } from "@react-navigation/core";

const Log = () => {

  const navigation = useNavigation();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    const unsubscribe = auth
      .onAuthStateChanged(user => {
        if (user) {
          navigation.replace('Home');
        }
      })
    return unsubscribe;
  }, [])
  //REGISTRATION
  const signUpHandler = () => {
    auth
      .createUserWithEmailAndPassword(email, password)
      .then(userCredentials => {
        const user = userCredentials.user;
        console.log('Sign Up:', user.email);
      })
      .catch(error => alert(error.message));
  }
  //LOGIN
  const signInHandler = () => {
    auth
      .signInWithEmailAndPassword(email, password)
      .then(userCredentials => {
        const user = userCredentials.user;
        console.log('Sign In:', user.email);
      })
      .catch(error => alert(error.message));
  }

  return (
    <KeyboardAvoidingView style={globalStyles.container}>
      <View style={globalStyles.inputContainer}>
        <TextInput style={globalStyles.input}
          value={email}
          onChangeText={text => setEmail(text)}
          placeholder="Email" 
          keyboardType="visible-password"
        />

        <TextInput style={globalStyles.input}
          value={password}
          onChangeText={text => setPassword(text)}
          placeholder="Password"
          secureTextEntry />
      </View>
      <View style={globalStyles.buttonContainer}>
        <TouchableOpacity style={globalStyles.button}
          onPress={signInHandler}>
          <Text style={globalStyles.buttonText}>Sigh In</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[globalStyles.button, globalStyles.buttonRegister]}
          onPress={signUpHandler}>
          <Text style={globalStyles.buttonTextRegister}>Sigh Up</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  )
}

export default Log


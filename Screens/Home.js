import React, { useState, useEffect } from 'react';
import { Text, View, TouchableOpacity, FlatList, TextInput, Keyboard, Pressable, Alert } from 'react-native'
import { globalStyles } from '../globalStyles';
import { auth, firebase } from "../firebase";
import { useNavigation } from "@react-navigation/core";
import FontAwesome from '@expo/vector-icons/FontAwesome';
import * as Speech from 'expo-speech';


const Home = () => {

  const navigation = useNavigation();

  const [toDos, setToDos] = useState([]);
  const toDoRef = firebase.firestore().collection('toDos');
  const [addData, setAddData] = useState('');

  const Separator = () => <View style={globalStyles.separator} />;


  //creating toDOs
  const createToDo = () => {
    if (addData && addData.length > 0) {
      const timestamp = firebase.firestore.FieldValue.serverTimestamp();
      const data = {
        heading: addData,
        createdAt: timestamp
      };
      toDoRef
        .add(data)
        .then(() => {
          setAddData('');
          Keyboard.dismiss();
        })
        .catch((error) => {
          alert(error);
        })
    }
  }

  //reading the data
  useEffect(() => {
    toDoRef
      .orderBy('createdAt', 'desc')
      .onSnapshot(
        querySnapshot => {
          const toDos = [];
          querySnapshot.forEach((doc) => {
            const { heading } = doc.data()
            toDos.push({
              id: doc.id,
              heading
            })
          })
          setToDos(toDos)
        }
      )
  }, [])

  //deletion
  const deleteToDo = (toDos) => {
    toDoRef
      .doc(toDos.id)
      .delete()
      .then(() => {
        Alert.alert('Deletion!', 'The data has been deleted!', [{ text: 'Okay' }]);
      })
      .catch(error => {
        Alert.alert('Error!', error, [{ text: 'Okay' }]);
      })
  }

  //OUT
  const signOutHandler = () => {
    auth
      .signOut()
      .then(() => {
        navigation.replace('Login');
        console.log('User signed out!')
      })
      .catch(error => {
        Alert.alert('Error!', error, [{ text: 'Okay' }]);
      })
  }

  //Speech
  const speak = (item) => {
    const phrase = item.heading;
    Speech.speak(phrase);
    console.log('Reading the to-Do');
  }


  return (
    <View style={globalStyles.container}>

      <View style={globalStyles.signOutContainer}>
        <Text>Email: {auth.currentUser?.email} </Text>
        <TouchableOpacity style={globalStyles.signOutButton}
          onPress={signOutHandler}>
          <Text style={globalStyles.signOutButtonText}>Sigh Out</Text>
        </TouchableOpacity>
      </View>
      <Separator />

      <View style={globalStyles.inputContainer}>
        <TextInput style={globalStyles.input}
          placeholder='Add a new ToDo'
          value={addData}
          onChangeText={(heading) => setAddData(heading)}
          keyboardType="visible-password"
        />

        <TouchableOpacity style={globalStyles.button}
          onPress={createToDo}>
          <Text style={globalStyles.buttonText}>Create</Text>
        </TouchableOpacity>
      </View>
      <Separator />

      <FlatList
        data={toDos}
        numColumns={1}
        renderItem={({ item }) => (
          <View>
            <Pressable style={globalStyles.flatContainer}
              onPress={() => navigation.navigate('Detail', { item })}>

              <FontAwesome name="play" color='#8c8cf0'
                onPress={() => speak(item)}
                style={globalStyles.iconPlay}
              />

              <View style={globalStyles.outputContainer}>
                <Text style={globalStyles.outputText}>
                  {item.heading}
                </Text>
              </View>

              <FontAwesome name="trash-o" color='red'
                onPress={() => deleteToDo(item)}
                style={globalStyles.icon}
              />


            </Pressable>
          </View>
        )}
      />
    </View>
  )
}

export default Home

import React, { useState } from 'react';
import { Text, View, TouchableOpacity, TextInput } from 'react-native'
import { globalStyles } from '../globalStyles';
import { firebase } from "../firebase";
import { useNavigation } from "@react-navigation/core";

const Detail = ({ route }) => {

  const navigation = useNavigation();
  const toDoRef = firebase.firestore().collection('toDos');
  const [textHeading, onChangeHeadingText] = useState(route.params.item.name);

  //UPDATING
  const updateToDo = () => {
    if (textHeading && textHeading.length > 0) {
      toDoRef
        .doc(route.params.item.id)
        .update({
          heading: textHeading,
        })
        .then(() => {
          navigation.navigate('Home');
        })
        .catch((error) => {
          alert(error.message);
        })
    }
  }

  return (
    <View style={globalStyles.detailsContainer}>

      <Text style={globalStyles.detailsTextField}>Update from: '{route.params.item.heading}'</Text>
      <TextInput
        style={globalStyles.detailsTextField}
        onChangeText={onChangeHeadingText}
        value={textHeading}
        defaultValue={route.params.item.heading}
        placeholder='New text here to update...'
        keyboardType="visible-password"
      />

      <TouchableOpacity
        style={globalStyles.detailsUpdateButton}
        onPress={() => { updateToDo() }}
      >
        <Text style={globalStyles.detailsUpdateButtonText}>
          Update ToDo
        </Text>

      </TouchableOpacity>

    </View>
  )
}

export default Detail


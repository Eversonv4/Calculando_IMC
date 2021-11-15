import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

export default props => {
  return(
    <View style={styles.bloco}>
      <Text>Informe sua altura:</Text>
      <TextInput
        style={styles.txt}
        autoFocus={false}
        keyboardType={'numeric'}
        onChangeText={text => props.aoModificar(text)}
      ></TextInput>
    </View>
  )
}

const styles = StyleSheet.create({
  bloco: {
    marginBottom: 20,
  },
  txt: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#000',
    padding: 10,
    borderRadius: 10,
  },
});
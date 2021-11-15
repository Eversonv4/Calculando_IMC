import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';

export default props => {
  return(
    <View style={styles.bloco}>
      <TouchableHighlight
        style={styles.btnCalc}
        onPress={props.aoClicar}
      >
        <Text style={styles.txtBtn}>Calcular IMC</Text>
      </TouchableHighlight>
    </View>
  )
}

const styles = StyleSheet.create({
  bloco: {
    marginBottom: 20,
  },
  btnCalc: {
    backgroundColor: '#048',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderRadius: 10,
  },
  txtBtn: {
    fontSize: 15,
    textTransform: 'uppercase',
    color: '#fff',
  },
});
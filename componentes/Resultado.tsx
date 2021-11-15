import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default props => {
  return(
    <View style={styles.bloco}>
      <Text>Resultado: <Text style={{ fontSize: 25, color: '#0ff', fontWeight: 'bold' }}>{props.valorResultado}</Text> </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  bloco: {
    marginBottom: 20,
  },
});
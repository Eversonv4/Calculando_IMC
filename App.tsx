import React, { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, TouchableHighlight, TextInput, Button, Image } from 'react-native';

export default function calc() {

  const [peso, setPeso] = useState(0);
  const [altura, setAltura] = useState(0);
  const [resultado, setResultado] = useState(0);

  const calcImc = () => {
    if (peso == 0 || !peso) {
      alert("Informe o peso");
      return
    }
    if (altura == 0 || !altura) {
      alert("Informe a altura");
      return
    }
    const r = peso / (Math.pow(altura, 2));
    setResultado(r.toFixed(1))
  }

  return (
    <SafeAreaView style={{ marginTop: 20, padding: 10, }}>
      <View style={styles.bloco}>
        <Text>Calculadora de IMC</Text>
      </View>
      <View style={styles.bloco}>
        <Text>Informe seu peso:</Text>
        <TextInput
          style={styles.txt}
          autoFocus={false}
          keyboardType={'numeric'}
          onChangeText={text => setPeso(text)}
        >
        </TextInput>
      </View>
      <View style={styles.bloco}>
        <Text>Informe sua altura:</Text>
        <TextInput
          style={styles.txt}
          autoFocus={false}
          keyboardType={'numeric'}
          onChangeText={text => setAltura(text)}
        >
        </TextInput>

        {/* <Button title="Aperta aqui" onPress={() => { alert("Olá, mundo!") }} /> */}

      </View>
      <View style={styles.bloco}>
        <TouchableHighlight
          style={styles.btnCalc}
          onPress={() => calcImc()}
        >
          <Text style={styles.txtBtn}>Calcular IMC</Text>
        </TouchableHighlight>
      </View>
      <View style={styles.bloco}>
        <Text>Resultado: <Text style={{ fontSize: 25, color: '#0ff', fontWeight: 'bold' }}>{resultado}</Text> </Text>
      </View>
      <View style={styles.bloco}>
        <Image
          style={styles.image}
          source={require('./assets/image/imc.jpg')}
        />
      </View>
    </SafeAreaView >
  );
}

const styles = StyleSheet.create({
  corpo: {
    padding: 10,
  },
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
  image: {
    width: 400,
    height: 300,
    resizeMode: 'contain',
  },
});

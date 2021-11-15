import React, { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import Peso from './componentes/Peso';
import Altura from './componentes/Altura';
import ButtonCalc from './componentes/ButtonCalc';
import Resultado from './componentes/Resultado';
import Tabela from './componentes/Tabela';

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

      <Peso aoModificar={setPeso} />
      <Altura aoModificar={setAltura} />
      <ButtonCalc aoClicar={calcImc} />
      <Resultado valorResultado={resultado} />
      <Tabela />

    </SafeAreaView >
  );
}

const styles = StyleSheet.create({
  bloco: {
    marginBottom: 20,
  },
});

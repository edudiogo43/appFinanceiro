import { 
  StyleSheet, 
  SafeAreaView, 
  Text, 
  View, 
  TextInput, 
  FlatList } 
  from 'react-native'
import React from 'react'

import Header from '../components/Header';
import Balance from '../components/Balance';
import Movements from '../components/Movements';
import Actions from '../components/Actions';

const list = [
  {
    id: 1,
    title: 'CPFL',
    value: '340',
    date: '25/12/2023',
    type: 0 // gasto
  },
  {
    id: 2,
    title: 'Internet',
    value: '99,99',
    date: '30/12/2023',
    type: 0 // gasto
  },
  {
    id: 3,
    title: 'Cartao de credito',
    value: '2200,00',
    date: '31/12/2023',
    type: 0 // gasto
  },
  {
    id: 4,
    title: 'Salário',
    value: '3600,00',
    date: '30/12/2023',
    type: 1 // entrada
  },
  {
    id: 5,
    title: 'CPFL',
    value: '340',
    date: '25/12/2023',
    type: 0 // gasto
  },
  {
    id: 6,
    title: 'Internet',
    value: '99,99',
    date: '30/12/2023',
    type: 0 // gasto
  },
  {
    id: 7,
    title: 'Terreno',
    value: '2200,00',
    date: '31/12/2023',
    type: 0 // gasto
  },
  {
    id: 8,
    title: 'Salário',
    value: '3600,00',
    date: '30/12/2023',
    type: 1 // entrada
  },
  {
    id: 9,
    title: 'CPFL',
    value: '340',
    date: '25/12/2023',
    type: 0 // gasto
  },
  {
    id: 21,
    title: 'Internet',
    value: '99,99',
    date: '30/12/2023',
    type: 0 // gasto
  },
  {
    id: 31,
    title: 'Terreno',
    value: '2200,00',
    date: '31/12/2023',
    type: 0 // gasto
  },
  {
    id: 41,
    title: 'Salário',
    value: '3600,00',
    date: '30/12/2023',
    type: 1 // entrada
  },
]

const Home = () => {
  return (
    <View style={styles.container}>

      <Header name="Eduardo D. Garcia" />

      <Balance saldo="15.750,00" gastos="8450.12" />

      <Text style={styles.title}>
        Últimas movimentaçes
      </Text>

      <Actions />

      <FlatList
        style={styles.list}
        data={list}
        keyExtractor={ (item) => String(item.id)}
        showsVerticalScrollIndicator={false}
        renderItem={ ( {item} ) => <Movements data={item} />}
      />

    </View>
  )
}

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f3f3f3'
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 14,
    marginRight: 14,
    marginTop: 14,
  },
  list: {
    marginTop: 10,
    marginStart: 14,
    marginEnd: 14,
  }
})
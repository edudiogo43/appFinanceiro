import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, {useState} from 'react'

const Balance = ({ saldo, gastos}) => {

    const [showValue, setShowValue] = useState(false);

  return (
    <View style={styles.container}>
      
      <TouchableOpacity style={styles.item}
        onPress={ (state) => setShowValue(!showValue)}
      >
        <Text style={styles.itemTitle}>Saldo</Text>

        { showValue ? (
            <View style={styles.content}>
                <Text style={styles.currencySymbol}>R$</Text>
                <Text style={styles.balance}>
                    {saldo}
                </Text>
            </View>
        ) : (
            <View style={styles.skeleton} />
        )}


      </TouchableOpacity>

      <TouchableOpacity style={styles.item}
        onPress={ (state) => setShowValue(!showValue)}
      >
        <Text style={styles.itemTitle}>Despesas</Text>
        
        { showValue ? (
            <View style={styles.content} >
                <Text style={styles.currencySymbol}>R$</Text>
                <Text style={styles.expenses}>
                    -{gastos}
                </Text>
            </View>
            ) : (
                <View style={styles.skeleton} />
            )}

      </TouchableOpacity>


    </View>
  )
}

export default Balance

const styles = StyleSheet.create({
    container: {
        zIndex: 99,
        backgroundColor: '#FFF',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingStart: 10,
        paddingEnd: 18,
        marginTop: -10,
        marginStart: 14,
        marginEnd: 14,
        borderRadius: 8,
        paddingTop: 10,
        paddingBottom: 22,
    },
    item: {

    },
    itemTitle: {
        fontSize: 16,
        color: 'green'
    },
    currencySymbol: {
        color: '#dedede',
        marginRight: 6,
    },
    content: {
        marginTop: 5,
        flexDirection: 'row',
        alignItems: 'center'
    },
    balance :{
        fontSize: 16,
        color: '#2ecc71'
    },
    expenses: {
        fontSize: 16,
        color: '#e74c3c'
    },
    skeleton: {
        marginTop: 6,
        width: 80,
        height: 10,
        backgroundColor: '#dadada',
        borderRadius: 4
    }
})
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, {useState} from 'react'

const Movements = ({data}) => {

  return (
    <TouchableOpacity style={styles.container}
    >
        <Text style={styles.date}>{data.date}</Text>

        <View style={styles.content}>
            <Text style={styles.label}>{data.title}</Text>
            
            <Text 
                style={data.type === 1 ? styles.value : styles.expense}
            >
                { data.type === 1 ? `R$ ${data.value}` : `R$ -${data.value}` }
            </Text>

        </View>
    </TouchableOpacity>
  )
}

export default Movements

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginBottom: 24,
        borderBottomWidth: 0.5,
        borderBottomColor: '#dadada'
    },
    label: {
        fontWeight: 'bold',
        fontSize: 16,
    },
    content: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 2,
        marginBottom: 8,
    },
    value:{
        fontSize: 16,
        fontWeight: 'bold',
        color: '#2ecc71'
    },
    date: {
        fontWeight: 'bold',
        color: 'gray'
    },
    expense:{
        fontSize: 16,
        fontWeight: 'bold',
        color: 'red'
    }
    
})
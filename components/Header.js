import React from 'react'
import { 
  StyleSheet, 
  Text, 
  View, 
  StatusBar,
  TouchableOpacity
} from 'react-native'

import { Feather } from '@expo/vector-icons';

const statusBarheight = StatusBar.currentHeight ? StatusBar.currentHeight + 22 : 64;

const Header = ({ name }) => {
 return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.username}>{name}</Text> 

        <TouchableOpacity activeOpacity={0.9} style={styles.buttorUser}>
          <Feather name="user" size={27} color="#FFF" />
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#44318d',
    paddingTop: statusBarheight,
    flexDirection: 'row',
    paddingStart: 16,
    paddingEnd: 16,
    paddingBottom: 16,
  },
  content: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  username:{
    fontSize: 18,
    color: '#FFF',
    fontWeight: 'bold'
  },
  buttorUser: {
    width: 44,
    height: 44,
    borderRadius: 44 / 2,
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    alignItems: 'center',
    justifyContent: 'center',
  }

})
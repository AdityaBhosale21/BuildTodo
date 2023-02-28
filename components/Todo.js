import { View, Text, StyleSheet, Button } from 'react-native'
import React from 'react'

const Todo = (props) => {
  return (
   <View style={[{margin:8, padding:8}, styles.item]}>
    <Text>{props.item}</Text>
    <Button
     title={'Delete'}
     color={'red'}
     onPress={() => props.delete(props.item)}/>
   </View>
  )
}

const styles=StyleSheet.create({

    item:{

        flexDirection:'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderColor:'grey',
        borderWidth:1,
        borderRadius:8,
        backgroundColor:'whitesmoke'
    }
})

export default Todo
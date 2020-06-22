import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export const AsyncAddTodo = ():JSX.Element => {
    return (
        <View style={styles.container}>
            <Text>ASYNC TODO</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    }
})


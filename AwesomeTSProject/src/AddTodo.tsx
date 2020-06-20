import React, { useState } from 'react';
import { useSelector, useDispatch } from "react-redux"
import {
    View, StyleSheet, Text, TextInput,
    NativeSyntheticEvent, TextInputChangeEventData, Button, FlatList, Keyboard, Alert
} from 'react-native'

import { RootState } from "./Store"
import { addTodo, removeTodo, editTodos } from './action';
import { Obj } from './Types';
import { EditModal } from './EditModal';


export const AddTodo = (): JSX.Element => {
    const arrayTodos= useSelector((state: RootState) => state.todos)
    const [value, setValue] = useState<string>("");
    const [modal, setModal] = useState<boolean>(false);
    const dispatch = useDispatch()

    const handelChange = (event: NativeSyntheticEvent<TextInputChangeEventData>): void => {
        setValue(event.nativeEvent.text)
    }

    const addTodoList = (): void => {
        if (value.trim()) {
            const todos: Obj = {
                id: Date.now().toString(),
                title: value,
            }
            dispatch(addTodo(todos))
            setValue("");
            Keyboard.dismiss();
        } else {
            Alert.alert("Add some text");
        }
    }

    const removeTodos = (id: string): void => {
        dispatch(removeTodo(id))
    }

    const showModal = (): void => {
        setModal(true)
    }

    const saveEditsTodos = (title):void=>{
        console.log('object', arrayTodos)
        // dispatch(editTodos(value, id))
        // setModal(false)
    }

    return (
        <View style={styles.container}>
            <View style={styles.block}>
                <TextInput style={styles.input} autoCompleteType="off" value={value} placeholder="write Bogdan please" onChange={handelChange} />
                <Button title="ADD TODO" onPress={addTodoList} />
            </View>
            <FlatList
                data={arrayTodos}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => {
                    return (
                        <View style={styles.todoList}>
                            <Text style={{ textAlign: "center", fontWeight: "600", fontSize: 20 }}>{item.title}</Text>
                            <Button title="DELETE TODO" onPress={() => removeTodos(item.id)} />
                            <Button title="EDIT TODO" onPress={() => showModal()} />
                        </View>
                    )
                }} />
            {modal && <EditModal onCancel={() => setModal(false)} saveEditsTodos={saveEditsTodos} value={value}/>}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: 10,
        justifyContent: "center",
        alignItems: "center"
    },
    todoList: {
        borderRadius: 5,
        borderWidth: 1,
        borderColor: "black",
        width: 300,
        height: 100,
        marginBottom: 50,
        shadowColor: "#000",
        shadowRadius: 5,
        shadowOpacity: 0.3,
        shadowOffset: { width: 2, height: 4 },
        backgroundColor: "#fff",
    },
    block: {
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        marginHorizontal: 20,
        paddingVertical: 20,
    },
    input: {
        width: "60%",
        borderStyle: "solid",
        borderBottomWidth: 2,
        borderBottomColor: "#3949ab",
        marginBottom: 15,
        fontSize: 20,
        paddingTop: 24,
        marginRight: 20,
        paddingLeft: 10,
    },
})

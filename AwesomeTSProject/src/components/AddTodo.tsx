import React, { useState } from 'react';
import { useSelector, useDispatch } from "react-redux"
import {
    View, StyleSheet, Text, TextInput,
    NativeSyntheticEvent, TextInputChangeEventData,
    Button, FlatList, Keyboard, Alert, ScrollView
} from 'react-native'


import { RootState } from "../redux/Store"
import { addTodo, removeTodo, editTodos } from '../redux/action';
import { Obj } from '../redux/Types';
import { EditModal } from './EditModal';
import { NavBar } from './NavBar';


export const AddTodo: React.FC = (): JSX.Element => {

    const arrayTodos = useSelector((state: RootState) => state.todos)

    const [value, setValue] = useState<string>("");
    const [modal, setModal] = useState<boolean>(false);
    const [todo, setTodos] = useState<Obj>({ id: "4", title: "rye" })

    const dispatch = useDispatch()

    const handelChange = (event: NativeSyntheticEvent<TextInputChangeEventData>): void => {
        setValue(event.nativeEvent.text)
    }

    const addTodoList = (): void => {
        if (value.trim()) {
            let todo = {
                id: Date.now().toString(),
                title: value,
            }
            dispatch(addTodo(todo))
            setValue("");
            Keyboard.dismiss();
        } else {
            Alert.alert("Add some text");
        }
    }

    const removeTodos = (id: string): void => {
        dispatch(removeTodo(id))
    }


    const handelEditTask = (task: Obj): void => {
        setModal(true)
        setTodos(task)
    }

    const saveEditsTodos = (title: string, id: string): void => {
        dispatch(editTodos(title, id))
        setModal(false)
    }

    const todoForEditModal = <EditModal onCancel={() => setModal(false)} todo={todo} saveEditsTodos={saveEditsTodos} />

    return (
        <>
        <NavBar props={"Bogdan"}/>
        <View style={styles.container}>
            <View style={styles.block}>
                <TextInput style={styles.input} autoCompleteType="off" value={value} placeholder="write Bogdan please" onChange={handelChange} />
                <Button title="ADD TODO" onPress={addTodoList} />
            </View>
            <ScrollView>
            <FlatList
                data={arrayTodos}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => {
                    return (
                        <View style={styles.todoList}>
                            
                            <Text style={styles.text}>{item.title}</Text>
                            <Button title="DELETE TODO" onPress={() => removeTodos(item.id)} />
                            <Button title="EDIT TODO" onPress={() => handelEditTask(item)} />
                            
                        </View>
                    )
                }} />
                </ScrollView>
            {modal && todoForEditModal}
        </View>
        </>
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
    text: {
        textAlign: "center",
        fontWeight: "600",
        fontSize: 20
    }
})

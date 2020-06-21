import React, { useState } from "react";
import {
    View,
    Modal,
    StyleSheet,
    TextInput,
    Button,
    Alert,
} from "react-native";

import { Obj } from "../redux/Types";

interface iProps {
    onCancel(): void
    saveEditsTodos(title:string, id:string):void
    todo: Obj
}

export const EditModal = ({ onCancel, saveEditsTodos, todo}: iProps) => {
    const [title, setTitle] = useState<string>("");

    const saveEditTask = () => {
        if (title.trim().length < 3) {
            Alert.alert(
                "Error!",
                `Minimum title length 3 characters. Now ${
                title.trim().length
                } characters.`
            );
        }
        else {
            saveEditsTodos(title, todo.id)
            // console.log('todo', todo)
        }
    }

    return (
        <Modal animationType="slide" transparent={false}>
            <View style={styles.wrap}>
                <TextInput
                    value={title}
                    onChangeText={setTitle}
                    style={styles.input}
                    placeholder="Введите название"
                    autoCorrect={false}
                    autoCapitalize="none"
                    maxLength={20}
                />
                <View style={styles.buttons}>
                    <Button title="Cancel" onPress={onCancel} color={"red"} />
                    <Button title="Save" onPress={saveEditTask} color={"black"} />
                </View>
            </View>
        </Modal >
    );
};


const styles = StyleSheet.create({
    wrap: {
        justifyContent: "center",
        alignItems: "center",
        flex: 1,
    },
    input: {
        marginBottom: 20,
        borderBottomColor: "red",
        borderBottomWidth: 1,
        width: "80%",
        fontSize: 20
    },
    buttons: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-around",
    },
});

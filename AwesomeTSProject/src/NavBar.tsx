import React from "react";
import { View, StyleSheet, Platform, Text } from "react-native";

interface Props {
    props: string
}

export const NavBar = ({ props }: Props): JSX.Element => {
    return (
        <View
            style={{
                ...styles.navbar,
                ...Platform.select({
                    ios: styles.navbarIOS,
                    android: styles.navbarAndroid,
                }),
            }}
        >
            <Text style={styles.text}>{props}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    navbar: {
        height: Platform.OS === "ios" ? 70 : 35,
        alignItems: "center",
        justifyContent: "flex-end",
        paddingBottom: 10,
    },
    navbarAndroid: {
        backgroundColor: "#7fff00",
    },
    navbarIOS: {
        borderBottomColor: "#008b8b",
        borderBottomWidth: 1,
    },
    text: {
        color: Platform.OS === "ios" ? "#006400" : "#fff",
        fontSize: 20,
        fontWeight: "600",
        textTransform: "capitalize",
    },
});

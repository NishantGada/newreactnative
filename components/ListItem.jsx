import React from 'react'
import { Alert, StyleSheet, Text, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';

export default function ListItem({ item, removeListItem }) {
    if (item.color == 'red') {
        return (
            <TouchableWithoutFeedback key={item.id}
                onLongPress={() => {
                    Alert.alert(
                        "Delete",
                        "Are you sure?",
                        [
                            {
                                text: "Cancel",
                                onPress: () => console.log("Cancel Pressed"),
                                style: "cancel"
                            },
                            { text: "Delete", onPress: () => removeListItem(item.key) }
                        ]
                    )
                }}
            >
                <Text style={[styles.listItemStyle, styles.listItemStyleRed]}>
                    {item.text}
                </Text>
            </TouchableWithoutFeedback>
        )
    }
    else if (item.color == 'yellow') {
        return (
            <TouchableWithoutFeedback key={item.id} onLongPress={() => {
                Alert.alert(
                    "Delete",
                    "Are you sure?",
                    [
                        {
                            text: "Cancel",
                            onPress: () => console.log("Cancel Pressed"),
                            style: "cancel"
                        },
                        { text: "Delete", onPress: () => removeListItem(item.key) }
                    ]
                )
            }
            }>
                <Text style={[styles.listItemStyle, styles.listItemStyleYellow]}>
                    {item.text}
                </Text>
            </TouchableWithoutFeedback>
        )
    }
    else if (item.color == 'green') {
        return (
            <TouchableWithoutFeedback key={item.id} onLongPress={() => {
                Alert.alert(
                    "Delete",
                    "Are you sure?",
                    [
                        {
                            text: "Cancel",
                            onPress: () => console.log("Cancel Pressed"),
                            style: "cancel"
                        },
                        { text: "Delete", onPress: () => removeListItem(item.key) }
                    ]
                )
            }
            }>
                <Text style={[styles.listItemStyle, styles.listItemStyleGreen]}>
                    {item.text}
                </Text>
            </TouchableWithoutFeedback>
        )
    }
}

const styles = StyleSheet.create({
    listItemStyle: {
        fontSize: 14,
        fontWeight: 'bold',
        padding: 14,
        marginBottom: 25,
        color: 'black',
        borderRadius: 4,
        // borderWidth: 1.5,
        // borderStyle: 'dashed',
        // borderColor: 'purple',
        // borderRadius: 1,
    },

    listItemStyleRed: {
        backgroundColor: '#ff7675',
        // backgroundColor: '#c0392b',
    },

    listItemStyleYellow: {
        backgroundColor: '#ffeaa7',
        // backgroundColor: '#f39c12',
    },

    listItemStyleGreen: {
        backgroundColor: '#55efc4',
        // backgroundColor: '#27ae60',
    },
})

import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

export default function ListItem({ item, removeListItem }) {
    if (item.color == 'red') {
        return (
            <TouchableOpacity key={item.id} onPress={() => removeListItem(item.key)}>
                <Text style={[styles.listItemStyle, styles.listItemStyleRed]}>
                    {item.text}
                </Text>
            </TouchableOpacity>
        )
    }
    else if (item.color == 'yellow') {
        return (
            <TouchableOpacity key={item.id} onPress={() => removeListItem(item.key)}>
                <Text style={[styles.listItemStyle, styles.listItemStyleYellow]}>
                    {item.text}
                </Text>
            </TouchableOpacity>
        )
    }
    else if (item.color == 'green') {
        return (
            <TouchableOpacity key={item.id} onPress={() => removeListItem(item.key)}>
                <Text style={[styles.listItemStyle, styles.listItemStyleGreen]}>
                    {item.text}
                </Text>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    listItemStyle: {
        fontSize: 16,
        fontWeight: 'bold',
        padding: 14,
        marginBottom: 25,
        color: 'black',
        // borderWidth: 1.5,
        // borderStyle: 'dashed',
        // borderColor: 'purple',
        // borderRadius: 1,
    },
    
    listItemStyleRed: {
        backgroundColor: '#c0392b',
        color: 'white',
    },
    
    listItemStyleYellow: {
        backgroundColor: '#f39c12',
        color: 'black',
    },
    
    listItemStyleGreen: {
        backgroundColor: '#27ae60',
        color: 'white',
    },
})

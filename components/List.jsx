import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import ListItem from './ListItem';

export default function List({ list, removeListItem }) {

    if (list.length == 0) {
        return (
            <View style={styles.emptyList}>
                <Text style={styles.emptyListTxt}>List is empty ...</Text>
            </View>
        )
    }
    else {
        return (
            <View style={styles.list}>
                <FlatList 
                    data={list}
                    showsVerticalScrollIndicator={false}
                    renderItem = {({ item }) => (                        
                        <ListItem item={item} removeListItem={removeListItem} />
                    )}
                />
            </View>
        )   
    }
}

const styles = StyleSheet.create({
    emptyList: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },

    emptyListTxt: {
        color: 'lightgray',
        fontSize: 16,
        top: 200,
    },

    list: {
        paddingHorizontal: 20,
        // borderWidth: 1,
        // borderColor: 'black',
    },
})

import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Modal, TouchableOpacity, TouchableWithoutFeedback, Keyboard } from 'react-native';

import AddItem from './AddItem'

const fiftyPercent = '20%';

export default function Header({ addListItem }) {

    const [modal, setModal] = useState(false);

    const closeModal = () => {
        setModal(false);
    }

    return (
        <View style={styles.header}>
            <Modal visible={modal} animationType='slide'>
                <View style={styles.modalView}>
                    <AddItem addListItem={addListItem} closeModal={closeModal} />
                </View>
            </Modal>

            <Text style={styles.headerTxt}>Completely</Text>

            <TouchableOpacity onPress={() => setModal(true)}>
                <Text style={styles.addButtonTxt}>+</Text>
            </TouchableOpacity>

            {/* <StatusBar style="auto" /> */}
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        // flex: 1,
        backgroundColor: 'lightpink',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 18,
        display: 'flex',
        flexDirection: 'row'
    },

    headerTxt: {
        fontSize: 28,
        fontWeight: 'bold',
        fontStyle: 'italic',
        // borderWidth: 1,
        // borderColor: 'black',
    },

    addButtonTxt: {
        fontSize: 34,
    },

    modalView: {
        top: fiftyPercent,
        padding: 30,
        display: 'flex',
        // alignItems: 'center',
        justifyContent: 'center',
        // borderWidth: 1,
        // borderColor: 'black',
    },

    modalTxt: {
        fontSize: 28,
    }
})

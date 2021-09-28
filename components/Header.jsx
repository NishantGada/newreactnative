import { StatusBar } from 'expo-status-bar';
import ExpoStatusBar from 'expo-status-bar/build/ExpoStatusBar';
import React, { useState } from 'react';
import {
    Image,
    StyleSheet,
    Text,
    View,
    Modal,
    TouchableOpacity,
    TouchableWithoutFeedback,
    Keyboard,
    SafeAreaView,
    Dimensions
} from 'react-native';

import AddItem from './AddItem'
import CompletelyLogo from '../assets/CompletelyLogo.png'

const fiftyPercent = '20%';
const { width, height } = Dimensions.get('window');

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

            {/* <Text style={styles.headerTxt}>Completely</Text> */}
            <Image source={CompletelyLogo} style={{ width: 180, height: 60 }} />

            <TouchableOpacity onPress={() => setModal(true)}>
                <Text style={styles.addButtonTxt}>+</Text>
            </TouchableOpacity>

            {/* <StatusBar style="dark"/> */}
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        // flex: 1,
        backgroundColor: 'black',
        // backgroundColor: 'lightpink',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 18,
        // paddingTop: 2,
        paddingBottom: 5,
        display: 'flex',
        flexDirection: 'row',
        elevation: 5,
        borderTopColor: 'white',
        // marginTop: 16,
    },

    headerTxt: {
        fontSize: 28,
        fontWeight: 'bold',
        fontStyle: 'italic',
        color: '#f5f6fa',
        // borderWidth: 1,
        // borderColor: 'black',
    },

    addButtonTxt: {
        fontSize: 34,
        color: '#f5f6fa'
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

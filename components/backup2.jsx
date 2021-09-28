import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TouchableWithoutFeedback, Keyboard, LogBox } from 'react-native';
// import AsyncStorage from '@react-native-async-storage/async-storage';

import firebase from "firebase";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCRO84yZtGvAyFRgETJp5FkQhAfYoOz8qM",
    authDomain: "react-native-todo-app-12843.firebaseapp.com",
    projectId: "react-native-todo-app-12843",
    storageBucket: "react-native-todo-app-12843.appspot.com",
    messagingSenderId: "212533861390",
    appId: "1:212533861390:web:b351f3b580b40f89dd305f",
    measurementId: "G-Q2PZPP7X7W"
};

if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig)
}

const db = firebase.firestore();

import List from './components/List';
import Header from './components/Header';

export default function App() {


    const [list, setList] = useState([
        // { text: 'Meeting at 1pm', color: 'red', key: 1 },
    ])

    useEffect(() => {
        getTodos()
    }, [])

    const removeListItem = (key) => {
        // setList((prevList) => {
        //   return prevList.filter(list => list.key != key)
        // })

        db.collection("todos").doc(key).delete();
    }

    const getTodos = () => {
        db.collection("todos").onSnapshot(function (querySnapshot) {
            setList(
                querySnapshot.docs.map((item) => ({
                    key: item.id,
                    text: item.data().todo,
                    color: item.data().color,
                }))
            )
        })
    }

    const addListItem = (text, color) => {

        db.collection("todos").add({
            color: color,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            todo: text,
        })

        // setList((prevList) => {
        //   return [
        //     { text: text, color: color, key: Math.random().toString() },
        //     ...prevList
        //   ]
        // })
    }

    LogBox.ignoreLogs(['Setting a timer for a long period of time', 'array.prototype.map'])

    return (
        <View style={{ paddingBottom: 350 }}>
            <Header addListItem={addListItem} />
            <Text style={styles.note}>Tap to remove... </Text>
            <View style={styles.welcome}>
                <Text style={styles.welcomeTxt}>Welcome, Nishant !</Text>
            </View>
            {/* <TouchableOpacity onPress={() => AsyncStorage.clear()}>
          <View style={styles.submitBtn}>
            <Text style={styles.submitBtnTxt}>CLEAR</Text>
          </View>
        </TouchableOpacity> */}

            <List list={list} removeListItem={removeListItem} />
        </View>
    );
}

const styles = StyleSheet.create({
    note: {
        fontSize: 12,
        // textAlign: 'center',
        marginLeft: 18,
        margin: 8,
        color: 'lightgray',
        fontFamily: ''
    },

    welcome: {
        paddingTop: 4,
        paddingRight: 18,
        paddingBottom: 18,
        paddingLeft: 18,
        // borderWidth: 1,
        // borderColor: 'black',
    },

    welcomeTxt: {
        fontSize: 20,
        fontFamily: ''
    },

    submitBtn: {
        height: 50,
        // borderWidth: 1,
        // borderColor: 'black',
        backgroundColor: 'coral',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 20,
    },

    submitBtnTxt: {
        fontSize: 18,
        color: 'white'
    },
});

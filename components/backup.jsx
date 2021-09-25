import React from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native';

export default function backup() {



    const submitHandler = async () => {
        try {
            if (text.length > 0) {
                // addListItem(text, checked)
                closeModal()
                // Alert.alert('Success', 'Successfully added!')
                await AsyncStorage.setItem("inputText", text)
                await AsyncStorage.setItem("inputColor", checked)
            }
            else {
                alert("Task cannot be empty");
            }
        } catch (error) {
            alert(error);
        }
    }

    const getData = async () => {
        try {

            const text = await AsyncStorage.getItem("inputText")
            const checked = await AsyncStorage.getItem("inputColor")

            if (text !== null) {
                addListItem(text, checked)
                // this is where set item will come instead of the { addListItem(text, checked) } functn, hopefully
            }
        } catch (e) {
            alert(e);
        }
    }

    useEffect(() => {
        getData();
        // Alert.alert('Success', 'Successfully added!')
    }, [addListItem])



    setList((prevList) => {
        return [
            { text: text, color: color, key: Math.random().toString() },
            ...prevList
        ]
    })



    return (
        <View>

        </View>
    )
}

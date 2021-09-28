import React, { useEffect, useState } from 'react'
import { 
    StyleSheet, 
    Text,
    TextInput, 
    View, 
    TouchableOpacity, 
    TouchableWithoutFeedback, 
    Keyboard, 
    Alert,
    Dimensions 
} from 'react-native';
import { RadioButton } from 'react-native-paper';
// import AsyncStorage from '@react-native-async-storage/async-storage';

const {width, height} = Dimensions.get('window');

export default function AddItem({ addListItem, closeModal }) {

    const [text, setText] = useState('');
    const [checked, setChecked] = useState('red');

    const changeHandler = (val) => {
        setText(val)
    }

    return (
        <TouchableWithoutFeedback onPress={() => {
            Keyboard.dismiss();
        }}>
            <View>
                <TextInput 
                    placeholder="Enter.."
                    onChangeText={changeHandler}
                    style={styles.input}
                />

                <View style={styles.radioView}>
                    <RadioButton 
                        value="red"
                        status={ checked === 'red' ? 'checked' : 'unchecked' }
                        onPress={() => setChecked('red')}
                    />
                    <Text>Important and Urgent</Text>
                </View>
                <View style={styles.radioView}>
                    <RadioButton 
                        value="yellow"
                        status={ checked === 'yellow' ? 'checked' : 'unchecked' }
                        onPress={() => setChecked('yellow')}
                    />
                    <Text>Important and but not Urgent</Text>
                </View>
                <View style={styles.radioView}>
                    <RadioButton 
                        value="green"
                        status={ checked === 'green' ? 'checked' : 'unchecked' }
                        onPress={() => setChecked('green')}
                    />
                    <Text>Neither Important nor Urgent</Text>
                </View>

                <View style={styles.submitView}>
                    <TouchableOpacity onPress={() => {
                        if (text.length > 0) {
                            addListItem(text, checked)
                            closeModal()
                            Alert.alert('Success', 'Successfully added!')
                        } else {
                            alert("Task cannot be empty");
                        }
                    }}>
                        <View style={styles.submitBtn}>
                            <Text style={styles.submitBtnTxt}>Add</Text>
                        </View>
                    </TouchableOpacity>
                    
                    <TouchableOpacity onPress={() => closeModal()}>
                        <View style={styles.submitBtn}>
                            <Text style={styles.submitBtnTxt}>Close</Text>
                        </View>
                </TouchableOpacity>
                </View>
            </View>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    input: {
        // borderWidth: 1,
        // borderColor: 'black',
        backgroundColor: '#f1f2f6',
        padding: 10,
        marginBottom: 20,
    },

    submitView: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },

    submitBtn: {
        // height: 50,
        padding: 10,
        backgroundColor: '#f1f2f6',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 20,
        width: width*0.4,
    },

    submitBtnTxt: {
        fontSize: 16,
        color: 'black',
        fontWeight: 'bold',
        // color: 'white'
    },

    radioView: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        // borderWidth: 1,
        // borderColor: 'black',
        marginBottom: 20,
    }
})

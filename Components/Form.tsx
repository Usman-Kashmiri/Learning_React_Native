import React, { useState } from 'react'
import { Button, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'

function Form() {
    const [showPassword, setShowPassword] = useState(true);
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
    const handleSubmit = () => {
        const info = {
            username: username,
            email: email,
            password: password
        }

        console.log(info);
        
    }


    return (
        <View style={FormStyles.formContainer}>
            <Text style={FormStyles.label}>Username:</Text>
            <TextInput style={FormStyles.inputField} placeholder='Enter Your Name...' value={username} onChangeText={(e)=>setUsername(e)}/>
            <Text style={FormStyles.label}>Email Address:</Text>
            <TextInput style={FormStyles.inputField} placeholder='Enter Your Name...' value={email} onChangeText={(e)=>setEmail(e)}/>
            <Text style={FormStyles.label}>Password:</Text>
            <TextInput style={FormStyles.inputField} placeholder='Enter Your Password...' value={password}  secureTextEntry={showPassword}  onChangeText={(e)=>setPassword(e)}/>
            <Button title={showPassword === true ? 'Show Password' : 'Hide Password'} onPress={() => setShowPassword(!showPassword)} />
            <View style={FormStyles.submitButtonContainer}>
                <TouchableOpacity onPress={()=>handleSubmit()}>
                    <View style={FormStyles.submitBtn}>
                        <Text style={FormStyles.submitBtnTxt}>Submit Form</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const FormStyles = StyleSheet.create({
    formContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'flex-start',
        paddingVertical: 40
    },
    inputField: {
        color: 'white',
        borderRadius: 6,
        width: 200,
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: '#fff',
        paddingVertical: 4,
        paddingHorizontal: 10,
        marginBottom: 12
    },
    label: {
        marginBottom: 4,
        color: 'white'
    },
    submitButtonContainer: { display: 'flex', width: 200, marginTop: 30, justifyContent: 'center', flexDirection: 'row' },
    submitBtn: {
        backgroundColor: '#18d4',
        paddingHorizontal: 30,
        paddingVertical: 10,
        borderRadius: 50
    },
    submitBtnTxt: {
        color: 'white',
        fontWeight: 'bold'
    }
})

export default Form
import { useState } from 'react'
import { StyleSheet, TextInput } from 'react-native'

const AppInput = (props) => {
    const { placeholder, text, textarea, onChange } = props

    return (
        <TextInput
            style={[styles.input, { height: textarea ? 100 : 40 }]}
            onChangeText={onChange}
            value={text}
            placeholder={placeholder}

            editable
            multiline={textarea ? true : false}
            numberOfLines={textarea ? 4 : 1}
            maxLength={textarea ? 4000 : 50}
        />
    )
}
export default AppInput

const styles = StyleSheet.create({
    input: {
        margin: 12,
        borderWidth: 1,
        padding: 10,
        borderRadius: 8,
        borderColor: 'green'
    }
})
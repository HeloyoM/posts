import { useState } from 'react'
import { View } from 'react-native'
import AppInput from '../components/common/AppInput'
import AppButton from '../components/common/AppButton'
const jsonData = require('../server.json')

const InsertionPost = ({ navigation, route }) => {
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')

    const handleChangeTitle = (value) => setTitle(value)
    const handleChangeBody = (value) => setBody(value)
    const returnToPostsScreen = () => navigation.navigate('Posts')

    const handleCreatePost = () => {
        const post = { userId: Math.random(), body, id: Math.random(), title }
        jsonData.push(post)
        returnToPostsScreen()
    }
    return (
        <>
            <View>
                <AppInput placeholder='Write Title...' onChange={handleChangeTitle} text={title} />
                <AppInput textarea onChange={handleChangeBody} text={body} />
            </View>
            <AppButton color='blue' title='Creat' onPress={handleCreatePost} />
        </>
    )
}

export default InsertionPost
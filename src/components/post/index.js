import { View, StyleSheet, Text } from 'react-native'

const Post = (prop) => {
    const { title, body } = prop
    return (
        <View style={styles.container}>
            <Text style={styles.firstChild}>{title}</Text>
            <View>
                <Text>{body}</Text>
            </View>
        </View>
    )
}

export default Post

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        padding: 8,
        textAlign: 'center',
        alignItems: 'center',
    },
    firstChild: {
        fontWeight: 'bold',
        fontSize: 18
    }
})
import { View, StyleSheet } from 'react-native'
import AppButton from '../components/common/AppButton'

const HomeScreen = ({ navigation }) => {

    return (
        <View>
            <AppButton
                onPress={() => navigation.navigate('Posts')}
                title="Go to posts"
            />
        </View>
    )
}
export default HomeScreen

const styles = StyleSheet.create({
    home: {

    }
})
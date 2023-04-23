import { Button } from 'react-native'
import { useNavigation } from '@react-navigation/native'

const AppButton = (props) => {
    const { title, color = 'purple', onPress } = props

    const { navigate } = useNavigation()

    const handlePress = () => navigate('insert')

    return (
        <Button
            onPress={onPress ? onPress : handlePress}
            title={title}
            color={color}
        />
    )
}

export default AppButton
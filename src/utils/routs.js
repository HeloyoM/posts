import InsertionPost from '../screens/Insert'
import HomeScreen from '../screens/Home'
import Posts from '../screens/Posts'

export const routes = [
    {
        name: 'home',
        component: HomeScreen,
    },
    {
        name: 'Posts',
        component: Posts
    },
    {
        name: 'insert',
        component: InsertionPost
    }
]
import { useEffect, useMemo, useState } from 'react'
import { View, StyleSheet, Text, ScrollView } from 'react-native'
import axios from 'axios'
import Post from '../components/post/index'
import AppButton from '../components/common/AppButton'

const jsonData = require('../server.json')

const url = 'https://jsonplaceholder.typicode.com/posts'

const Posts = () => {
    const pageSize = 10

    const [posts, setPosts] = useState(jsonData)
    const [error, setError] = useState('')
    const [currentPage, setCurrentPage] = useState(1)
    const [postsToDisplay, setPostsToDispay] = useState([])

    const chunksPosts = useMemo(() => (posts.slice(currentPage, currentPage * pageSize)), [currentPage])

    useEffect(() => {
        if (posts.length) {
            setPostsToDispay(prev => chunksPosts)
        }
    }, [posts, currentPage, chunksPosts])

    const loadMorePosts = () => increasCurrentPasge()

    const increasCurrentPasge = () => setCurrentPage(prev => prev + 1)

    if (error) return (<Text>{error}</Text>)

    return (
        <>
            <ScrollView>
                <Text style={styles.postsHeader}>Posts</Text>
                {!!posts.length ? postsToDisplay.map((post, index) => (
                    <Post {...post} key={index} />
                ))
                    : <Text style={styles.postsHeader}>Loading...</Text>
                }
                <AppButton title='show more' onPress={loadMorePosts} />
            </ScrollView>
            <AppButton color='red' title='add' />
        </>
    )
}

export default Posts

const styles = StyleSheet.create({
    postsHeader: {
        textAlign: 'center',
        fontWeight: 'bold',
    }
})
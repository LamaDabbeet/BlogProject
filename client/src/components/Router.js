import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';
import { Toolbar } from './Layout/Layout';
import Posts from './Posts/Posts';
import NewPost from './NewPost/NewPost';
import EditPost from './EditPost/EditPost';
import Info from './Info/Info';

class Router extends Component {
    state = {
        posts: []
    }

    componentDidMount() {
        this.getPost();
    }

    getPost = () => {
        axios.get(`https://jsonplaceholder.typicode.com/posts`)
            .then(res => {
                this.setState({
                    posts: res.data
                })
            })
    }

    deletePost = (id) => {
        //console.log(id);
        axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(res => {
                if (res.status === 200) {
                    const posts = [...this.state.posts];
                    let result = posts.filter(post => (
                        post.id !== id
                    ));
                    this.setState({
                        posts: result
                    })
                }
            })
    }

    createPost = (post) => {
        axios.post(`https://jsonplaceholder.typicode.com/posts`, { post })
            .then(res => {
                if (res.status === 201) {
                    Swal.fire(
                        'Post Created',
                        'It is created successfully.',
                        'success'
                    )

                    let postId = { id: res.data.id };
                    const newPost = Object.assign({}, res.data.post, postId)

                    this.setState(prevState => ({
                        posts: [...prevState.posts, newPost]
                    }))
                }
            })
    }

    editPost = (postUpdate) => {
        const { id } = postUpdate;

        axios.put(`https://jsonplaceholder.typicode.com/posts/${id}`, { postUpdate })
            .then(res => {
                if (res.status === 200) {
                    Swal.fire(
                        'Post Updated',
                        'The changes were saved successfully.',
                        'success'
                    )

                    let postId = res.data.id;

                    const posts = [...this.state.posts];

                    const postEdit = posts.findIndex(post => postId === post.id)

                    posts[postEdit] = postUpdate;
                    this.setState({
                        posts
                    })
                }

            })

    }

    render() {
        return (
            <BrowserRouter>

                <div >

                    <div >
                        <Toolbar />

                        <Switch>
                            <Route exact path="/" render={() => {
                                return (
                                    <Posts
                                        posts={this.state.posts}
                                        deletePost={this.deletePost}
                                    />
                                );
                            }} />
                            <Route exact path="/new-post" render={() => {
                                return (
                                    <NewPost
                                        createPost={this.createPost}
                                    />
                                );
                            }}
                            />
                            <Route exact path="/edit/:postId" render={(props) => {
                                let idPost = props.location.pathname.replace('/edit/', '')
                                const posts = this.state.posts;
                                let filter;
                                filter = posts.filter(post => (
                                    post.id === Number(idPost)
                                ))
                                return (
                                    <EditPost
                                        post={filter[0]}
                                        editPost={this.editPost}
                                    />
                                )
                            }} />
                            <Route exact path="/info" component={Info} />
                        </Switch>
                    </div>
                </div>
            </BrowserRouter>
        );
    }
}
export default Router;

import React, { Component } from 'react';
import Post from '../Post/Post';
import '../Post/Post.scss';
import './Posts.scss';
 
class Posts extends Component {
    showPosts = () => {
        const posts = this.props.posts;
        if (posts.length === 0) return null;        
        return (
            
            <React.Fragment>
                {Object.keys(posts).map(post =>(
                    <Post
                        key={post}
                        info={this.props.posts[post]}
                        deletePost={this.props.deletePost}
                    />
 
                ) )}
            </React.Fragment>
  
        )
    }
 
    render() { 
        return ( 
                <div classname="Posts">
                    {this.showPosts() }
                </div>
 
 
         );
    }
}
 
export default Posts;
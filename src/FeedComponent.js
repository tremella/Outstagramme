import React, {Component} from 'react';
import PostComponent from './PostComponent';
import CommentComponent from './CommentComponent';
import PhotoComponent from './PhotoComponent';
const SERVER = 'http://localhost:8000';
const POSTS_ENDPOINT = SERVER + '/posts';

export default class FeedComponent extends Component {
  state = {
    posts : null
  }
// this connects the backend server to our frontend -
// the backend server will make its own queries
  async getAllPosts(){
    let response = await fetch(POSTS_ENDPOINT);
    let data = await response.json();
    this.setState({posts : data.posts})
  }
  // once REACT components are loaded, FETCH from port 8000
  componentDidMount() {
    this.getAllPosts();
  }
  render() {
    let allPosts = []
    // "if getAllPosts worked..."
    if (this.state.posts !== null){
      this.state.posts.forEach((post) => {
        // make a component for it.
        allPosts.push(<PostComponent
        key={post.id}
        owner={post.owner}
        caption={post.caption}
        photo=<PhotoComponent source='default.png' />
        comments=<CommentComponent content="I'm a comment"/>
        />)
      })
    }

    return (
      <div className="feed">
        {allPosts}
      </div>
    )
  }
}

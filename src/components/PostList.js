import React, { Component } from 'react'
import { connect } from 'react-redux';
import "./../styles/PostList.css"

class PostList extends Component {

  render() {
    return (
      <div class="post-body">
        {this.props.posts.posts.map(post => {
          return (
            <div class="post-card">
                <img style={{width: "300px"}} src={post.url} key={post.id} />
                <h2>{post.title}</h2>
                <div>
                  <p>Poster: {post.author}</p>
                  <p>Comments: {post.comments.length}</p>
                  <a href={"/comments/"+ post.id}>View comments</a>
                </div>
            </div>
          );
        })}
      </div>
    )
  }
}
const mapStateToProps = state => {
  return { posts: state.posts}
}

export default connect(mapStateToProps)(PostList)

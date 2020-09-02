import React, { Component } from "react";
import { connect } from "react-redux";
import "./../styles/PostList.css";
import { Link } from "react-router-dom";

class PostList extends Component {
  render() {
    return (
      <div className="post-body">
        {this.props.posts.posts.map((post) => {
          return (
            <div className="post-card">
              <img src={post.url} key={post.id} />
              <h2>{post.title}</h2>
              <div className="post-info">
                <p>{post.url}</p>
                <p>Poster: {post.author}</p>
                <p>Comments: {post.comments.length}</p>
                <Link to={"/comments/" + post.id}>View Comments</Link>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return { posts: state.posts };
};

export default connect(mapStateToProps)(PostList);

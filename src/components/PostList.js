import React, { Component } from "react";
import { connect } from "react-redux";
import "./../styles/PostList.css";
import { Link } from "react-router-dom";

class PostList extends Component {
  render() {
    return (
      <>
        <h1 style={{ textAlign: "center" }}>Reddit Photoshop Battles</h1>
        <div className="post-body">
          {this.props.posts.posts.map((post) => {
            return (
              <div className="post-card" key={post.id}>
                <div className="post-img-wrapper">
                  <a target="_blank" rel="noopener noreferrer" href={post.url}>
                    <img src={post.url} key={post.id} alt="" />
                  </a>
                </div>
                <div className="post-info-wrapper">
                  <h2>{post.title.split(": ").pop()}</h2>
                  <div className="post-info">
                    <p>Poster: {post.author}</p>
                    <p>Submissions: {post.comments.length}</p>
                  </div>
                  <Link to={"/comments/" + post.id}>
                    <div className="view-button">View Submissions</div>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </>
    );
  }
}
const mapStateToProps = (state) => {
  return { posts: state.posts };
};

export default connect(mapStateToProps)(PostList);

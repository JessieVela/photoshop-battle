import React, { Component } from "react";
import { connect } from "react-redux";
import "./../styles/PostComments.css";

class PostComments extends Component {
  render() {
    console.log(this.props);
    return (
      <div className="post-comments">
        <div className="comment-title">
          <h3>{this.props.title}</h3>
          <img src={this.props.url} alt="" />
        </div>
        <div className="comment-body">
          {this.props.comments.map((comment) => {
            return (
              <div className="comment-image">
                <img src={comment.url} key={comment.id} />
                {comment.text && <p>{comment.text}</p>}
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const post = state.posts.posts.find((post) => {
    if (post.id == ownProps.match.params.id) return post.id;
  });
  return post;
};

export default connect(mapStateToProps)(PostComments);

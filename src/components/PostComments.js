import React, { Component } from "react";
import { connect } from "react-redux";
import "./../styles/PostComments.css";

class PostComments extends Component {
  render() {
    const badLink = [];

    return (
      <div className="post-comments">
        <div className="comment-title">
          <h3>{this.props.title}</h3>
          <img src={this.props.url} alt="" />
        </div>
        <div className="comment-body">
          {this.props.comments.map((comment) => {
            if (
              comment.url.indexOf("i.imgur") === -1 &&
              comment.url.indexOf("imgur")
            ) {
              badLink.push(comment);
              return null;
            }
            return (
              <div className="comment-image">
                <img src={comment.url} key={comment.id} alt="" />
                {comment.text && <p>{comment.text}</p>}
                <p>By Redditor: {comment.author}</p>
              </div>
            );
          })}
          <div className="honorable-mentions">
            <p>
              The following redditors had submissions but did not link with the
              direct url. To view click on the link to be taken to Imgur.
            </p>
            <div className="comment-box">
              {badLink.map((comment) => {
                return (
                  <div className="comment-info">
                    <p>Redditor: {comment.author}</p>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href={comment.url}
                    >
                      {comment.text}
                    </a>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const post = state.posts.posts.find((post) => {
    if (post.id === ownProps.match.params.id) return post.id;
  });
  return post;
};

export default connect(mapStateToProps)(PostComments);

import React, { Component } from "react";
import { connect } from "react-redux";
import "./../styles/PostComments.css";
import closeButton from "./../assets/close.png";

class PostComments extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showModal: false,
      imageUrl: "",
    };

    this.handleClickHold = this.handleClickHold.bind(this);
  }

  handleClickHold(url) {
    this.setState((state) => ({
      showModal: !state.showModal,
      imageUrl: url,
    }));
  }

  render() {
    const badLink = [];
    const width = window.innerWidth;
    return (
      <>
        {this.state.showModal && width > 768 ? (
          <>
            <div className="modalBackground"></div>
            <div className="modal">
              <img
                src={closeButton}
                id="closeButton"
                onClick={() => {
                  this.handleClickHold(null);
                }}
              />
              <img src={this.state.imageUrl} alt="" />
            </div>
          </>
        ) : null}
        <div
          className={
            this.state.showModal ? "modalFreeze post-comments" : "post-comments"
          }
        >
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
                return;
              }
              return (
                <div className="comment-image" key={comment.id}>
                  <img
                    src={comment.url}
                    alt=""
                    onClick={() => {
                      this.handleClickHold(comment.url);
                    }}
                    onContextMenu={null}
                    onTouchStart={() => {
                      this.handleClickHold(comment.url);
                    }}
                  />
                  {comment.text && <p>{comment.text}</p>}
                  <p>By Redditor: {comment.author}</p>
                </div>
              );
            })}
            <div className="honorable-mentions">
              <p>
                The following had submissions but did not link with the direct
                url. To view the image click on the link to be taken to Imgur.
              </p>
              <div className="comment-box">
                {badLink.map((comment) => {
                  return (
                    <div className="comment-info" key={comment.id}>
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
      </>
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

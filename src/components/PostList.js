import React, { Component } from "react";
import * as _ from "underscore";
import Moment from "react-moment";
import { connect } from "react-redux";
import "./../styles/PostList.css";
import { Link } from "react-router-dom";

class PostList extends Component {
  render() {
    return (
      <>
        <div className="summary">
          <h1>Reddit Photoshop Battles</h1>
          <p>
            Photoshop contests on reddit. A place to battle using image
            manipulation software, play photoshop tennis, create new images from
            old photos, or even win reddit gold.
          </p>
        </div>
        <div className="post-body">
          {_.map(this.props.posts, (post) => {
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
                    <p>Up Votes: {post.ups}</p>
                    <p>
                      Created:{" "}
                      <Moment unix format="MM/DD/YYYY hh:mm A">
                        {post.created_utc}
                      </Moment>
                    </p>
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

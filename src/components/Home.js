import React, { Component } from "react";
import { setPosts } from "./../store/actions";
import { connect } from "react-redux";
import axios from "axios";
import PostList from "./PostList";
import "./../styles/Home.css";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
    };
  }

  componentDidMount() {
    axios.get("http://192.168.0.6:9000/posts").then((res) => {
      const responses = res.data.slice(2, res.data.length - 1);
      console.log(responses);
      this.handlePosts(responses);
    });
  }

  handlePosts = (posts) => {
    //dispatches actions to set posts
    this.props.setPosts(posts);
  };

  render() {
    return (
      <>
        <div className="hero-wrapper">
          <div className="hero-title">
            <h1>Welcome to *Name Pending*</h1>
          </div>
          <div className="hero-para">
            <p>A place to showcase all work</p>
          </div>
        </div>
        <PostList />
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return { posts: state.posts };
};

export default connect(mapStateToProps, { setPosts })(Home);

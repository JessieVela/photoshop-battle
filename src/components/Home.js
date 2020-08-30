import React, { Component } from "react";
import { setPosts } from "./../store/actions";
import { connect } from "react-redux";
import axios from "axios";
import PostList from "./PostList";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
    };
  }

  componentDidMount() {
    axios.get("http://localhost:9000/posts").then((res) => {
      const responses = res.data.slice(2, res.data.length - 1);
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
        <PostList />
      </>
    );
  }
}

export default connect(null, { setPosts })(Home);
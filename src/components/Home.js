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

  async componentWillMount () {
    if (!process.env.NODE_ENV || process.env.NODE_ENV === "production") {
      await axios
        .get("https://photoshop-battle-api.herokuapp.com/posts")
        .then((res) => {
          this.handlePosts(res.data.slice(2, res.data.length - 1));
        });
    } else {
      await axios.get("http://localhost:9000/posts").then((res) => {
        this.handlePosts(res.data.slice(2, res.data.length - 1));
      });
    }
  }

  componentDidMount() {
    
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
            <h1>Welcome to Reddit Photoshop Battle Viewer</h1>
          </div>
          <div className="hero-para">
            <p>A place to showcase the skills of fellow redditors in a easy to view layout.</p>
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

import React, { Component } from "react";

export default class PostComments extends Component {
  componentDidMount() {
    const { id } = this.props.match.params;
  }
  // TODO: need to map state to props and get the information for the post with the specific id
  render() {
    return (
      <div>
        <h2>Comments</h2>
      </div>
    );
  }
}

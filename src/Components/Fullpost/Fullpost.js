import React from "react";
import axios from "axios";
import "./Fullpost.css";

class Fullpost extends React.Component {
  state = {
    LoadedPost: null,
  };

  componentDidMount() {
    console.log(this.props);
    if (
      !this.state.LoadedPost ||
      (this.state.LoadedPost &&
        this.state.LoadedPost.id !== this.props.match.params.id)
    ) {
      axios.get(`/posts/${this.props.match.params.id}`).then((response) => {
        this.setState({ LoadedPost: response.data });
        console.log(response);
        console.log("loading");
      });
    }
  }

  deletePostHandler = () => {
    axios.delete(`/posts/${this.props.match.params.id}`).then((response) => {
      console.log(response);
      console.log("delete");
    });
  };

  render() {
    let post = <p>please enter new post</p>;

    if (this.props.match.params.id) {
      post = (
        <div className="fullpost">
          <h2>Title</h2>
          <p>Context</p>
          <div className="delete">
            <button>delete</button>
          </div>
        </div>
      );
    }
    if (this.state.LoadedPost) {
      post = (
        <div className="fullpost">
          <h2>{this.state.LoadedPost.title}</h2>
          <p>{this.state.LoadedPost.body}</p>
          <div className="delete">
            <button onClick={this.deletePostHandler}>delete</button>
          </div>
        </div>
      );
    }

    return post;
  }
}

export default Fullpost;

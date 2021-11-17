import React from "react";

import axios from "axios";

import { Redirect } from "react-router-dom";
import "./NewPost.css";

class NewPost extends React.Component {
  state = {
    title: "",
    context: "",
    author: "alireza",
    submitted: false,
  };

  componentDidMount() {
    console.log(this.props);
  }

  postDataHandler = () => {
    const data = {
      title: this.state.title,
      context: this.state.context,
      author: this.state.author,
    };
    axios.post("/posts", data).then((response) => {
      console.log(response);
      this.setState({ submitted: true });
    });
  };

  render() {
    let redirect = null;

    if (this.state.submitted) {
      redirect = <Redirect to="/" />;
    }

    return (
      <div className="newpost">
        {redirect}
        <h2>Add post</h2>
        <form className="form">
          <div className="row">
            <div className="col-25">
              <label>Title</label>
            </div>
            <div className="col-75">
              <input
                className="input"
                type="text"
                value={this.state.title}
                onChange={(events) =>
                  this.setState({ title: events.target.value })
                }
              />
            </div>
          </div>

          <div className="row">
            <div className="col-25">
              <label>Context</label>
            </div>
            <div className="col-75">
              <textarea
                className="input"
                value={this.state.context}
                onChange={(events) =>
                  this.setState({ context: events.target.value })
                }
              />
            </div>
          </div>
          <div className="row">
            <div className="col-25">
              <label>Author</label>
            </div>
            <div className="col-75">
              <input
                className="input"
                type="text"
                value={this.state.author}
                onChange={(events) =>
                  this.setState({ author: events.target.value })
                }
              />
            </div>
          </div>
          <div className="button-div">
            <button className="button" onClick={this.postDataHandler}>
              add post
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default NewPost;

import React from "react";

import axios from "axios";
import { Route, Link, Switch } from "react-router-dom";

import "./Blog.css";
import Post from "../../Components/Post/Post";
import Fullpost from "../../Components/Fullpost/Fullpost";
import NewPost from "../../Components/NewPost/NewPost";
import Home from "../../Components/Home/Home";
import Header from "../../Components/Header/Header";

class Blog extends React.Component {
  state = {
    Post: [],
    selectpostId: null,
    error: false,
  };

  componentDidMount() {
    console.log(this.props);

    axios
      .get("/posts")
      .then((response) => {
        const posts = response.data.slice(0, 4);
        const updateposts = posts.map((item) => {
          return {
            ...item,
            author: "alireza",
          };
        });
        this.setState({ Post: updateposts });
        console.log(response);
        console.log("post", posts);
      })
      .catch((err) => {
        this.setState({ error: true });
      });
  }

  showPosthandler = (id) => {
    this.setState({ selectpostId: id });
  };

  render() {
    let posts = <p>api data failed!!!</p>;

    if (!this.state.error) {
      posts = this.state.Post.map((item) => {
        return (
          <Link className="link" to={`/${item.id}`} key={item.id}>
            <Post
              title={item.title}
              author={item.author}
              click={() => this.showPosthandler(item.id)}
            />
          </Link>
        );
      });
    }

    return (
      <main>
        <Header />
        <div>
          <Switch>
            <Route path="/" exact>
              <Home posts={posts} />
            </Route>
            <Route path="/new-post" exact component={NewPost} />

            <Route path="/:id" exact component={Fullpost} />

            <Route
              render={() => <h1 style={{ textAlign: "center" }}>Not Found</h1>}
            />
          </Switch>
        </div>
      </main>
    );
  }
}

export default Blog;

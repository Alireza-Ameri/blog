import React from "react";

import { BrowserRouter as Router } from "react-router-dom";

import Blog from "./Containers/Blog/Blog";

class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Blog />
        </div>
      </Router>
    );
  }
}

export default App;

import { Link } from "react-router-dom";

import "./Header.css";

const Header = () => {
  return (
    <header className="blog">
      <nav>
        <ul>
          <li>
            <Link to="/">home</Link>
          </li>
          <li>
            <Link
              to={{
                pathname: "/new-post",
                search: "?sort=post",
              }}
            >
              new post
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

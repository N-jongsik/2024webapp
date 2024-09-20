import React from "react";
import { Link } from "react-router-dom";

function Layout({ children }) {
  return (
    <>
      <nav className="bg-blue-200">
        <div className="container mx-auto flex justify-between py-4">
          <h1>logo</h1>
          <ul className="flex gap-4">
            <li>
              <Link to="/">home</Link>
            </li>
            <li>
              <Link to="/about">about</Link>
            </li>
            <li>
              <Link to="/todo">todo</Link>
            </li>
          </ul>
        </div>
      </nav>
      <div className="container mx-auto py-4">{children}</div>
      <footer className="bg-gray-200 py-4">
        <div className="container mx-auto py-4">푸터영역</div>
      </footer>
    </>
  );
}

export default Layout;

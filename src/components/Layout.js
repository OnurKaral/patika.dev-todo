import React from "react";
import Sidebar from "./Sidebar";
import Nav from "./Nav";

function Layout(props) {
  return (
    <div>
      <div>
        <Sidebar history={props.history} />
        <div>
          <Nav />
          {props.children}
        </div>
      </div>
    </div>
  );
}

export default Layout;

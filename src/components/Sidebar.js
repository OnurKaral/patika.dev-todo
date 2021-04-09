import React, { useState } from "react";
import styled from "styled-components";
import SidebarItems from "./SidebarItems";
import { Link } from "react-router-dom";

function Sidebar(props, { defaultActive }) {
  const lastActiveIndexString = localStorage.getItem("lastActiveIndex");
  const lastActiveIndex = Number(lastActiveIndexString);
  const [activeIndex] = useState(lastActiveIndex || defaultActive);

  return (
    <>
      <SidebarParent>
        <div>
          {SidebarItems.map((item, index) => {
            return (
              <Link to={item.route}>
                <SidebarItem key={item.name} active={index === activeIndex}>
                  <p>{item.name}</p>
                </SidebarItem>
              </Link>
            );
          })}
        </div>
        <div />
      </SidebarParent>
    </>
  );
}

export default Sidebar;

const SidebarParent = styled.div`
  background: #cf3d2a;
`;

const SidebarItem = styled.div`
  padding: 16px 24px;
  transition: all 0.25s ease-in-out;
  background: ${(props) => (props.active ? "#b15b00" : "")};
  margin: 4px 12px;
  border-radius: 4px;
  p {
    color: white;
    font-weight: bold;
    text-decoration: none;
  }
`;

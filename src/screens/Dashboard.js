import React from "react";
import MCard from "../components/MCard";
import GridLayout from "react-grid-layout";
import { Card } from "@material-ui/core";

class Dashboard extends React.Component {
  render() {
    return (
      <div>
        <MCard />
        <MCard />
        <MCard />
        <MCard />
      </div>
    );
  }
}

export default Dashboard;

import React, { Component } from "react";
import Todo from "./Todo";
import Card from "@material-ui/core/Card";

export default class MCard extends Component {
  constructor(props) {
    super(props);
    // This state changes so the card is generated
    this.state = {
      change: "",
    };
    this.handel = this.handel.bind(this);
  }

  handel = (element) => {
    // This is the element which creates the card.
    element = <MCard />;
    this.setState({
      change: this.state.change.concat(element),
    });
    console.log("created");
  };

  render() {
    return (
      <div style={{ display: "flex" }}>
        <Card>
          <Todo />
        </Card>
      </div>
    );
  }
}

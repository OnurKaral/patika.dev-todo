import React, { Component } from "react";
import PropTypes from "prop-types";
import { Checkbox, Form,Card } from "semantic-ui-react";
import Button from "@material-ui/core/Button";
import Todo from './Todo'



export default class MCard extends Component {
  constructor(props) {
    super(props);
    // This state changes so the card is generated
    this.state = {
        change: '',
    }
    this.handel = this.handel.bind(this);
  }

  handel = (element) => {
    // This is the element which creates the card. 
    element = <MCard />
    this.setState({
      change: this.state.change.concat(element)
  });
  console.log("created")
  }

  render() {
    return (
      <Card>
      
          <Todo/>
    </Card>
    );
  }
}
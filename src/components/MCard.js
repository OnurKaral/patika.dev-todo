import React, { Component } from "react";
import PropTypes from "prop-types";
import { Checkbox, Form,Card } from "semantic-ui-react";
import Button from "@material-ui/core/Button";


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
      <div>
        <div class="ui card">
  <div class="content">
    <div class="header">Project Timeline</div>
  </div>
  <div class="content">
    <h4 class="ui sub header">Activity</h4>
    <div class="ui small feed">
      <div class="event">
        <div class="content">
          <div class="summary">
             <a>Elliot Fu</a> added <a>Jenny Hess</a> to the project
          </div>
        </div>
      </div>
      <div class="event">
        <div class="content">
          <div class="summary">
             <a>Stevie Feliciano</a> was added as an <a>Administrator</a>
          </div>
        </div>
      </div>
      <div class="event">
        <div class="content">
          <div class="summary">
             <a>Helen Troy</a> added two pictures
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="extra content">
    <button  onClick={this.handel}  class="ui button">Join Project</button>
  </div>
</div>
      </div>
    );
  }
}
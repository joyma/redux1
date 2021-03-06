import React, { Component } from "react";
import { connect } from "react-redux";
import { getSolutions } from "../actions/index";
export class Solutions extends Component {
  constructor() {
    super();
  }
  componentDidMount() {
    this.props.getSolutions();
  }
  render() {
    return (
      <ul className="list-group list-group-flush">
        {this.props.articles.map(el => (
          <li className="list-group-item" key={el.id}>
            {el.title}
          </li>
        ))}
      </ul>
    );
  }
}
function mapStateToProps(state) {
  return {
    articles: state.remoteSolutions.slice(0, 10)
  };
}
export default connect( mapStateToProps, { getSolutions }) 
  (Solutions);
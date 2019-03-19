// src/js/components/List.jsx
import React from "react";
import { connect } from "react-redux";

const mapStateToProps = state => {
  return { solutions: state.solutions };
};

const ConnectedList = ({ solutions }) => (
  <ul className="list-group list-group-flush">
    {solutions.map(el => (
      <li className="list-group-item" key={el.id}>
        {el.title}
      </li>
    ))}
  </ul>
);
const List = connect(mapStateToProps)(ConnectedList);
export default List;
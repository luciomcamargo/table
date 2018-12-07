import React, { Component } from "react";
import "./Table.css";
import axios from "axios";

class Table extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }
  componentDidMount() {
    axios.get(`http://localhost:3000/db.json`).then(res => {
      const data = Object.values(res.data.data).map(({ title }) => ({
        title
      }));

      this.setState({ data: data });
    });
  }
  render() {
    const data = this.state.data.slice(0, 20);
    const titles = data.map((titles, index) => (
      <div className="grid-item" key={titles.title + index}>
        <p key={titles.title}>{titles.title}</p>{" "}
      </div>
    ));
    return (
      <div className="grid-container">
        <div className="grid">
          <div className="grid-col--fixed-left">
            <div className="grid-item--header" />
            <div className="grid-item-col">
              <p>Hello</p>
            </div>
            <div className="grid-item-col">
              <p>Hello</p>
            </div>
            <div className="grid-item-col">
              <p>Hello</p>
            </div>
            <div className="grid-item-col">
              <p>Hello</p>
            </div>
            <div className="grid-item-col">
              <p>Hello</p>
            </div>
            <div className="grid-item-col">
              <p>Hello</p>
            </div>
            <div className="grid-item-col">
              <p>Hello</p>
            </div>
            <div className="grid-item-col">
              <p>Hello</p>
            </div>
            <div className="grid-item-col">
              <p>Hello</p>
            </div>
            <div className="grid-item-col">
              <p>Hello</p>
            </div>
          </div>

          <div className="grid-col">
            <div className="grid-item--header">
              <p>HEAD</p>
            </div>
            {titles}
          </div>

          <div className="grid-col">
            <div className="grid-item--header">
              <p>HEAD</p>
            </div>

            {titles}
          </div>

          <div className="grid-col">
            <div className="grid-item--header">
              <p>HEAD</p>
            </div>
            {titles}
          </div>

          <div className="grid-col">
            <div className="grid-item--header">
              <p>HEAD</p>
            </div>
            {titles}
          </div>

          <div className="grid-col">
            <div className="grid-item--header">
              <p>HEAD</p>
            </div>

            {titles}
          </div>

          <div className="grid-col">
            <div className="grid-item--header">
              <p>HEAD</p>
            </div>
            {titles}
          </div>

          <div className="grid-col">
            <div className="grid-item--header">
              <p>HEAD</p>
            </div>
            {titles}
          </div>

          <div className="grid-col">
            <div className="grid-item--header">
              <p>HEAD</p>
            </div>
            {titles}
          </div>

          <div className="grid-col">
            <div className="grid-item--header">
              <p>HEAD</p>
            </div>
            {titles}
          </div>

          <div className="grid-col">
            <div className="grid-item--header">
              <p>HEAD</p>
            </div>
            {titles}
          </div>
        </div>
      </div>
    );
  }
}

export default Table;

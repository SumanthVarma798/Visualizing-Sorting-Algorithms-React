import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../styles/selectionPage.css";

class SelectionPage extends Component {
  constructor() {
    super();
    this.getArraySizeVal = this.getArraySizeVal.bind(this);
    this.getTypeOfSort = this.getTypeOfSort.bind(this);
  }

  getArraySizeVal(input) {
    this.props.giveArraySize(input.target.value);
  }

  getTypeOfSort(input) {
    this.props.giveAlgorithm(input.target.value);
  }

  render() {
    return (
      <div className="contents">
        <h1>Visualizing Sorting Algorithms</h1>
        <div className="selections">
          <div className="arraysize mr-3">
            <div className="input-group mb-3">
              <div className="input-group-prepend">
                <label className="input-group-text" htmlFor="arraysize">
                  Array Size
                </label>
              </div>
              <select
                className="custom-select"
                id="arraysize"
                onChange={this.getArraySizeVal}
                placeholder="Select size..."
              >
                <option value="10">10</option>
                <option value="20">20</option>
                <option value="30">30</option>
                <option value="40">40</option>
                <option value="50">50</option>
              </select>
            </div>
          </div>
          <div className="sortType">
            <div className="input-group mb-3">
              <div className="input-group-prepend">
                <label className="input-group-text" htmlFor="sortType">
                  Type of Sorting Algorithm
                </label>
              </div>
              <select
                className="custom-select"
                id="sortType"
                onChange={this.getTypeOfSort}
                placeholder="Select type..."
              >
                <option value="1">Bubble Sort</option>
                <option value="2">Heap Sort</option>
                <option value="3">Insertion Sort</option>
                <option value="4">Merge Sort</option>
                <option value="5">Quick Sort</option>
                <option value="6">Selection Sort</option>
              </select>
            </div>
          </div>
        </div>
        <div>
          <Link to="/visualization" className="visualiseButton">
            Visualize
          </Link>
        </div>
      </div>
    );
  }
}

export default SelectionPage;

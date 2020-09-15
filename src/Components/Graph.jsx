import React, { Component } from "react";
import { Link } from "react-router-dom";
import * as d3 from "d3";
import BubbleSort from "../SortingAlgorithms/BubbleSort";
import HeapSort from "../SortingAlgorithms/HeapSort";
import InsertionSort from "../SortingAlgorithms/InsertionSort";
import MergeSort from "../SortingAlgorithms/MergeSort";
import QuickSort from "../SortingAlgorithms/QuickSort";
import SelectionSort from "../SortingAlgorithms/SelectionSort";

class Graph extends Component {
  componentDidMount() {
    this.drawBarGraph();
  }

  componentDidUpdate() {
    this.drawBarGraph();
  }

  drawBarGraph() {
    const { unsortedArray, typeOfAlgorithm } = this.props;
    const margin = { top: 20, right: 20, bottom: 50, left: 50 };
    const width = 1200 - margin.left - margin.right;
    const height = 600 - margin.top - margin.bottom;

    const xScale = d3.scaleLinear().range([0, width]);
    const yScale = d3.scaleLinear().range([height - 40, 40]);

    let svg = d3
      .select(".center")
      .append("svg")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
      .append("g")
      .attr("transform", `translate(${margin.left},${margin.top})`);

    xScale.domain([0, unsortedArray.length]);
    yScale.domain(d3.extent(unsortedArray));
    let result = [null, null];

    if (typeOfAlgorithm === "Bubble Sort") {
      result = BubbleSort(unsortedArray);
    } else if (typeOfAlgorithm === "Selection Sort") {
      result = SelectionSort(unsortedArray);
    } else if (typeOfAlgorithm === "Insertion Sort") {
      result = InsertionSort(unsortedArray);
    } else if (typeOfAlgorithm === "Merge Sort") {
      result = MergeSort(unsortedArray);
    } else if (typeOfAlgorithm === "Quick Sort") {
      result = QuickSort(unsortedArray);
    } else if (typeOfAlgorithm === "Heap Sort") {
      result = HeapSort(unsortedArray);
    }

    const [dataArray, timeComplexity] = result;

    const renderGraph = (dJoin, Data) => {
      const barWidth = Math.floor(width / Data.length) - 5;
      dJoin
        .selectAll("rect")
        .data(Data, (d) => d)
        .enter()
        .append("rect")
        .attr("y", (d) => height - yScale(d))
        .attr("height", (d) => yScale(d))
        .attr("width", barWidth)
        .attr("rx", 3)
        .attr("fill", "orange")
        .attr("opacity", 0.8)
        .merge(dJoin.selectAll("rect").data(Data, (d) => d))
        .transition()
        .duration(1000)
        .attr("x", (d, i) => xScale(i));
      dJoin
        .selectAll("rect")
        .data(Data, (d) => d)
        .exit()
        .transition()
        .duration(1000)
        .attr("width", 0)
        .remove();
    };

    for (let i = 0; i < dataArray.length; i++) {
      setTimeout(() => {
        renderGraph(svg, dataArray[i]);
      }, i * 1000);
    }

    const xAxis = d3.axisBottom(xScale);
    const yAxis = d3.axisLeft(yScale);

    svg
      .append("g")
      .attr("transform", `translate(0, ${height + 10})`)
      .call(xAxis);
    svg.append("g").attr("transform", "translate(-10, 0)").call(yAxis);

    svg
      .append("text")
      .attr("text-anchor", "middle")
      .attr("font-family", "Courier New")
      .attr("font-size", 14)
      .attr("font-weight", "bold")
      .attr("x", width / 2)
      .attr("y", height + 45)
      .text("Element Index");

    svg
      .append("text")
      .attr("text-anchor", "middle")
      .attr("transform", "rotate(-90)")
      .attr("font-family", "Courier New")
      .attr("font-size", 14)
      .attr("font-weight", "bold")
      .attr("x", -height / 2)
      .attr("y", -40)
      .text("Element Value");

    svg
      .append("text")
      .attr("text-anchor", "middle")
      .attr("font-family", "Courier New")
      .attr("font-size", 14)
      .attr("font-weight", "bold")
      .attr("x", width - 100)
      .attr("y", -8)
      .text(`Time complexity: ${timeComplexity}`);

    svg
      .append("text")
      .attr("text-anchor", "middle")
      .attr("font-family", "Courier New")
      .attr("font-size", 16)
      .attr("font-weight", "bold")
      .attr("text-decoration", "underline")
      .attr("x", width / 2)
      .attr("y", -8)
      .text(`Visualization of ${typeOfAlgorithm} algorithm`);
  }
  render() {
    return (
      <React.Fragment>
        <div className="center"></div>
        <div>
          <Link to="/" className="backButton" onClick={this.props.onReset}>
            Back to Selection
          </Link>
        </div>
      </React.Fragment>
    );
  }
}

export default Graph;

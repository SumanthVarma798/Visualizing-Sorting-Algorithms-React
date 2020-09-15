import React from "react";
import { Route, Switch } from "react-router-dom";
import Graph from "./Components/Graph";
import SelectionPage from "./Components/SelectionPage";
import "./styles/App.css";

function Main() {
  let state = {
    1: "Bubble Sort",
    2: "Heap Sort",
    3: "Insertion Sort",
    4: "Merge Sort",
    5: "Quick Sort",
    6: "Selection Sort",
    Algorithm: "Bubble Sort",
    unsortedArray: [4, 8, 5, 1, 6, 9, 7, 3, 10, 2],
  };

  const onBackClick = () => {
    state.Algorithm = "Bubble Sort";
    state.unsortedArray = [4, 8, 5, 1, 6, 9, 7, 3, 10, 2];
  };

  const getArraySize = (size = 10) => {
    let arr = [];
    let randomNumber = undefined;
    while (arr.length <= size) {
      randomNumber = Math.floor(Math.random() * (size + 1));
      if (arr.indexOf(randomNumber) === -1) arr.push(randomNumber);
    }
    state.unsortedArray = arr;
    console.log(state.unsortedArray);
  };

  const getTypeOfAlgorithm = (id = 1) => (state.Algorithm = state[id]);

  return (
    <React.Fragment>
      <Switch>
        <Route
          path="/visualization"
          render={() => (
            <Graph
              unsortedArray={state.unsortedArray}
              typeOfAlgorithm={state.Algorithm}
              onReset={onBackClick}
            />
          )}
        />
        <Route
          path="/"
          exact
          render={() => (
            <SelectionPage
              giveArraySize={getArraySize}
              giveAlgorithm={getTypeOfAlgorithm}
            />
          )}
        />
      </Switch>
    </React.Fragment>
  );
}

export default Main;

import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
//import "./App.css";

function App() {
  return (
    <div className="container text-center todo-container">
      <h1>TODO APP</h1>

      <div className="row">
        <div className="col-6">
          <input type="text" placeholder="Enter Todo Here" />
        </div>
        <div className="col-4">
          <input type="text" placeholder="Enter Todo Here" />
        </div>
        <div className="col-2">
          <button className="btn btn-success ms-5">Add</button>

        </div>
      </div>

      <div className="row">
        <div className="col-6">
         Buy Milk
        </div>
        <div className="col-4">
         4/10/2023
        </div>
        <div className="col-2">
         <button type="button" class="btn btn-outline-danger">Delete</button>

        </div>
      </div>

      <div className="row">
        <div className="col-6">
          <input type="text" placeholder="Enter Todo Here" />
        </div>
        <div className="col-4">
          <input type="text" placeholder="Enter Todo Here" />
        </div>
        <div className="col-2">
          <button className="btn btn-success ms-5">Add</button>

        </div>
      </div>
    </div>
  );
}




export default App;

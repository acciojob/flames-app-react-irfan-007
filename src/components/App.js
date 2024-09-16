import React, { Component, useState } from "react";
import "../styles/App.css";

function App() {
  const [name1, setName1] = useState("");
  const [name2, setName2] = useState("");
  const [output, setOutput] = useState("");
  const submit = (e) => {
    e.preventDefault();
    if (name1 == "" || name2 == "") {
      setOutput("Please Enter valid input");
      return;
    }
    let ans = solve(name1, name2);
    setOutput(ans);
  };
  return (
    <div id="main">
      <form onSubmit={submit}>
        <input
          name="name1"
          data-testid="input1"
          type="text"
          placeholder="Enter first name"
          onChange={(e) => setName1(e.target.value)}
        />
        <input
          name="name2"
          data-testid="input2"
          type="text"
          placeholder="Enter second name"
          onChange={(e) => setName2(e.target.value)}
        />
        <button data-testid="calculate_relationship" type="submit">
          Calculate Relationship Future
        </button>
        <button data-testid="clear" type="reset" onClick={(e) => setOutput("")}>
          Clear
        </button>
      </form>
      <h3 data-testid="answer">{output}</h3>
    </div>
  );
}

export default App;

function solve(s1, s2) {
  //   console.log(s1, s2);
  const res = {
    1: "Friends",
    2: "Love",
    3: "Affection",
    4: "Marriage",
    5: "Enemy",
    0: "Siblings",
  };

  // logic of Flame game ---
  let countS1 = s1.length;
  for (let i of s1) {
    if (s2.includes(i)) {
      s2 = s2.replace(i, "");
      countS1--;
    }
  }

  let count = s2.length + countS1;
  return res[count % 6];
}

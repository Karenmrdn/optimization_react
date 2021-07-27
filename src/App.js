import React, { useState, useCallback, useMemo } from "react";
import "./App.css";
import DemoList from "./components/demo/DemoList";
import DemoOutput from "./components/demo/DemoOutput";
import Button from "./components/UI/Button/Button";

/* function App() {
  const [showParagraph, setShowParagraph] = useState(false);
  const [allowToggle, setAllowToggle] = useState(false);

  const toggleParagraphHandler = useCallback(
    (e) => {
      if (allowToggle) {
        setShowParagraph((prevValue) => !prevValue);
      }
    },
    [allowToggle]
  );

  const allowToggleHandler = (e) => {
    setAllowToggle(true);
  };

  console.log("App");

  return (
    <div className="app">
      <h1>Hi there!</h1>
      <Button onClick={allowToggleHandler}>Allow toggle!</Button>
      <Button onClick={toggleParagraphHandler}>Toggle paragraph!</Button>
      <DemoOutput show={showParagraph} />
    </div>
  );
} */

/* useMemo example */
function App() {
  const [listTitle, setListTitle] = useState("My List");

  const changeTitleHandler = useCallback(() => {
    setListTitle("New Title");
  }, []);

  const listItems = useMemo(() => [5, 3, 1, 10, 9], []);

  return (
    <div className="app">
      <DemoList title={listTitle} items={listItems} />
      <Button onClick={changeTitleHandler}>Change List Title</Button>
    </div>
  );
}

export default App;

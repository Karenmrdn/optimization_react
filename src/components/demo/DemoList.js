import React, { useMemo } from "react";
import classes from "./DemoList.module.css";

const DemoList = (props) => {
  const sortedList = useMemo(() => {
    console.log("Items sorted");
    return props.items.sort((a, b) => a - b);
  }, [props.items]);

  console.log("DemoList");

  return (
    <div className={classes.list}>
      <h2>{props.title}</h2>
      <ul>
        {sortedList.map((item) => (
          <li key={Math.random() + Date.now()}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default React.memo(DemoList);

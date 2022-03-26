import React from "react";
import "./Question.css";

const Question = () => {
  return (
    <div>
      <h1>Answer Two Question</h1>
      <hr />
      <h3>How does useState work?</h3>
      <p>
        UseState is a react hook state where it can set various data from a
        diclarative function component. When react render a file under the hood
        useState work as a react hooks that help re-rendering file fast. First
        we need to declare a state in the function component then it start to
        read or access. If there are any change in the file, it update the state
        by making a virtual dom. We can use it as much as we need to set data in
        a state.
      </p>

      <h3>What are the differences between props and state?</h3>
      <p>
        Props stands for properties which is immutable but state are mutable in
        the function component. We can pass data, eventHandler, function etc
        through props. But state is just a function component. Generally states
        are updated by object but props are static. State makes hook in the
        react rerendering by a function component where props just received from
        another function argument. The props and state are accessible as
        attributes with a view to different representation.
      </p>
    </div>
  );
};

export default Question;

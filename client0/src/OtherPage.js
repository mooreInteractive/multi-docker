import React from "react";
import { Link } from "react-router-dom";

export default () => {
  return (
    <div>
      I'm a second page!
      <Link to="/">Home</Link>
    </div>
  );
};

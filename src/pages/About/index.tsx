import React from "react";
import { Link } from "react-router-dom";

const About = (): JSX.Element => {
  return (
    <>
      <h1>hello from about page</h1>
      <Link to="/">Go to about page</Link>
    </>
  );
};

export default About;

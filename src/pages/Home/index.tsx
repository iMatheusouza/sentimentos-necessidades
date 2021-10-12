import React from "react";
import { Link } from "react-router-dom";

const Home = (): JSX.Element => {
  return (
    <>
      <h1>hello from Homepage</h1>
      <Link to="/about">Go to about page</Link>
    </>
  );
};

export default Home;

import React from "react";
import { Link } from "react-router-dom";
import Header from "../../components/Header";

const Home = (): JSX.Element => {
  return (
    <>
      <h1>hello from Homepage</h1>
      <Link to="/about">Go to about page</Link>
      <Header />
    </>
  );
};

export default Home;

import React from "react";

const Home = () => {
  return (
    <div>
      <div> I'm in My home component.</div>
      <button onClick={() => console.log("Hi there")}>Press Me</button>
    </div>
  );
};

export default Home;

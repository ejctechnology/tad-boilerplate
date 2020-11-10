import React from "react";
import Header from "../Components/Header/index";
// import StaticContext from "../../Contexts/StaticContext/index";
import Bottom from "../Components/Bottom";
import StaticContextProvider from "../../Contexts/StaticContext";
function Pricing(props) {
  return (
    <div>
      <StaticContextProvider>
        <Header />

        <Bottom />
      </StaticContextProvider>
    </div>
  );
}

export default Pricing;

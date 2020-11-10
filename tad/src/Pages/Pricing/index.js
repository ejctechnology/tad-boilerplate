import React from "react";
import Header from "../Components/Header/index";
import styled from "styled-components";
import CardPricing from "../Pricing/Card/index";
import Bottom from "../../Pages/Components/Bottom/index";
import StaticContextProvider from "../../Contexts/StaticContext";
const PricingSession = styled.div``;

const PricingCardGroup = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`;

function Pricing(props) {
  return (
    <PricingSession>
      <Header />

      <PricingCardGroup>
        <CardPricing title="Daily" pricing="R100" />
        <CardPricing title="Weekly" pricing="R250" />
        <CardPricing title="Montly" pricing="R500" />
      </PricingCardGroup>

      <StaticContextProvider>
        <Bottom />
      </StaticContextProvider>
    </PricingSession>
  );
}

export default Pricing;

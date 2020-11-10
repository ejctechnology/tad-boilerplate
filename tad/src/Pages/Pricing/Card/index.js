import React from "react";
import styled from "styled-components";

const CardPricing = styled.div`
  margin: 180px 0px 0 40px;
  width: 300px;
  height: 320px;
  border: transparent;
  overflow: hidden;
  /* background-color: rgba(4, 8, 37, 0.8); */
  box-shadow: rgba(0, 0, 0, 0.25) 0px 20px 40px;
  border-radius: 20px;
  /* background: rgba(4, 8, 35, 0.9); */
  backdrop-filter: blur(40px);
  transition: all 0.8s cubic-bezier(0.2, 0.8, 0.2, 1) 0s;

  background-color: #63d471;

  h2 {
    color: white;
    text-align: center;
    font-weight: 600;
    white-space: nowrap;
    font-size: 32px;
    line-height: 52px;
  }
  p {
    color: white;
    text-align: center;
    white-space: nowrap;
    font-size: 50px;
    line-height: 69px;
    font-weight: 600;
  }

  button {
    background: #e8e9b3;
    margin-left: 40px;
    padding: 8px 20px;
    font-size: 20px;
    border: none;
    font-weight: 700;
    border-radius: 10px;
    outline: none;
    cursor: pointer;
    transition: 1s;
  }
`;

const PricingCard = (props) => {
  return (
    <CardPricing>
      <p>{props.pricing}</p>
      <h2>{props.title}</h2>
      <button>Get your package</button>
    </CardPricing>
  );
};

export default PricingCard;

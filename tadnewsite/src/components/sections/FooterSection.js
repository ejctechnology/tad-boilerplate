import React, { useContext } from "react";
import styled from "styled-components";
import { FooterContext } from "../../context/FooterContext";
import { Link } from "gatsby";

function FooterSection(props) {
  const { firstColumn,secondColumn } = useContext(FooterContext);
  

  return (
    <FooterHero>
      <FooterGroup>
      <FirstRowGroup>
          <Link>
            <img   alt="" src="images/icons/home.svg" />
            {firstColumn.home}
          </Link>
          <Link>
          <img alt="" src="images/icons/pen.svg" />
            {firstColumn.content}
          </Link>
          <Link>
            <img alt="" src="images/icons/pricing.svg" />
            {firstColumn.pricing}
          </Link>
         
          <Link>
          <img alt="" alt="" src="images/icons/courses.svg" />
            {firstColumn.courses}
          </Link>
          <Link>
          <img alt="" src="images/icons/more.svg" />
            {firstColumn.tutors}
          </Link>
      </FirstRowGroup>

      <SecondRowGroup>
          <Link>
          <img alt="" src="images/icons/account.svg" />
          {secondColumn.account}
          </Link>
          <Link>
          <img  alt=""src="images/icons/help.svg" />
            {secondColumn.help}
          </Link>
          <Link>
          <img alt="" src="images/icons/tutorials.svg" />
            {secondColumn.tutoring}
          </Link>
          <Link>
          <img alt="" src="images/icons/team.svg" />
            {secondColumn.community}
          </Link>
          <Link>
          <img alt="" src="images/icons/profile.svg" />
            {secondColumn.founders}
          </Link>
        </SecondRowGroup>
       
        <Wrapper>
            <TextWrapper>
            <Title>Site made with React, Gatsby,
            Amazon AWS</Title>
            <Content>takeanydoubt © 2020</Content>
            <Description>
            Terms of Service - Privacy Policy
            </Description>
            </TextWrapper>
          </Wrapper>
       
        </FooterGroup>
      
   </FooterHero>
)

}

export default FooterSection;

const FooterHero = styled.div`

width:100%;

background: rgb(30, 19, 87);

a {
  font-style: normal;
    font-size: 14px;
    font-weight: normal;
    line-height: 130%;
    color: rgb(255, 255, 255);
    text-align: center;
    margin: auto auto auto 10px;
    padding: 15px 18px 18px 22px;

    cursor:pointer;
 
  }

  a:hover {
  color: rgba(255, 255, 255, 0.6);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.25);
  transform: translateY (-3px);
  border-radius: 20px;
  /* border-style:solid; */
  border-color:red;
 
}

  img{
    margin: 0px 10px 0 0px;
  }
`

const FooterGroup = styled.div`
  display:grid;
  grid-template-columns: repeat(3, 1fr);
  padding-bottom:232px;
  padding-top:100px;
  


`
const FirstRowGroup = styled.div`
margin-left: 240px;
display:grid;
grid-template-rows:repeat(5,1fr);
grid-gap:20px;


`
const SecondRowGroup = styled.div`
margin-left: 10px;
display:grid;
grid-template-rows:repeat(5,1fr);
grid-gap:30px;

`

const Wrapper = styled.div`
margin-top:60px;
margin-left: 10px;


`;
  const TextWrapper = styled.div`
  display:grid;
  grid-template-rows: repeat(3,1fr);
  grid-gap:20px;
`;

    const Title = styled.h2`
    color: rgba(255, 255, 255, 0.6);

`;

    const Content = styled.p`
    color: rgba(255, 255, 255, 0.6);
`;
    const Description = styled.p`
    color: rgba(255, 255, 255, 0.6);
`




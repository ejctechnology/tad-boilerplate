import React from "react"
import Layout from "../components/layout/layout"
import SEO from "../components/layout/seo"
import styled from 'styled-components';



function IndexPage() {
  return (
    <Layout>
    <SEO title="home" />

    </Layout>
     
   
  )
}

const Wrapper = styled.div`
margin:20px 40px 0 20px;
`
 
const TextWrapper = styled.div`

margin:20px 40px 0 20px;`


const Title = styled.h1`
font-size: 16px;
color: red;
text-decoration:underline;
`




const Descrition = styled.p`
font-size:12px;
color:blue;
`








export default IndexPage

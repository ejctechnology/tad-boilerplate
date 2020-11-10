import React from "react";
import Layout from "../components/layout/layout";
import SEO from "../components/layout/seo";
import { Link } from "gatsby";


function Pricing() { 
    return (
      <Layout>
      <SEO title="pricing" />
      <div>
          <h1>New Page </h1>
          <Link to="/">Home</Link>
      </div>
      </Layout>
    )
  


}

export default Pricing;
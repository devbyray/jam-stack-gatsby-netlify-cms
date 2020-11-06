import React from "react";
import { Helmet } from "react-helmet";
import { graphql } from "gatsby";
import Layout from "../../components/Layout";
import ProductRoll from "../../components/ProductRoll";

const ProductPage = ({
  data: {
    site: {
      siteMetadata: { title }
    }
  }
}) => (
  <Layout>
    <section className="section">
      <Helmet title={`Products | ${title}`} />
      <div className="container content">
        <div className="columns">
          <div
            className="column is-10 is-offset-1"
            style={{ marginBottom: "6rem" }}
          >
            <h1 className="title is-size-2 is-bold-light">Products</h1>
          </div>
        </div>
        <ProductRoll />
      </div>
    </section>
  </Layout>
);

export default ProductPage;

export const productPageQuery = graphql`
  query ProductPageQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`;

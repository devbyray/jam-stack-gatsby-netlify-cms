import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import ProductRoll from "../components/ProductRoll";

export const ProductPageTemplate = ({ title }) => (
  <div className="content">
    <div className="full-width-image-container margin-top-0">
      <h2
        className="has-text-weight-bold is-size-1"
        style={{
          boxShadow: "0.5rem 0 0 #f40, -0.5rem 0 0 #f40",
          backgroundColor: "#f40",
          color: "white",
          padding: "1rem"
        }}
      >
        {title}
      </h2>
    </div>
    <ProductRoll />
  </div>
);

ProductPageTemplate.propTypes = {
  title: PropTypes.string
};

const ProductPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <ProductPageTemplate title={frontmatter.title} />
    </Layout>
  );
};

ProductPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object
    })
  })
};

export default ProductPage;

export const productPageQuery = graphql`
  query ProductPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
      }
    }
  }
`;

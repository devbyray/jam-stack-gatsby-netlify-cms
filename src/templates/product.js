import React from "react";
import PropTypes from "prop-types";
import { graphql, Link } from "gatsby";
import Layout from "../components/Layout";
import { kebabCase } from "lodash";
import Content, { HTMLContent } from "../components/Content";
import { Helmet } from "react-helmet";

export const ProductPostTemplate = ({
  title,
  description,
  featuredimage,
  content,
  contentComponent,
  tags,
  helmet
}) => {
  const ProductContent = contentComponent || Content;

  return (
    <div className="content">
      {helmet || ""}
      <div
        className="full-width-image-container margin-top-0"
        style={{
          backgroundImage: `url(${
            !!featuredimage.childImageSharp
              ? featuredimage.childImageSharp.fluid.src
              : featuredimage
          })`
        }}
      >
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
      <section className="section section--gradient">
        <div className="container">
          <div className="section">
            <div className="columns">
              <div className="column is-7 is-offset-1">
                <h3 className="has-text-weight-semibold is-size-2">{title}</h3>
                <ProductContent content={content} />
                {tags && tags.length ? (
                  <div style={{ marginTop: `4rem` }}>
                    <h4>Tags</h4>
                    <ul className="taglist">
                      {tags.map((tag) => (
                        <li key={tag + `tag`}>
                          <Link to={`/tags/${kebabCase(tag)}/`}>{tag}</Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : null}
              </div>
            </div>
            <div className="columns">
              <div
                className="full-width-image-container"
                style={{
                  backgroundImage: `url(${
                    featuredimage.childImageSharp
                      ? featuredimage.childImageSharp.fluid.src
                      : featuredimage
                  })`
                }}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

// title
// description
// featuredimage
// body
// tags

ProductPostTemplate.propTypes = {
  featuredimage: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  description: PropTypes.string,
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  tags: PropTypes.string,
  helmet: PropTypes.object
};

const ProductPage = ({ data }) => {
  const { markdownRemark: post } = data;
  console.log("post: ", post);

  return (
    <Layout>
      <ProductPostTemplate
        title={post.frontmatter.title}
        description={post.frontmatter.description}
        featuredimage={post.frontmatter.featuredimage}
        content={post.html}
        contentComponent={HTMLContent}
        tags={post.frontmatter.tags}
        helmet={
          <Helmet titleTemplate="%s | Blog">
            <title>{`${post.frontmatter.title}`}</title>
            <meta
              name="description"
              content={`${post.frontmatter.description}`}
            />
          </Helmet>
        }
      />
    </Layout>
  );
};

ProductPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object
  })
};

export default ProductPage;

export const productPageQuery = graphql`
  query ProductPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        title
        featuredimage {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        description
        tags
      }
    }
  }
`;

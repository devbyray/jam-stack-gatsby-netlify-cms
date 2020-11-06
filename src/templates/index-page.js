import React from "react";
import { Link } from "gatsby";

import Layout from "../components/Layout";
import ProductRoll from "../components/ProductRoll";

export const IndexPageTemplate = () => (
  <div>
    <section className="section section--gradient">
      <div className="container">
        <div className="section">
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <div className="content">
                <div className="content">
                  <div className="tile">
                    <h1 className="title">Webshop</h1>
                  </div>
                </div>
                <div className="column is-12">
                  <h3 className="has-text-weight-semibold is-size-2">
                    Latest products
                  </h3>
                  <ProductRoll />
                  <div className="column is-12 has-text-centered">
                    <Link className="btn" to="/blog">
                      Read more
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
);

const IndexPage = () => (
  <Layout>
    <IndexPageTemplate />
  </Layout>
);

export default IndexPage;

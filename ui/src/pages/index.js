import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../layouts/Layout';
import styles from './index.module.css';

export default ({ data }) => {

    const { title } = data.markdownRemark.frontmatter;

    return (
        <Layout>
            <div>
                <h1>{title}</h1>
                <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} ></div>
            </div>
        </Layout>
    );

};

export const indeQuery = graphql`
  query indeQuery ($path: String!) {
    markdownRemark(fields: { slug: { eq: $path } }) {
      frontmatter {
        title
      }
      html
    }
   }
`;

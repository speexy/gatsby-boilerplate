import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../layouts/Layout';
import styles from './index.module.css';

export default ({ data }) => {

    const { title, meta, image } = data.markdownRemark.frontmatter;

    return (
        <Layout meta={meta}>
            <div>
                <h1>{title}</h1>
                <img src={image.src} alt={image.src}/>
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
        meta {
          title
          description
        }
        image {
          src
          alt
        }
      }
      html
    }
   }
`;

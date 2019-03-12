import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../layouts/Layout';

import styles from './post.module.css';

export default ({ data }) => {

    const { title, meta, image } = data.markdownRemark.frontmatter;

    return (
        <Layout meta={meta}>
            <div className={styles.post}>
                <h1>{title}</h1>
                <img src={image.src} alt={image.alt}/>
                <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} ></div>
            </div>
        </Layout>
    );

};

export const postQuery = graphql`
  query ($path: String!) {
    markdownRemark(fields: { slug: { eq: $path } }) {
      html
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
